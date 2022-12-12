import { cmdOutput } from './common/cmd.ts';
import { parsePlist } from './common/plist.ts';
import { ComputersService } from './openapi/jamf/classic/index.ts';

const JAMFConnection = {
	server: 'https://oakpark.jamfcloud.com/JSSResource',
	username: 'api',
	password: 'f9Akf*pk%H&ZZ;uXJg',
};

async function SPHardwareDataType() {
	const output = await cmdOutput([
		'system_profiler',
		'-xml',
		'SPHardwareDataType',
	]);
	const plist = await parsePlist(output);
	return plist[0]._items[0];
}
const hardware = await SPHardwareDataType();

// const computerResponse = await fetch(
//   `${JAMFConnection.server}/computers/serialnumber/${hardware.serial_number}`,
//   {
//     headers: {
//       Accept: "application/json",
//       Authorization: `Basic ${
//         btoa(
//           JAMFConnection.username + ":" + JAMFConnection.password,
//         )
//       }`,
//     },
//   },
// ).then((res) => res.json());
const computerResponse = await ComputersService.findComputersBySerialNumber({
	serialnumber: hardware.serial_number,
});

const buildingShortcodes = {
	BES: 'B',
	DO: 'DO',
	EC: 'EC',
	MCMS: 'MC',
	OHES: 'OH',
	OPHS: 'HS',
	OPIS: 'IS',
	OPNS: 'NS',
	OVHS: 'OV',
	ROES: 'R',
	Technology: 'IT',
};
const building: keyof typeof buildingShortcodes =
	computerResponse.computer.location.building;
const buildingShortcode = buildingShortcodes[building] || 'NONE';

const assetTag = computerResponse.computer.general.asset_tag.replace('-', '');

const modelShortcodes = {
	macbookpro: 'MBP',
	macbookair: 'MBA',
	macbook: 'MB',
	macmini: 'MM',
	macstudio: 'MS',
	macpro: 'MP',
	powermac: 'PM',
};

const modelIdentifier: keyof typeof modelShortcodes = hardware.machine_model
	.replace(/[0-9,]/g, '')
	.toLowerCase();
const modelShortcode = modelShortcodes[modelIdentifier];

const hostname = `${buildingShortcode}-${assetTag}-${modelShortcode}`;

console.log({ hostname });

// console.log('Setting hostname...');
// await cmdOutput(['scutil', '--set', 'HostName', hostname]);
// await cmdOutput(['scutil', '--set', 'ComputerName', hostname]);
// await cmdOutput(['scutil', '--set', 'LocalHostName', hostname]);
// await cmdOutput(['jamf', 'recon']);
// await cmdOutput(['jamf', 'policy']);
console.log('Done');
