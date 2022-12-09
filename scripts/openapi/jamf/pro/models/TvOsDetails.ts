/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigurationProfile } from './ConfigurationProfile.ts';
import type { MobileDeviceCertificateV2 } from './MobileDeviceCertificateV2.ts';
import type { PurchasingV2 } from './PurchasingV2.ts';

/**
 * will be populated if the type is appleTv.
 */
export type TvOsDetails = {
    model?: string;
    modelIdentifier?: string;
    modelNumber?: string;
    supervised?: boolean;
    airplayPassword?: string;
    deviceId?: string;
    locales?: string;
    purchasing?: PurchasingV2;
    configurationProfiles?: Array<ConfigurationProfile>;
    certificates?: Array<MobileDeviceCertificateV2>;
};

