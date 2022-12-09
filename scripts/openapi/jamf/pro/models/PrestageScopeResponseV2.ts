/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrestageScopeAssignmentV2 } from './PrestageScopeAssignmentV2.ts';

export type PrestageScopeResponseV2 = {
    prestageId?: string;
    assignments?: Array<PrestageScopeAssignmentV2>;
    versionLock?: number;
};

