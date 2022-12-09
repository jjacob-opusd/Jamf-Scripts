/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Site } from './Site.ts';

export type VppAdminAccount = {
    id?: number;
    name?: string;
    licenseCount?: number;
    usedLicenseCount?: number;
    location?: string;
    expirationDate?: string;
    site?: Site;
};

