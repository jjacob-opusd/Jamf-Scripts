/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerContentCachingParentCapabilities } from './ComputerContentCachingParentCapabilities.ts';
import type { ComputerContentCachingParentLocalNetwork } from './ComputerContentCachingParentLocalNetwork.ts';

export type ComputerContentCachingParentDetails = {
    readonly contentCachingParentDetailsId?: string;
    readonly acPower?: boolean;
    readonly cacheSizeBytes?: number;
    capabilities?: ComputerContentCachingParentCapabilities;
    readonly portable?: boolean;
    localNetwork?: Array<ComputerContentCachingParentLocalNetwork>;
};

