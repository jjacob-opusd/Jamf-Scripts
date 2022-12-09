export async function cmdOutput(cmd: string[]) {
	const proc = Deno.run({
		cmd,
		stdout: 'piped',
	});
	const output = await proc.output();
	return new TextDecoder().decode(output);
}
