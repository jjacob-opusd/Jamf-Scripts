/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivePatchSummary } from '../models/ActivePatchSummary.ts';
import type { PatchPolicySummary } from '../models/PatchPolicySummary.ts';
import type { PatchVersion } from '../models/PatchVersion.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchesService {

    /**
     * @deprecated
     * Return Patch Policy Summary
     *
     * Returns patch policy summary.
     * @returns PatchPolicySummary Patch policy summary found
     * @throws ApiError
     */
    public static getPatchObjPolicy({
        id,
    }: {
        /**
         * patch policy id
         */
        id: number,
    }): CancelablePromise<PatchPolicySummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/obj/policy/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Accept Patch reporting disclaimer
     *
     * Accept Patch reporting disclaimer
     * @returns any Accepted
     * @throws ApiError
     */
    public static postPatchSvcDisclaimerAgree(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patch/svc/disclaimerAgree',
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
    public static getPatch({
        id,
    }: {
        /**
         * patch id
         */
        id: number,
    }): CancelablePromise<ActivePatchSummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Update patch report
     *
     * Updates patch report.
     * @returns ActivePatchSummary Active Patch Summary
     * @throws ApiError
     */
    public static putPatch({
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
            url: '/patch/{id}',
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
    public static getPatchVersions({
        id,
    }: {
        /**
         * patch id
         */
        id: number,
    }): CancelablePromise<Array<PatchVersion>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patch/{id}/versions',
            path: {
                'id': id,
            },
        });
    }

}
