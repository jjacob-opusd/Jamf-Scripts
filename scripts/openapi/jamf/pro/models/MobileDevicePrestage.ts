/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeviceEnrollmentPrestage } from './DeviceEnrollmentPrestage.ts';
import type { MobileDevicePrestageNames } from './MobileDevicePrestageNames.ts';

export type MobileDevicePrestage = (DeviceEnrollmentPrestage & {
    isAllowPairing: boolean;
    isMultiUser: boolean;
    isSupervised: boolean;
    maximumSharedAccounts: number;
    isAutoAdvanceSetup: boolean;
    isConfigureDeviceBeforeSetupAssistant: boolean;
    language?: string;
    region?: string;
    names?: MobileDevicePrestageNames;
});

