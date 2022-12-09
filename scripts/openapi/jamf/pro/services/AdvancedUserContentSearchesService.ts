/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdvancedUserContentSearch } from '../models/AdvancedUserContentSearch.ts';
import type { AdvancedUserContentSearchSearchResults } from '../models/AdvancedUserContentSearchSearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AdvancedUserContentSearchesService {

    /**
     * Get All Advanced User Content Search objects
     *
     * Get All Advanced User Content Search Objects
     *
     * @returns AdvancedUserContentSearchSearchResults Successful response - Advanced User Content Searches retrieved
     * @throws ApiError
     */
    public static getV1AdvancedUserContentSearches(): CancelablePromise<AdvancedUserContentSearchSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/advanced-user-content-searches',
        });
    }

    /**
     * Create Advanced User Content Search object
     *
     * Creates Advanced User Content Search Object
     *
     * @returns HrefResponse Successful response - Advanced User Content Search created
     * @throws ApiError
     */
    public static postV1AdvancedUserContentSearches({
        requestBody,
    }: {
        requestBody: AdvancedUserContentSearch,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/advanced-user-content-searches',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Specified Advanced User Content Search object
     *
     * Gets Specified Advanced User Content Search Object
     *
     * @returns AdvancedUserContentSearch Successful response - Advanced User Content Search retrieved
     * @throws ApiError
     */
    public static getV1AdvancedUserContentSearches1({
        id,
    }: {
        /**
         * id of target Advanced User Content Search
         */
        id: string,
    }): CancelablePromise<AdvancedUserContentSearch> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/advanced-user-content-searches/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Target Advanced User Content Search does not exist`,
            },
        });
    }

    /**
     * Get Specified Advanced User Content Search object
     *
     * Gets Specified Advanced User Content Search Object
     *
     * @returns AdvancedUserContentSearch Successful response - Advanced User Content Search updated
     * @throws ApiError
     */
    public static putV1AdvancedUserContentSearches({
        id,
        requestBody,
    }: {
        /**
         * id of target Advanced User Content Search
         */
        id: string,
        requestBody: AdvancedUserContentSearch,
    }): CancelablePromise<AdvancedUserContentSearch> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/advanced-user-content-searches/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Target Advanced User Content Search does not exist`,
            },
        });
    }

    /**
     * Remove specified Advanced User Content Search object
     *
     * Removes specified Advanced User Content Search Object
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1AdvancedUserContentSearches({
        id,
    }: {
        /**
         * instance id of Advanced User Content Search record
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/advanced-user-content-searches/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Target Advanced User Content Search does not exist`,
            },
        });
    }

}
