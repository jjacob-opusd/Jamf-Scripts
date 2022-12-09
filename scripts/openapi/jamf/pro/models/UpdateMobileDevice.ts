/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtensionAttribute } from './ExtensionAttribute.ts';
import type { Location } from './Location.ts';
import type { UpdateAppleTv } from './UpdateAppleTv.ts';
import type { UpdateIos } from './UpdateIos.ts';

export type UpdateMobileDevice = {
    name?: string;
    assetTag?: string;
    siteId?: number;
    location?: Location;
    updatedExtensionAttributes?: Array<ExtensionAttribute>;
    ios?: UpdateIos;
    appleTv?: UpdateAppleTv;
};

