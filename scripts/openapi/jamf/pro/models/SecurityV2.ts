/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SecurityV2 = {
    dataProtected?: boolean;
    blockLevelEncryptionCapable?: boolean;
    fileLevelEncryptionCapable?: boolean;
    passcodePresent?: boolean;
    passcodeCompliant?: boolean;
    passcodeCompliantWithProfile?: boolean;
    hardwareEncryption?: number;
    activationLockEnabled?: boolean;
    jailBreakDetected?: boolean;
};

