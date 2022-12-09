/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MobileDevicePrestageName } from './MobileDevicePrestageName.ts';

export type MobileDevicePrestageNames = {
    assignNamesUsing?: string;
    prestageDeviceNames?: Array<MobileDevicePrestageName>;
    deviceNamePrefix?: string;
    deviceNameSuffix?: string;
    singleDeviceName?: string;
    isManageNames?: boolean;
    isDeviceNamingConfigured?: boolean;
};

