import {
	green,
	red,
	yellow,
} from 'https://deno.land/std@0.170.0/fmt/colors.ts';
import { parse } from 'https://deno.land/x/xml/mod.ts';
import { DeviceConfiguration } from './types.ts';

type ProfilePreview = {
	id: number;
	name: string;
};

const headers = {
	Authorization: 'Basic YXBpOmY5QWtmKnBrJUgmWlo7dVhKZw==',
	Accept: 'application/xml',
	'Content-Type': 'application/xml',
	Cookie: 'APBALANCEID=aws.usw2-std-pelican2-tc-2; AWSALB=us91VEkFa6U6XmAecXlUBA+QbL6LE2NfYfK1yIadNGfr7n3I8tvg5w7K7vOkNYM55A3AlU0xmBar5HZSsO5wdbNyCof6ui+mFk9ZhGRgtN5TlWbJTt6tg04R+Hxk; AWSALBCORS=us91VEkFa6U6XmAecXlUBA+QbL6LE2NfYfK1yIadNGfr7n3I8tvg5w7K7vOkNYM55A3AlU0xmBar5HZSsO5wdbNyCof6ui+mFk9ZhGRgtN5TlWbJTt6tg04R+Hxk',
};

async function getProfile(id: number, endpoint: string) {
	const body = await fetch(
		`https://oakpark.jamfcloud.com/JSSResource/${endpoint}/id/${id}`,
		{ method: 'GET', headers }
	).then((r) => r.text());
	const xml = parse(body) as unknown as DeviceConfiguration;
	if ('html' in xml) throw new Error(JSON.stringify(xml, null, 2));
	return xml;
}

async function dropLimitations(
	id: number,
	objName: typeof objNameLookup[keyof typeof objNameLookup],
	endpoint: typeof endpointLookup[keyof typeof endpointLookup],
	type: 'limitations' | 'exclusions'
) {
	const payload = `<${objName}>
<scope>
  <${type}>
  <user_groups></user_groups>
  </${type}>
</scope>
</${objName}>`;

	const res = await fetch(
		`https://oakpark.jamfcloud.com/JSSResource/${endpoint}/id/${id}`,
		{ method: 'PUT', headers, body: payload }
	);
	if (res.status.toString().startsWith('2')) {
		console.log(green(`Sucessfully updated config #${id}`));
	} else {
		const text = await res.text();
		console.error(res.status, res.statusText);
		console.log(red(text));
		throw new Error(`Failed to update config #${id}`);
	}
}

const objNameLookup = {
	mobileconfiguration: 'configuration_profile',
	mobileapplication: 'mobile_device_application',
	osxconfiguration: 'os_x_configuration_profile',
	policies: 'policy',
} as const;

const endpointLookup = {
	mobileconfiguration: 'mobiledeviceconfigurationprofiles',
	mobileapplication: 'mobiledeviceapplications',
	osxconfiguration: 'osxconfigurationprofiles',
	policies: 'policies',
} as const;

async function run(
	type:
		| 'mobileconfiguration'
		| 'osxconfiguration'
		| 'mobileapplication'
		| 'policies'
) {
	const objName = objNameLookup[type];

	const endpoint = endpointLookup[type];

	const body = await fetch(
		`https://oakpark.jamfcloud.com/JSSResource/${endpoint}`,
		{ method: 'GET', headers }
	).then((r) => r.text());

	const xml = parse(body) as any;
	const list: ProfilePreview[] =
		xml?.[(objName + 's').replace('ys', 'ies')]?.[objName];

	const studentLimited = new Set<number>();

	async function iter({ id }: { id: number }) {
		const dpId = id.toString().padStart(3, ' ');
		const profile = await getProfile(id, endpoint);

		async function check(type: 'limitations' | 'exclusions') {
			const limitations = profile[objName].scope[type];
			if (JSON.stringify(limitations).toLowerCase().includes('student')) {
				// nope out
				console.log(`Ignoring ${dpId}: Student in profile`);
				studentLimited.add(id);
			} else if (profile[objName].scope[type]?.user_groups) {
				console.log(yellow(`Dropping ${type} ${id}: Eligible`));
				await dropLimitations(id, objName, endpoint, type);
			} else {
				console.log(`Ignoring ${dpId}: No user_group ${type}`);
			}
		}

		await check('limitations');
		await check('exclusions');
	}

	// run concurrently
	await Promise.all(list.map(iter));

	return studentLimited;
}

const opts = [
	'mobileconfiguration',
	'osxconfiguration',
	'mobileapplication',
	'policies',
] as const;
const arg = Deno.args[0] as typeof opts[number];
if (!arg || !opts.includes(arg)) {
	console.log(
		`Please specify a type: ${opts.map((o) => yellow(o)).join(', ')}`
	);
	Deno.exit(1);
}
const studentLimited = await run(arg);

await Deno.writeFile(
	`student-limited/${arg}.txt`,
	new TextEncoder().encode([...studentLimited].join('\n')),
	{ create: true }
);
