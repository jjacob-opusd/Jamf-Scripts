/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignRemoveProfileResponseSyncState } from './AssignRemoveProfileResponseSyncState.ts';

export type DeviceEnrollmentDevice = {
    id?: string;
    deviceEnrollmentProgramInstanceId?: string;
    prestageId?: string;
    serialNumber?: string;
    description?: string;
    model?: string;
    color?: string;
    assetTag?: string;
    profileStatus?: 'EMPTY' | 'ASSIGNED' | 'PUSHED' | 'REMOVED';
    syncState?: AssignRemoveProfileResponseSyncState;
    profileAssignTime?: string;
    profilePushTime?: string;
    deviceAssignedDate?: string;
};

