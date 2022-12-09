/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerPartitionEncryption } from './ComputerPartitionEncryption.ts';

export type ComputerDiskEncryption = {
    bootPartitionEncryptionDetails?: ComputerPartitionEncryption;
    individualRecoveryKeyValidityStatus?: 'VALID' | 'INVALID' | 'UNKNOWN' | 'NOT_APPLICABLE';
    institutionalRecoveryKeyPresent?: boolean;
    diskEncryptionConfigurationName?: string;
    fileVault2EnabledUserNames?: Array<string>;
    fileVault2EligibilityMessage?: string;
};

