/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { IosBrandingConfiguration } from '../models/IosBrandingConfiguration.ts';
import type { IosBrandingSearchResults } from '../models/IosBrandingSearchResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SelfServiceBrandingIosService {

    /**
     * Search for sorted and paged iOS branding configurations
     *
     * Search for sorted and paged iOS branding configurations
     * @returns IosBrandingSearchResults Successful response
     * @throws ApiError
     */
    public static getV1SelfServiceBrandingIos({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is id:asc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=id:desc,brandingName:asc
         */
        sort?: Array<string>,
    }): CancelablePromise<IosBrandingSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/self-service/branding/ios',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Create a Self Service iOS branding configuration with the supplied
     *
     * Create a Self Service iOS branding configuration with the supplied details
     * @returns HrefResponse Successful response
     * @throws ApiError
     */
    public static postV1SelfServiceBrandingIos({
        requestBody,
    }: {
        /**
         * The iOS branding configuration to create
         */
        requestBody?: IosBrandingConfiguration,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/self-service/branding/ios',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Read a single Self Service iOS branding configuration indicated by the provided id
     *
     * Read a single Self Service iOS branding configuration indicated by the provided id.
     * @returns IosBrandingConfiguration Successful response
     * @throws ApiError
     */
    public static getV1SelfServiceBrandingIos1({
        id,
    }: {
        /**
         * id of iOS branding configuration
         */
        id: string,
    }): CancelablePromise<IosBrandingConfiguration> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/self-service/branding/ios/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Self Service iOS branding configuration with the supplied details
     *
     * Update a Self Service iOS branding configuration with the supplied details
     * @returns IosBrandingConfiguration Successful response
     * @throws ApiError
     */
    public static putV1SelfServiceBrandingIos({
        id,
        requestBody,
    }: {
        /**
         * id of iOS branding configuration
         */
        id: string,
        /**
         * The iOS branding configuration values to update
         */
        requestBody?: IosBrandingConfiguration,
    }): CancelablePromise<IosBrandingConfiguration> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/self-service/branding/ios/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Invalid id`,
            },
        });
    }

    /**
     * Delete the Self Service iOS branding configuration indicated by the provided id
     *
     * Delete the Self Service iOS branding configuration indicated by the provided id.
     * @returns void
     * @throws ApiError
     */
    public static deleteV1SelfServiceBrandingIos({
        id,
    }: {
        /**
         * id of iOS branding configuration
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/self-service/branding/ios/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Invalid id`,
            },
        });
    }

}
