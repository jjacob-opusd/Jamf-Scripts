/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchpoliciesService {

    /**
     * Finds all patch policies
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchPolicies(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchpolicies',
        });
    }

    /**
     * Deletes a patch policy by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deletePatchPolicyById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/patchpolicies/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds a patch policy by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchPolicyById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchpolicies/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing patch policy by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updatePatchPolicyById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/patchpolicies/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a patch policy
     * Displays information specified with the {subset} parameter for a patch policy specified with the {id} parameter. Lookup by name is also supported.  For example, /patchpolicies/id/3/subset/General&Scope&UserInteraction or /patchpolicies/id/3/subset/UserInteraction.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchPoliciesByIdSubset({
        id,
        subset = 'General',
    }: {
        /**
         * Id to filter by
         */
        id: string,
        /**
         * Subset to filter by
         */
        subset?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchpolicies/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds all patch policy by software title configuration id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchPoliciesBySoftwareTitleConfigId({
        softwaretitleconfigid,
    }: {
        /**
         * Software title config Id value to filter by
         */
        softwaretitleconfigid: Array<number>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchpolicies/softwaretitleconfig/id/{softwaretitleconfigid}',
            path: {
                'softwaretitleconfigid': softwaretitleconfigid,
            },
        });
    }

    /**
     * Create a new patch policy by software title configuration id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createPatchPolicyBySoftwareTitleConfigId({
        softwaretitleconfigid,
    }: {
        /**
         * Software title config Id value to filter by
         */
        softwaretitleconfigid: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patchpolicies/softwaretitleconfig/id/{softwaretitleconfigid}',
            path: {
                'softwaretitleconfigid': softwaretitleconfigid,
            },
        });
    }

}
