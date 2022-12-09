/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerDisk } from './ComputerDisk.ts';

export type ComputerStorage = {
    readonly bootDriveAvailableSpaceMegabytes?: number;
    disks?: Array<ComputerDisk>;
};

