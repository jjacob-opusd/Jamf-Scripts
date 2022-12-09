/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerExtensionAttribute } from './ComputerExtensionAttribute.ts';
import type { ComputerGeneralUpdate } from './ComputerGeneralUpdate.ts';
import type { ComputerHardwareUpdate } from './ComputerHardwareUpdate.ts';
import type { ComputerOperatingSystemUpdate } from './ComputerOperatingSystemUpdate.ts';
import type { ComputerPurchase } from './ComputerPurchase.ts';
import type { ComputerUserAndLocation } from './ComputerUserAndLocation.ts';

export type ComputerInventoryUpdateRequest = {
    udid?: string;
    general?: ComputerGeneralUpdate;
    purchasing?: ComputerPurchase;
    userAndLocation?: ComputerUserAndLocation;
    hardware?: ComputerHardwareUpdate;
    operatingSystem?: ComputerOperatingSystemUpdate;
    extensionAttributes?: Array<ComputerExtensionAttribute>;
};

