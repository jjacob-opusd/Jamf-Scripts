// deno run -A npm:openapi-typescript-codegen --input ./schema.json --output ./generated

import { walk } from 'https://deno.land/std@0.166.0/fs/mod.ts';

for await (const entry of walk(Deno.args[0], { exts: ['.ts'] })) {
	const text = await Deno.readTextFile(entry.path);
	const regex = /(?<=from\s+['"])(.*)(?=['"])/g;
	const newText = text.replace(regex, (match) => {
		return match + '.ts';
	});
	await Deno.writeTextFile(entry.path, newText);
}
