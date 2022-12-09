/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComputerPrestage } from '../models/ComputerPrestage.ts';
import type { ComputerPrestageSearchResults } from '../models/ComputerPrestageSearchResults.ts';
import type { ComputerPrestageSearchResultsV2 } from '../models/ComputerPrestageSearchResultsV2.ts';
import type { GetComputerPrestage } from '../models/GetComputerPrestage.ts';
import type { GetComputerPrestageV2 } from '../models/GetComputerPrestageV2.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { PostComputerPrestageV2 } from '../models/PostComputerPrestageV2.ts';
import type { PrestageScope } from '../models/PrestageScope.ts';
import type { PrestageScopeResponse } from '../models/PrestageScopeResponse.ts';
import type { PrestageScopeResponseV2 } from '../models/PrestageScopeResponseV2.ts';
import type { PrestageScopeUpdate } from '../models/PrestageScopeUpdate.ts';
import type { PrestageScopeV2 } from '../models/PrestageScopeV2.ts';
import type { PutComputerPrestage } from '../models/PutComputerPrestage.ts';
import type { PutComputerPrestageV2 } from '../models/PutComputerPrestageV2.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerPrestagesService {

    /**
     * @deprecated
     * Search for sorted and paged Computer Prestages
     *
     * Search for sorted and paged computer prestages
     * @returns ComputerPrestageSearchResults Successful response
     * @throws ApiError
     */
    public static getV1ComputerPrestages({
        page,
        size = 100,
        pagesize = 100,
        pageSize = 100,
        sort = 'id:asc',
    }: {
        page?: number,
        /**
         * @deprecated
         */
        size?: number,
        /**
         * @deprecated
         */
        pagesize?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: string,
    }): CancelablePromise<ComputerPrestageSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computer-prestages',
            query: {
                'page': page,
                'size': size,
                'pagesize': pagesize,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * @deprecated
     * Create a Computer Prestage
     *
     * Create a computer prestage
     * @returns GetComputerPrestage Computer Prestage was created
     * @throws ApiError
     */
    public static postV1ComputerPrestages({
        requestBody,
    }: {
        /**
         * Computer Prestage to create. ids defined in this body will be ignored
         */
        requestBody: ComputerPrestage,
    }): CancelablePromise<GetComputerPrestage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/computer-prestages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @deprecated
     * Get all device Scope for all Computer Prestages
     *
     * Get all device scope for all computer prestages
     * @returns PrestageScope Successful response
     * @throws ApiError
     */
    public static getV1ComputerPrestagesScope(): CancelablePromise<PrestageScope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computer-prestages/scope',
        });
    }

    /**
     * @deprecated
     * Retrieve a Computer Prestage with the supplied id
     *
     * Retrieves a Computer Prestage with the supplied id
     * @returns GetComputerPrestage Success
     * @throws ApiError
     */
    public static getV1ComputerPrestages1({
        id,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: number,
    }): CancelablePromise<GetComputerPrestage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computer-prestages/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Computer Prestage with that id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Update a Computer Prestage
     *
     * Updates a Computer Prestage
     * @returns GetComputerPrestage Success
     * @throws ApiError
     */
    public static putV1ComputerPrestages({
        id,
        requestBody,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: number,
        /**
         * Computer Prestage to update
         */
        requestBody: PutComputerPrestage,
    }): CancelablePromise<GetComputerPrestage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/computer-prestages/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Computer Prestage with that id does not exist`,
                409: `The Computer Prestage was modified by another process. Read the Computer Prestage again for updated changes.`,
            },
        });
    }

    /**
     * @deprecated
     * Delete a Computer Prestage with the supplied id
     *
     * Deletes a Computer Prestage with the supplied id
     * @returns void
     * @throws ApiError
     */
    public static deleteV1ComputerPrestages({
        id,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/computer-prestages/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Get device Scope for a specific Computer Prestage
     *
     * Get device scope for a specific computer prestage
     * @returns PrestageScopeResponse Successful response
     * @throws ApiError
     */
    public static getV1ComputerPrestagesScope1({
        id,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: number,
    }): CancelablePromise<PrestageScopeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computer-prestages/{id}/scope',
            path: {
                'id': id,
            },
            errors: {
                404: `Computer Prestage with that id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Replace device Scope for a specific Computer Prestage
     *
     * Replace device scope for a specific computer prestage
     * @returns PrestageScopeResponse Successful response
     * @throws ApiError
     */
    public static putV1ComputerPrestagesScope({
        id,
        requestBody,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: number,
        /**
         * Serial Numbers to scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/computer-prestages/{id}/scope',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Computer Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * @deprecated
     * Add device Scope for a specific Computer Prestage
     *
     * Add device scope for a specific computer prestage
     * @returns PrestageScopeResponse Successful response
     * @throws ApiError
     */
    public static postV1ComputerPrestagesScope({
        id,
        requestBody,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: number,
        /**
         * Serial Numbers to scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/computer-prestages/{id}/scope',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Computer Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * @deprecated
     * Remove device Scope for a specific Computer Prestage
     *
     * Remove device scope for a specific computer prestage
     * @returns PrestageScopeResponse Successful response
     * @throws ApiError
     */
    public static deleteV1ComputerPrestagesScope({
        id,
        requestBody,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: number,
        /**
         * Serial Numbers to remove from scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/computer-prestages/{id}/scope',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Computer Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * Get sorted and paged Computer Prestages
     *
     * Gets sorted and paged computer prestages
     * @returns ComputerPrestageSearchResultsV2 Successful response
     * @throws ApiError
     */
    public static getV2ComputerPrestages({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
    }): CancelablePromise<ComputerPrestageSearchResultsV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/computer-prestages',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Create a Computer Prestage
     *
     * Create a computer prestage
     * @returns HrefResponse Computer Prestage was created
     * @throws ApiError
     */
    public static postV2ComputerPrestages({
        requestBody,
    }: {
        /**
         * Computer Prestage to create. ids defined in this body will be ignored
         */
        requestBody: PostComputerPrestageV2,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/computer-prestages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Get all device Scope for all Computer Prestages
     *
     * Get all device scope for all computer prestages
     * @returns PrestageScopeV2 Successful response
     * @throws ApiError
     */
    public static getV2ComputerPrestagesScope(): CancelablePromise<PrestageScopeV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/computer-prestages/scope',
        });
    }

    /**
     * Retrieve a Computer Prestage with the supplied id
     *
     * Retrieves a Computer Prestage with the supplied id
     * @returns GetComputerPrestageV2 Success
     * @throws ApiError
     */
    public static getV2ComputerPrestages1({
        id,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: string,
    }): CancelablePromise<GetComputerPrestageV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/computer-prestages/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Computer Prestage with that id does not exist`,
            },
        });
    }

    /**
     * Update a Computer Prestage
     *
     * Updates a Computer Prestage
     * @returns GetComputerPrestageV2 Success
     * @throws ApiError
     */
    public static putV2ComputerPrestages({
        id,
        requestBody,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: string,
        /**
         * Computer Prestage to update
         */
        requestBody: PutComputerPrestageV2,
    }): CancelablePromise<GetComputerPrestageV2> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/computer-prestages/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Computer Prestage with that id does not exist`,
                409: `The Computer Prestage was modified by another process. Read the Computer Prestage again for updated changes.`,
            },
        });
    }

    /**
     * Delete a Computer Prestage with the supplied id
     *
     * Deletes a Computer Prestage with the supplied id
     * @returns void
     * @throws ApiError
     */
    public static deleteV2ComputerPrestages({
        id,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/computer-prestages/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get device Scope for a specific Computer Prestage
     *
     * Get device scope for a specific computer prestage
     * @returns PrestageScopeResponseV2 Successful response
     * @throws ApiError
     */
    public static getV2ComputerPrestagesScope1({
        id,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: string,
    }): CancelablePromise<PrestageScopeResponseV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/computer-prestages/{id}/scope',
            path: {
                'id': id,
            },
            errors: {
                404: `Computer Prestage with that id does not exist`,
            },
        });
    }

    /**
     * Replace device Scope for a specific Computer Prestage
     *
     * Replace device scope for a specific computer prestage
     * @returns PrestageScopeResponseV2 Successful response
     * @throws ApiError
     */
    public static putV2ComputerPrestagesScope({
        id,
        requestBody,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: string,
        /**
         * Serial Numbers to scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponseV2> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/computer-prestages/{id}/scope',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Computer Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * Add device Scope for a specific Computer Prestage
     *
     * Add device scope for a specific computer prestage
     * @returns PrestageScopeResponseV2 Successful response
     * @throws ApiError
     */
    public static postV2ComputerPrestagesScope({
        id,
        requestBody,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: string,
        /**
         * Serial Numbers to scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponseV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/computer-prestages/{id}/scope',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Computer Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * Remove device Scope for a specific Computer Prestage
     *
     * Remove device scope for a specific computer prestage
     * @returns PrestageScopeResponseV2 Successful response
     * @throws ApiError
     */
    public static postV2ComputerPrestagesScopeDeleteMultiple({
        id,
        requestBody,
    }: {
        /**
         * Computer Prestage identifier
         */
        id: string,
        /**
         * Serial Numbers to remove from scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponseV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/computer-prestages/{id}/scope/delete-multiple',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Computer Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

}
