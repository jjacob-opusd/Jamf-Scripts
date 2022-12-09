/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { MacOsBrandingConfiguration } from '../models/MacOsBrandingConfiguration.ts';
import type { MacOsBrandingSearchResults } from '../models/MacOsBrandingSearchResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SelfServiceBrandingMacosService {

    /**
     * Search for sorted and paged macOS branding configurations
     *
     * Search for sorted and paged macOS branding configurations
     * @returns MacOsBrandingSearchResults Successful response
     * @throws ApiError
     */
    public static getV1SelfServiceBrandingMacos({
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
    }): CancelablePromise<MacOsBrandingSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/self-service/branding/macos',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Create a Self Service macOS branding configuration with the supplied
     *
     * Create a Self Service macOS branding configuration with the supplied details
     * @returns HrefResponse Successful response
     * @throws ApiError
     */
    public static postV1SelfServiceBrandingMacos({
        requestBody,
    }: {
        /**
         * The macOS branding configuration to create
         */
        requestBody?: MacOsBrandingConfiguration,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/self-service/branding/macos',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Read a single Self Service macOS branding configuration indicated by the provided id
     *
     * Read a single Self Service macOS branding configuration indicated by the provided id.
     * @returns MacOsBrandingConfiguration Successful response
     * @throws ApiError
     */
    public static getV1SelfServiceBrandingMacos1({
        id,
    }: {
        /**
         * id of macOS branding configuration
         */
        id: string,
    }): CancelablePromise<MacOsBrandingConfiguration> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/self-service/branding/macos/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Self Service macOS branding configuration with the supplied details
     *
     * Update a Self Service macOS branding configuration with the supplied details
     * @returns MacOsBrandingConfiguration Successful response
     * @throws ApiError
     */
    public static putV1SelfServiceBrandingMacos({
        id,
        requestBody,
    }: {
        /**
         * id of macOS branding configuration
         */
        id: string,
        /**
         * The macOS branding configuration values to update
         */
        requestBody?: MacOsBrandingConfiguration,
    }): CancelablePromise<MacOsBrandingConfiguration> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/self-service/branding/macos/{id}',
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
     * Delete the Self Service macOS branding configuration indicated by the provided id
     *
     * Delete the Self Service macOS branding configuration indicated by the provided id.
     * @returns void
     * @throws ApiError
     */
    public static deleteV1SelfServiceBrandingMacos({
        id,
    }: {
        /**
         * id of macOS branding configuration
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/self-service/branding/macos/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Invalid id`,
            },
        });
    }

}
