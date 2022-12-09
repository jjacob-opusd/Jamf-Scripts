/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerExtensionAttribute } from './ComputerExtensionAttribute.ts';

export type ComputerGeneralUpdate = {
    name?: string;
    lastIpAddress?: string;
    barcode1?: string;
    barcode2?: string;
    assetTag?: string;
    extensionAttributes?: Array<ComputerExtensionAttribute>;
};

