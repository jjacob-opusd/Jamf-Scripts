/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeviceEnrollmentPrestage } from './DeviceEnrollmentPrestage.ts';

export type ComputerPrestage = (DeviceEnrollmentPrestage & {
    isInstallProfilesDuringSetup: boolean;
    prestageInstalledProfileIds: Array<number>;
    customPackageIds: Array<number>;
    customPackageDistributionPointId: number;
});

