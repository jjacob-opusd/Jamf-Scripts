/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PoliciesService {

    /**
     * Finds all policies
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPolicies(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies',
        });
    }

    /**
     * Finds all policies by category
     * Category may be specified by id or name, or 'None' for policies with no category.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPoliciesByCategory({
        category = 'None',
    }: {
        /**
         * Category to filter by
         */
        category?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/category/{category}',
            path: {
                'category': category,
            },
        });
    }

    /**
     * Finds all policies by type
     * Type may be specified by Jamf Pro.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPoliciesByType({
        createdBy = 'jss',
    }: {
        /**
         * Type to filter by
         */
        createdBy?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/createdBy/{createdBy}',
            path: {
                'createdBy': createdBy,
            },
        });
    }

    /**
     * Deletes a policy by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deletePolicyById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds policies by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPoliciesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new policy by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createPolicyById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing policy by id
     * PUT also works with a name. One or more computers can be added by using <computer_additions> instead of <computers>. One or more computers can be deleted by using <computer_deletions> instead of <computers>
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updatePolicyById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/policies/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a policy
     * Displays information specified with the {subset} parameter for a policy specified with the {id} parameter. Lookup by name is also supported.  For example, /policies/id/3/subset/General&Location&Purchasing or /policies/id/3/subset/Purchasing.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPoliciesByIdSubset({
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
            url: '/policies/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds policies by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPoliciesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
