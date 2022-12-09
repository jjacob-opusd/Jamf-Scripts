/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MacapplicationsService {

    /**
     * Finds all mac applications
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMacapps(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/macapplications',
        });
    }

    /**
     * Deletes a mac application by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteMacappById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/macapplications/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mac applications by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMacappsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/macapplications/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new mac application by id
     * POST cannot be used to set vpp codes.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMacappById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/macapplications/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing mac application by id
     * PUT cannot be used to set vpp codes.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateMacappById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/macapplications/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a mac application
     * Displays information specified with the {subset} parameter for a mac application specified with the {id} parameter. Lookup by name is also supported.  For example, /macapplications/id/3/subset/General&Scope or /macapplications/id/3/subset/General.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMacappsByIdSubset({
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
            url: '/macapplications/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds mac applications by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMacappsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/macapplications/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
