/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { ParentApp } from '../models/ParentApp.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ParentAppPreviewService {

    /**
     * Get the current Jamf Parent app settings
     *
     * Get the current Jamf Parent app settings
     *
     * @returns ParentApp Details of the current Jamf Parent app settings.
     * @throws ApiError
     */
    public static getV1ParentApp(): CancelablePromise<ParentApp> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/parent-app',
        });
    }

    /**
     * Update Jamf Parent app settings
     *
     * Update Jamf Parent app settings
     *
     * @returns ParentApp Jamf Parent app settings updated
     * @throws ApiError
     */
    public static putV1ParentApp({
        requestBody,
    }: {
        /**
         * Jamf Parent app settings to save.
         */
        requestBody: ParentApp,
    }): CancelablePromise<ParentApp> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/parent-app',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request, could not parse input.`,
            },
        });
    }

    /**
     * Get Jamf Parent app settings history
     *
     * Gets Jamf Parent app settings history
     *
     * @returns HistorySearchResults Details of Jamf Parent app settings history were found
     * @throws ApiError
     */
    public static getV1ParentAppHistory({
        page,
        pageSize = 100,
        filter = '',
        sort = 'date:desc',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Query in the RSQL format, allowing to filter results. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: status, updated, version This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is date:desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/parent-app/history',
            query: {
                'page': page,
                'page-size': pageSize,
                'filter': filter,
                'sort': sort,
            },
        });
    }

    /**
     * Add Jamf Parent app settings history notes
     *
     * Adds Jamf Parent app settings history notes
     *
     * @returns ObjectHistory Notes to Jamf Parent app settings history were added
     * @throws ApiError
     */
    public static postV1ParentAppHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/parent-app/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Jamf Parent app history can not be saved`,
            },
        });
    }

}
