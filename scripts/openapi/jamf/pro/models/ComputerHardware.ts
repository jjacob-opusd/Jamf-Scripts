/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerExtensionAttribute } from './ComputerExtensionAttribute.ts';

export type ComputerHardware = {
    readonly make?: string;
    readonly model?: string;
    readonly modelIdentifier?: string;
    readonly serialNumber?: string;
    /**
     * Processor Speed in MHz.
     */
    readonly processorSpeedMhz?: number;
    readonly processorCount?: number;
    readonly coreCount?: number;
    readonly processorType?: string;
    readonly processorArchitecture?: string;
    readonly busSpeedMhz?: number;
    /**
     * Cache Size in KB.
     */
    readonly cacheSizeKilobytes?: number;
    networkAdapterType?: string;
    macAddress?: string;
    altNetworkAdapterType?: string;
    altMacAddress?: string;
    /**
     * Total RAM Size in MB.
     */
    readonly totalRamMegabytes?: number;
    /**
     * Available RAM slots.
     */
    readonly openRamSlots?: number;
    /**
     * Remaining percentage of battery power.
     */
    readonly batteryCapacityPercent?: number;
    readonly smcVersion?: string;
    readonly nicSpeed?: string;
    readonly opticalDrive?: string;
    readonly bootRom?: string;
    readonly bleCapable?: boolean;
    readonly supportsIosAppInstalls?: boolean;
    readonly appleSilicon?: boolean;
    extensionAttributes?: Array<ComputerExtensionAttribute>;
};

