/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdAndName } from './IdAndName.ts';
import type { Security } from './Security.ts';

/**
 * will be populated if the type is android.
 */
export type AndroidDetails = {
    osName?: string;
    manufacturer?: string;
    model?: string;
    internalCapacityMb?: number;
    internalAvailableMb?: number;
    internalPercentUsed?: number;
    externalCapacityMb?: number;
    externalAvailableMb?: number;
    externalPercentUsed?: number;
    batteryLevel?: number;
    lastBackupTimestamp?: string;
    apiVersion?: number;
    computer?: IdAndName;
    security?: Security;
};

