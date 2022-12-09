/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeviceEnrollmentPrestageV2 } from './DeviceEnrollmentPrestageV2.ts';

export type ComputerPrestageV2 = (DeviceEnrollmentPrestageV2 & {
    installProfilesDuringSetup: boolean;
    prestageInstalledProfileIds: Array<string>;
    customPackageIds: Array<string>;
    customPackageDistributionPointId: string;
    enableRecoveryLock?: boolean;
    recoveryLockPasswordType?: 'MANUAL' | 'RANDOM';
    rotateRecoveryLockPassword?: boolean;
});

