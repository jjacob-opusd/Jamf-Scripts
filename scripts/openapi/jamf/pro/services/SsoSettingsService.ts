/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnrollmentCustomizationDependencies } from '../models/EnrollmentCustomizationDependencies.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { SsoMetadataUrl } from '../models/SsoMetadataUrl.ts';
import type { SsoSettings } from '../models/SsoSettings.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SsoSettingsService {

    /**
     * Retrieve the current Single Sign On configuration settings
     *
     * Retrieves the current Single Sign On configuration settings
     * @returns SsoSettings Successful response
     * @throws ApiError
     */
    public static getV1Sso(): CancelablePromise<SsoSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/sso',
        });
    }

    /**
     * Updates the current Single Sign On configuration settings
     *
     * Updates the current Single Sign On configuration settings
     * @returns SsoSettings The update was successful and the newly updated object is returned.
     * @throws ApiError
     */
    public static putV1Sso({
        requestBody,
    }: {
        requestBody: SsoSettings,
    }): CancelablePromise<SsoSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/sso',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Either required fields are missing or there was a validation exception.`,
            },
        });
    }

    /**
     * Retrieve the list of Enrollment Customizations using SSO
     *
     * Retrieves the list of Enrollment Customizations using SSO
     * @returns EnrollmentCustomizationDependencies Success
     * @throws ApiError
     */
    public static getV1SsoDependencies(): CancelablePromise<EnrollmentCustomizationDependencies> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/sso/dependencies',
        });
    }

    /**
     * Disable SSO
     *
     * Disable SSO
     * @returns any SSO has been disabled
     * @throws ApiError
     */
    public static postV1SsoDisable(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/sso/disable',
            errors: {
                400: `SSO object don't exist or is already disabled`,
            },
        });
    }

    /**
     * Get SSO history object
     *
     * Gets SSO history object
     *
     * @returns HistorySearchResults Details of SSO history were found
     * @throws ApiError
     */
    public static getV1SsoHistory({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is date:desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: username, date, note, details. This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/sso/history',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Add SSO history object notes
     *
     * Adds SSO history object notes
     * @returns HrefResponse Notes of SSO history were added
     * @throws ApiError
     */
    public static postV1SsoHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/sso/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `SSO object history can not be saved`,
            },
        });
    }

    /**
     * Download the Jamf Pro SAML metadata file
     *
     * Download the Jamf Pro SAML metadata file
     * @returns binary Successful resposne
     * @throws ApiError
     */
    public static getV1SsoMetadataDownload(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/sso/metadata/download',
        });
    }

    /**
     * Endpoint for validation of a saml metadata url
     *
     * Validation of a content available under provided metadata URL.
     * @returns any valid metadata url
     * @throws ApiError
     */
    public static postV1SsoValidate({
        requestBody,
    }: {
        /**
         * url to validate
         */
        requestBody: SsoMetadataUrl,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/sso/validate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `provided metadata URL is not valid`,
            },
        });
    }

}
