/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AndroidDetails } from './AndroidDetails.ts';
import type { AppleTvDetails } from './AppleTvDetails.ts';
import type { ExtensionAttribute } from './ExtensionAttribute.ts';
import type { IdAndName } from './IdAndName.ts';
import type { IosDetails } from './IosDetails.ts';
import type { Location } from './Location.ts';

export type MobileDeviceDetails = {
    id?: number;
    name?: string;
    assetTag?: string;
    lastInventoryUpdateTimestamp?: string;
    osVersion?: string;
    osBuild?: string;
    softwareUpdateDeviceId?: string;
    serialNumber?: string;
    udid?: string;
    ipAddress?: string;
    wifiMacAddress?: string;
    bluetoothMacAddress?: string;
    isManaged?: boolean;
    initialEntryTimestamp?: string;
    lastEnrollmentTimestamp?: string;
    deviceOwnershipLevel?: string;
    site?: IdAndName;
    extensionAttributes?: Array<ExtensionAttribute>;
    location?: Location;
    /**
     * Based on the value of this either ios, appleTv, android objects will be populated.
     */
    type?: 'ios' | 'appleTv' | 'android' | 'unknown';
    ios?: IosDetails;
    appleTv?: AppleTvDetails;
    android?: AndroidDetails;
};

