/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerContentCachingAlert } from './ComputerContentCachingAlert.ts';
import type { ComputerContentCachingCacheDetail } from './ComputerContentCachingCacheDetail.ts';
import type { ComputerContentCachingDataMigrationError } from './ComputerContentCachingDataMigrationError.ts';
import type { ComputerContentCachingParent } from './ComputerContentCachingParent.ts';

export type ComputerContentCaching = {
    readonly computerContentCachingInformationId?: string;
    readonly parents?: Array<ComputerContentCachingParent>;
    readonly alerts?: Array<ComputerContentCachingAlert>;
    readonly activated?: boolean;
    readonly active?: boolean;
    readonly actualCacheBytesUsed?: number;
    readonly cacheDetails?: Array<ComputerContentCachingCacheDetail>;
    readonly cacheBytesFree?: number;
    readonly cacheBytesLimit?: number;
    readonly cacheStatus?: string;
    readonly cacheBytesUsed?: number;
    readonly dataMigrationCompleted?: boolean;
    readonly dataMigrationProgressPercentage?: number;
    dataMigrationError?: ComputerContentCachingDataMigrationError;
    readonly maxCachePressureLast1HourPercentage?: number;
    readonly personalCacheBytesFree?: number;
    readonly personalCacheBytesLimit?: number;
    readonly personalCacheBytesUsed?: number;
    readonly port?: number;
    readonly publicAddress?: string;
    readonly registrationError?: string;
    readonly registrationResponseCode?: number;
    readonly registrationStarted?: string;
    readonly registrationStatus?: 'CONTENT_CACHING_FAILED' | 'CONTENT_CACHING_PENDING' | 'CONTENT_CACHING_SUCCEEDED';
    readonly restrictedMedia?: boolean;
    readonly serverGuid?: string;
    readonly startupStatus?: string;
    readonly tetheratorStatus?: 'CONTENT_CACHING_UNKNOWN' | 'CONTENT_CACHING_DISABLED' | 'CONTENT_CACHING_ENABLED';
    readonly totalBytesAreSince?: string;
    readonly totalBytesDropped?: number;
    readonly totalBytesImported?: number;
    readonly totalBytesReturnedToChildren?: number;
    readonly totalBytesReturnedToClients?: number;
    readonly totalBytesReturnedToPeers?: number;
    readonly totalBytesStoredFromOrigin?: number;
    readonly totalBytesStoredFromParents?: number;
    readonly totalBytesStoredFromPeers?: number;
};

