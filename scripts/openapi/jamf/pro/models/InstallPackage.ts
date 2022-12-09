/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PackageManifest } from './PackageManifest.ts';

/**
 * Either devices or groupId must be provided
 */
export type InstallPackage = {
    manifest: PackageManifest;
    installAsManaged?: boolean;
    devices?: Array<number>;
    groupId?: string;
};

