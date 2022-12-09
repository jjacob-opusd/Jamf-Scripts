/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatchPolicyAttempt } from '../models/PatchPolicyAttempt.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchPolicyLogsPreviewService {

    /**
     * @deprecated
     * Return the Patch Policy Attempt details
     *
     * Returns the patch policy attempt details
     * @returns PatchPolicyAttempt Patch Policy Attempt Details
     * @throws ApiError
     */
    public static getPatchPatchPoliciesLogs({
        id,
        deviceId,
    }: {
        /**
         * patch policy id
         */
        id: number,
        /**
         * device id
         */
        deviceId?: number,
    }): CancelablePromise<Array<PatchPolicyAttempt>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/patch-policies/{id}/logs',
            path: {
                'id': id,
            },
            query: {
                'device-id': deviceId,
            },
        });
    }

}
