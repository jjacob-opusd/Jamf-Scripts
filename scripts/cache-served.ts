import { format } from 'https://deno.land/std@0.167.0/fmt/bytes.ts';
import { cmdOutput } from './common/cmd.ts';

const columns = [
	'ZBYTESFROMCACHETOCHILD',
	'ZBYTESFROMCACHETOCLIENT',
	'ZBYTESFROMCACHETOPEER',
	'ZBYTESFROMORIGINTOCHILD',
	'ZBYTESFROMORIGINTOCLIENT',
	'ZBYTESFROMORIGINTOPEER',
	'ZBYTESFROMPARENTTOCHILD',
	'ZBYTESFROMPARENTTOCLIENT',
	'ZBYTESFROMPARENTTOPEER',
	'ZBYTESFROMPEERTOCHILD',
	'ZBYTESFROMPEERTOCLIENT',
];

const joinedColumns = columns.map((c) => `SUM(${c})`).join(', ');
const commands = `.open '"/Library/Application Support/Apple/AssetCache/Metrics/Metrics.db"'
SELECT ${joinedColumns} FROM ZMETRIC;`;

const output = await cmdOutput(['zsh', '-c', `echo "${commands}" | sqlite3`]);
const total = output
	.split('|')
	.map((c) => parseInt(c))
	.reduce((a, b) => a + b);

console.log(`<result>${format(total)}</result>`);
