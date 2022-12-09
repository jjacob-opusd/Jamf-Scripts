/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Security = {
    isDataProtected?: boolean;
    isBlockLevelEncryptionCapable?: boolean;
    isFileLevelEncryptionCapable?: boolean;
    isPasscodePresent?: boolean;
    isPasscodeCompliant?: boolean;
    isPasscodeCompliantWithProfile?: boolean;
    hardwareEncryption?: number;
    isActivationLockEnabled?: boolean;
    isJailBreakDetected?: boolean;
};

