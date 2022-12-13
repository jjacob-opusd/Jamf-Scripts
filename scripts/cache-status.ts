import { format } from 'https://deno.land/std@0.167.0/fmt/bytes.ts';
import { cmdOutput } from './common/cmd.ts';

export function parseCacheStatus(output: string) {
	const json = JSON.parse(output);
	const cacheDetails = json.result.CacheDetails;

	const entries: [string, number][] = Object.entries(cacheDetails);
	const total = entries.map(([_, size]) => size).reduce((a, b) => a + b, 0);
	entries.push(['Total', total]);

	const resultArray = entries.map(([key, size]) => `${key}: ${format(size)}`);

	return resultArray.join('\n');
}

if (import.meta.main) {
	const output = await cmdOutput(['AssetCacheManagerUtil', 'status', '-j']);
	const cacheStatus = parseCacheStatus(output);
	console.log(`<result>${cacheStatus}</result>`);
}
