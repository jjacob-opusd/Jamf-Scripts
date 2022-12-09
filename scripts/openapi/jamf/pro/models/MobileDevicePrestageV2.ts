/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeviceEnrollmentPrestageV2 } from './DeviceEnrollmentPrestageV2.ts';
import type { MobileDevicePrestageNamesV2 } from './MobileDevicePrestageNamesV2.ts';

export type MobileDevicePrestageV2 = (DeviceEnrollmentPrestageV2 & {
    allowPairing: boolean;
    multiUser: boolean;
    supervised: boolean;
    maximumSharedAccounts: number;
    configureDeviceBeforeSetupAssistant: boolean;
    names?: MobileDevicePrestageNamesV2;
    sendTimezone: boolean;
    timezone: string;
    storageQuotaSizeMegabytes: number;
    useStorageQuotaSize: boolean;
    temporarySessionOnly?: boolean;
    enforceTemporarySessionTimeout?: boolean;
    temporarySessionTimeout?: number;
    enforceUserSessionTimeout?: boolean;
    userSessionTimeout?: number;
});

