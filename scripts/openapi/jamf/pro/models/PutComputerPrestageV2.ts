/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerPrestageV2 } from './ComputerPrestageV2.ts';

export type PutComputerPrestageV2 = (ComputerPrestageV2 & {
    recoveryLockPassword?: string;
    versionLock?: number;
});

