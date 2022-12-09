/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerPrestage } from './ComputerPrestage.ts';

export type GetComputerPrestage = (ComputerPrestage & {
    id?: number;
    profileUUID?: string;
    siteId?: number;
    versionLock?: number;
});

