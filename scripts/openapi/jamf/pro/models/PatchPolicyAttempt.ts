/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PatchPolicyAttemptAction } from './PatchPolicyAttemptAction.ts';

export type PatchPolicyAttempt = {
    id?: number;
    attemptNo?: number;
    deviceId?: number;
    actions?: Array<PatchPolicyAttemptAction>;
};

