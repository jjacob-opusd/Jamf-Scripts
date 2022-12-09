/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerPartitionFileVault2State } from './ComputerPartitionFileVault2State.ts';

export type ComputerPartition = {
    readonly name?: string;
    /**
     * Partition Size in MB.
     */
    readonly sizeMegabytes?: number;
    /**
     * Available space in MB.
     */
    readonly availableMegabytes?: number;
    readonly partitionType?: 'BOOT' | 'RECOVERY' | 'OTHER';
    /**
     * Percentage of space used.
     */
    readonly percentUsed?: number;
    fileVault2State?: ComputerPartitionFileVault2State;
    /**
     * Percentage progress of current FileVault 2 operation.
     */
    fileVault2ProgressPercent?: number | null;
    readonly lvmManaged?: boolean;
};

