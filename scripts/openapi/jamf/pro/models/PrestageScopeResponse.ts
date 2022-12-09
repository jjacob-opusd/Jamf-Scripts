/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrestageScopeAssignment } from './PrestageScopeAssignment.ts';

export type PrestageScopeResponse = {
    prestageId?: number;
    assignments?: Array<PrestageScopeAssignment>;
    versionLock?: number;
};

