/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerExtensionAttribute } from './ComputerExtensionAttribute.ts';

export type ComputerOperatingSystem = {
    readonly name?: string;
    readonly version?: string;
    readonly build?: string;
    readonly activeDirectoryStatus?: string;
    fileVault2Status?: 'NOT_APPLICABLE' | 'NOT_ENCRYPTED' | 'BOOT_ENCRYPTED' | 'SOME_ENCRYPTED' | 'ALL_ENCRYPTED';
    readonly softwareUpdateDeviceId?: string;
    extensionAttributes?: Array<ComputerExtensionAttribute>;
};

