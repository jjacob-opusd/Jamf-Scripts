/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigurationProfile } from './ConfigurationProfile.ts';
import type { Purchasing } from './Purchasing.ts';

/**
 * will be populated if the type is appleTv.
 */
export type AppleTvDetails = {
    model?: string;
    modelIdentifier?: string;
    modelNumber?: string;
    isSupervised?: boolean;
    airplayPassword?: string;
    deviceId?: string;
    locales?: string;
    purchasing?: Purchasing;
    configurationProfiles?: Array<ConfigurationProfile>;
};

