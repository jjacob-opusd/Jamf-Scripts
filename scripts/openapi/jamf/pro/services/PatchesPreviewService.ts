/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivePatchHistorySearchResults } from '../models/ActivePatchHistorySearchResults.ts';
import type { ActivePatchSummary } from '../models/ActivePatchSummary.ts';
import type { IntegerWrapper } from '../models/IntegerWrapper.ts';
import type { PatchIdsOnDashboard } from '../models/PatchIdsOnDashboard.ts';
import type { PatchPolicyLogSearchResults } from '../models/PatchPolicyLogSearchResults.ts';
import type { PatchPolicySummary } from '../models/PatchPolicySummary.ts';
import type { PatchVersion } from '../models/PatchVersion.ts';
import type { RetryPatchPolicyParams } from '../models/RetryPatchPolicyParams.ts';
import type { SearchActivePatchHistoryParams } from '../models/SearchActivePatchHistoryParams.ts';
import type { SearchPatchPolicyLogParams } from '../models/SearchPatchPolicyLogParams.ts';
import type { SoftwareTitleConfiguration } from '../models/SoftwareTitleConfiguration.ts';
import type { SoftwareTitlePatchPolicySummaries } from '../models/SoftwareTitlePatchPolicySummaries.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchesPreviewService {

    /**
     * Accept Patch reporting disclaimer
     *
     * Accept Patch reporting disclaimer
     * @returns any Accepted
     * @throws ApiError
     */
    public static postPatchDisclaimerAgree(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patch/disclaimerAgree',
        });
    }

    /**
     * @deprecated
     * Return the count of the Patch Policy Logs for the policy is that are eligible for a retry attempt
     *
     * return the count of the patch policy logs for the policy ID that are eligible for a retry attempt
     * @returns IntegerWrapper Number of patch policy logs found
     * @throws ApiError
     */
    public static getPatchObjPolicyLogsEligibleRetryCount({
        id,
    }: {
        /**
         * policy id
         */
        id: number,
    }): CancelablePromise<IntegerWrapper> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/obj/policy/{id}/logs/eligibleRetryCount',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Return the Software Title Configuration Id for the given patch
     *
     * Return the Software Title Configuration Id for the given patch policy.
     * @returns IntegerWrapper Found software title configuration id
     * @throws ApiError
     */
    public static getPatchObjPolicySoftwareTitleConfigurationId({
        id,
    }: {
        /**
         * policy id
         */
        id: number,
    }): CancelablePromise<IntegerWrapper> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/obj/policy/{id}/softwareTitleConfigurationId',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Return the Summaries of the Patch Policies for the software title
     *
     * Returns the summaries of the patch policies for the software title.
     * @returns SoftwareTitlePatchPolicySummaries Software Title patch policy summaries found
     * @throws ApiError
     */
    public static getPatchObjSoftwareTitlePolicies({
        id,
    }: {
        /**
         * software title id
         */
        id: number,
    }): CancelablePromise<SoftwareTitlePatchPolicySummaries> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/obj/softwareTitle/{id}/policies',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Return the Software Title Configuration
     *
     * Returns the software title configuration.
     * @returns SoftwareTitleConfiguration Software Title Configuration found
     * @throws ApiError
     */
    public static getPatchObjSoftwareTitleConfiguration({
        id,
    }: {
        /**
         * software title configuration id
         */
        id: number,
    }): CancelablePromise<SoftwareTitleConfiguration> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/obj/softwareTitleConfiguration/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Return Active Patch Summary
     *
     * Returns active patch summary.
     * @returns ActivePatchSummary Active Patch Summary
     * @throws ApiError
     */
    public static getPatchObj({
        id,
    }: {
        /**
         * patch id
         */
        id: number,
    }): CancelablePromise<ActivePatchSummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/obj/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update patch report
     *
     * Updates patch report.
     * @returns ActivePatchSummary Active Patch Summary
     * @throws ApiError
     */
    public static putPatchObj({
        id,
        requestBody,
    }: {
        /**
         * patch id
         */
        id: number,
        /**
         * Active patch summary.
         */
        requestBody: ActivePatchSummary,
    }): CancelablePromise<ActivePatchSummary> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/patch/obj/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Return patch versions
     *
     * Returns patch versions.
     * @returns PatchVersion Patch versions
     * @throws ApiError
     */
    public static getPatchObjVersions({
        id,
    }: {
        /**
         * patch id
         */
        id: number,
    }): CancelablePromise<Array<PatchVersion>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/obj/{id}/versions',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Return Patch Policy Summary
     *
     * Returns patch policy summary.
     * @returns PatchPolicySummary Patch policy summary found
     * @throws ApiError
     */
    public static getPatchObjsPolicy({
        id,
    }: {
        /**
         * patch policy id
         */
        id: number,
    }): CancelablePromise<PatchPolicySummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/objs/policy/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Return list of Patch ids on dashboard
     *
     * Returns list of patch ids on dashboard.
     * @returns PatchIdsOnDashboard Instance IDs returned in associated array, or if no instances present, an empty array shall be returned.
     * @throws ApiError
     */
    public static getPatchOnDashboard(): CancelablePromise<PatchIdsOnDashboard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/onDashboard',
        });
    }

    /**
     * @deprecated
     * Retry policy
     *
     * Retry policy
     * @returns any Accepted
     * @throws ApiError
     */
    public static postPatchRetryPolicy({
        requestBody,
    }: {
        requestBody?: RetryPatchPolicyParams,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patch/retryPolicy',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Search the history for a Specific Active Patch
     *
     * Searches the history for a specific active patch.  This is used to get detailed information about the computers/devices that a specific patch has been applied to.
     * @returns ActivePatchHistorySearchResults Search results.  No matches will be indicated by the return of an empty list.
     * @throws ApiError
     */
    public static postPatchSearchActivePatchHistory({
        requestBody,
    }: {
        /**
         * Parameters for search
         */
        requestBody?: SearchActivePatchHistoryParams,
    }): CancelablePromise<ActivePatchHistorySearchResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patch/searchActivePatchHistory',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Return Patch Policy Logs
     *
     * Return patch policy logs
     * @returns PatchPolicyLogSearchResults Patch policy logs found
     * @throws ApiError
     */
    public static postPatchSearchPatchPolicyLogs({
        requestBody,
    }: {
        requestBody?: SearchPatchPolicyLogParams,
    }): CancelablePromise<PatchPolicyLogSearchResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patch/searchPatchPolicyLogs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Retry policy
     *
     * Retry policy
     * @returns any Accepted
     * @throws ApiError
     */
    public static postPatchSvcRetryPolicy({
        requestBody,
    }: {
        requestBody?: RetryPatchPolicyParams,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patch/svc/retryPolicy',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
