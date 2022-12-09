/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerExtensionAttribute } from './ComputerExtensionAttribute.ts';

export type ComputerHardwareUpdate = {
    networkAdapterType?: string;
    macAddress?: string;
    altNetworkAdapterType?: string;
    altMacAddress?: string;
    extensionAttributes?: Array<ComputerExtensionAttribute>;
};

