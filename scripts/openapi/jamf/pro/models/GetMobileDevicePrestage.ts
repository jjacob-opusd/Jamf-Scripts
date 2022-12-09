/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MobileDevicePrestage } from './MobileDevicePrestage.ts';

export type GetMobileDevicePrestage = (MobileDevicePrestage & {
    id?: number;
    profileUUID?: string;
    siteId?: number;
    versionLock?: number;
});

