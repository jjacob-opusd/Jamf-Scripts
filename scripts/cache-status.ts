import { prettyBytes } from 'https://deno.land/std@0.159.0/fmt/bytes.ts';
import { cmdOutput } from './common/cmd.ts';
const output = await cmdOutput(['AssetCacheManagerUtil', 'status', '-j']);
// const output =
// `{"name":"status","result":{"Activated":true,"Active":true,"ActualCacheUsed":25372533652,"CacheDetails":{"iCloud":66865237359,"iOS Software":11569824459,"Mac Software":1920947609,"Other":3476398111},"CacheFree":408552388110,"CacheLimit":0,"CacheStatus":"OK","CacheUsed":83832407538,"MaxCachePressureLast1Hour":0,"Parents":[],"Peers":[{"address":"172.19.55.57","details":{"ac-power":true,"cache-size":1000000000000,"capabilities":{"im":true,"ns":true,"pc":true,"query-parameters":true,"sc":true,"ur":true},"is-portable":false,"local-network":[{"speed":10000,"wired":true}]},"friendly":true,"guid":"670713FB-0F1A-4BFC-AF40-F062D01B7D2E","healthy":true,"port":53575,"version":"244"}],"PersonalCacheFree":422045637632,"PersonalCacheLimit":0,"PersonalCacheUsed":66865237359,"Port":49174,"PrivateAddresses":["172.19.55.62"],"PublicAddress":"207.157.204.2","RegistrationStatus":1,"RestrictedMedia":false,"ServerGUID":"6A9D309E-5BE2-46B3-88CE-A38825E4E41D","StartupStatus":"OK","TetheratorStatus":0,"TotalBytesAreSince":"2022-12-10 08:15:15 +0000","TotalBytesDropped":9100,"TotalBytesImported":1147445515,"TotalBytesReturnedToChildren":5611710675,"TotalBytesReturnedToClients":13700916733,"TotalBytesReturnedToPeers":791178,"TotalBytesStoredFromOrigin":6081010524,"TotalBytesStoredFromParents":0,"TotalBytesStoredFromPeers":607307173}}`;
const json = JSON.parse(output);
const cacheDetails = json.result.CacheDetails;

console.log(cacheDetails);
const entries: [string, number][] = Object.entries(cacheDetails);
const total = entries.map(([_, size]) => size).reduce((a, b) => a + b, 0);
entries.push(['Total', total]);

const resultArray = entries.map(([key, size]) =>
	`${key}: ${prettyBytes(size)}`
);
const pretty = resultArray.join('\n');

console.log(`<result>${pretty}</result>`);
