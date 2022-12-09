/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MemcachedEndpoints } from './MemcachedEndpoints.ts';

export type CacheSettings = {
    readonly id?: string;
    name?: string;
    cacheType: string;
    timeToLiveSeconds: number;
    timeToIdleSeconds?: number;
    directoryTimeToLiveSeconds?: number;
    ehcacheMaxBytesLocalHeap?: string;
    /**
     * The default is for Jamf Pro to generate a UUID, so we can only give an example instead.
     */
    cacheUniqueId: string;
    elasticache?: boolean;
    memcachedEndpoints: Array<MemcachedEndpoints>;
};

