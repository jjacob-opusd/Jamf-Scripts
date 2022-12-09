/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdvancedSearch } from '../models/AdvancedSearch.ts';
import type { AdvancedSearchCriteriaChoices } from '../models/AdvancedSearchCriteriaChoices.ts';
import type { AdvancedSearchSearchResults } from '../models/AdvancedSearchSearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { Ids } from '../models/Ids.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AdvancedMobileDeviceSearchesService {

    /**
     * Get Advanced Search objects
     *
     * Gets Advanced Search Objects
     *
     * @returns AdvancedSearchSearchResults Successful response - Advanced searches retrieved
     * @throws ApiError
     */
    public static getV1AdvancedMobileDeviceSearches(): CancelablePromise<AdvancedSearchSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/advanced-mobile-device-searches',
        });
    }

    /**
     * Create Advanced Search object
     *
     * Creates Advanced Search Object
     *
     * @returns HrefResponse Successful response - Advanced search created
     * @throws ApiError
     */
    public static postV1AdvancedMobileDeviceSearches({
        requestBody,
    }: {
        requestBody: AdvancedSearch,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/advanced-mobile-device-searches',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Mobile Device Advanced Search criteria choices
     *
     * Gets Mobile Device Advanced Search criteria choices. A list of potentially valid choices can be found by navigating to the Criteria page of the Advanced Mobile Device Search creation process. A few are "App Name", "Building", and "Display Name".
     *
     * @returns AdvancedSearchCriteriaChoices Successful response - Criteria choices retrieved
     * @throws ApiError
     */
    public static getV1AdvancedMobileDeviceSearchesChoices({
        criteria,
        site = '-1',
        contains = 'null',
    }: {
        criteria: string,
        site?: string,
        contains?: string,
    }): CancelablePromise<AdvancedSearchCriteriaChoices> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/advanced-mobile-device-searches/choices',
            query: {
                'criteria': criteria,
                'site': site,
                'contains': contains,
            },
        });
    }

    /**
     * Remove specified Advanced Search objects
     *
     * Removes specified Advanced Search Objects
     *
     * @returns void
     * @throws ApiError
     */
    public static postV1AdvancedMobileDeviceSearchesDeleteMultiple({
        requestBody,
    }: {
        /**
         * ids of the building to be deleted
         */
        requestBody: Ids,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/advanced-mobile-device-searches/delete-multiple',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `At least one target Advanced Search does not exist`,
            },
        });
    }

    /**
     * Get specified Advanced Search object
     *
     * Gets Specified Advanced Search Object
     *
     * @returns AdvancedSearch Successful response - Advanced Search retrieved
     * @throws ApiError
     */
    public static getV1AdvancedMobileDeviceSearches1({
        id,
    }: {
        /**
         * id of target Advanced Search
         */
        id: string,
    }): CancelablePromise<AdvancedSearch> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/advanced-mobile-device-searches/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Target Advanced Search does not exist`,
            },
        });
    }

    /**
     * Get specified Advanced Search object
     *
     * Gets Specified Advanced Search Object
     *
     * @returns AdvancedSearch Successful response - Advanced Search updated
     * @throws ApiError
     */
    public static putV1AdvancedMobileDeviceSearches({
        id,
        requestBody,
    }: {
        /**
         * id of target Advanced Search
         */
        id: string,
        requestBody: AdvancedSearch,
    }): CancelablePromise<AdvancedSearch> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/advanced-mobile-device-searches/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Target Advanced Search does not exist`,
            },
        });
    }

    /**
     * Remove specified Advanced Search object
     *
     * Removes specified Advanced Search Object
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1AdvancedMobileDeviceSearches({
        id,
    }: {
        /**
         * instance id of advanced search record
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/advanced-mobile-device-searches/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Target Advanced Search does not exist`,
            },
        });
    }

}
