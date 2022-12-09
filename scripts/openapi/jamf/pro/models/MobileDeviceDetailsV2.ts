/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtensionAttributeV2 } from './ExtensionAttributeV2.ts';
import type { IosDetailsV2 } from './IosDetailsV2.ts';
import type { LocationV2 } from './LocationV2.ts';
import type { TvOsDetails } from './TvOsDetails.ts';
import type { V1Site } from './V1Site.ts';

export type MobileDeviceDetailsV2 = {
    readonly id?: string;
    /**
     * Mobile device name.
     */
    name?: string;
    /**
     * Enforce the mobile device name. Device must be supervised. If set to true, Jamf Pro will revert the Mobile Device Name to the ‘name’ value each time the device checks in.
     */
    enforceName?: boolean;
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
    managed?: boolean;
    timeZone?: string;
    initialEntryTimestamp?: string;
    lastEnrollmentTimestamp?: string;
    mdmProfileExpirationTimestamp?: string;
    deviceOwnershipLevel?: string;
    enrollmentMethod?: string;
    enrollmentSessionTokenValid?: boolean;
    site?: V1Site;
    extensionAttributes?: Array<ExtensionAttributeV2>;
    location?: LocationV2;
    /**
     * Based on the value of this either ios, appleTv, android objects will be populated.
     */
    type?: 'ios' | 'tvos' | 'unknown';
    ios?: IosDetailsV2;
    tvos?: TvOsDetails;
};

