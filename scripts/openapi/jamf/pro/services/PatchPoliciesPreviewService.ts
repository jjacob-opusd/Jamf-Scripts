/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatchPolicyOnDashboard } from '../models/PatchPolicyOnDashboard.ts';
import type { PatchPolicySummary } from '../models/PatchPolicySummary.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchPoliciesPreviewService {

    /**
     * @deprecated
     * Return a list of patch policies
     *
     * Returns a list of patch policies.
     * @returns PatchPolicySummary Filtered list of patch policy summaries
     * @throws ApiError
     */
    public static getPatchPatchPolicies({
        onDashboard = false,
        enabled = false,
    }: {
        /**
         * Filters whether or not the patch policies are on the dashboard.
         */
        onDashboard?: boolean,
        /**
         * Filters whether or not the patch policies are enabled.
         */
        enabled?: boolean,
    }): CancelablePromise<Array<PatchPolicySummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/patch-policies',
            query: {
                'onDashboard': onDashboard,
                'enabled': enabled,
            },
        });
    }

    /**
     * Return whether or not the requested patch policy is on the dashboard
     *
     * Returns whether or not the requested patch policy is on the dashboard
     * @returns PatchPolicyOnDashboard Whether the Patch Policy is on the Dashboard.
     * @throws ApiError
     */
    public static getPatchPatchPoliciesDashboard({
        id,
    }: {
        /**
         * patch policy id
         */
        id: number,
    }): CancelablePromise<PatchPolicyOnDashboard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/patch-policies/{id}/dashboard',
            path: {
                'id': id,
            },
            errors: {
                404: `The requested Patch Policy does not exist`,
            },
        });
    }

    /**
     * Add a patch policy to the dashboard
     *
     * Adds a patch policy to the dashboard.
     * @returns void
     * @throws ApiError
     */
    public static postPatchPatchPoliciesDashboard({
        id,
    }: {
        /**
         * patch policy id
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patch/patch-policies/{id}/dashboard',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Remove a patch policy from the dashboard
     *
     * Removes a patch policy from the dashboard.
     * @returns void
     * @throws ApiError
     */
    public static deletePatchPatchPoliciesDashboard({
        id,
    }: {
        /**
         * patch id
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/patch/patch-policies/{id}/dashboard',
            path: {
                'id': id,
            },
        });
    }

}
