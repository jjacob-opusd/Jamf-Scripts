/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtensionAttributeV2 } from './ExtensionAttributeV2.ts';
import type { LocationV2 } from './LocationV2.ts';
import type { UpdateIosV2 } from './UpdateIosV2.ts';
import type { UpdateTvOs } from './UpdateTvOs.ts';

export type UpdateMobileDeviceV2 = {
    /**
     * Mobile Device Name. When updated, Jamf Pro sends an MDM settings command to the device (device must be supervised).
     */
    name?: string;
    /**
     * Enforce the mobile device name. Device must be supervised. If set to true, Jamf Pro will revert the Mobile Device Name to the ‘name’ value each time the device checks in.
     */
    enforceName?: boolean;
    assetTag?: string;
    siteId?: string;
    /**
     * IANA time zone database name
     */
    timeZone?: string;
    location?: LocationV2;
    updatedExtensionAttributes?: Array<ExtensionAttributeV2>;
    ios?: UpdateIosV2;
    tvos?: UpdateTvOs;
};

