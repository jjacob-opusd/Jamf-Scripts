/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerPartition } from './ComputerPartition.ts';

export type ComputerDisk = {
    readonly id?: string;
    readonly device?: string;
    readonly model?: string;
    readonly revision?: string;
    readonly serialNumber?: string;
    /**
     * Disk Size in MB.
     */
    readonly sizeMegabytes?: number;
    /**
     * S.M.A.R.T Status
     */
    readonly smartStatus?: string;
    /**
     * Connection type attribute.
     */
    readonly type?: string;
    partitions?: Array<ComputerPartition>;
};

