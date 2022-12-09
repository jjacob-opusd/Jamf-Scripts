/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { TeacherSettingsRequest } from '../models/TeacherSettingsRequest.ts';
import type { TeacherSettingsResponse } from '../models/TeacherSettingsResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class TeacherAppService {

    /**
     * Get the Jamf Teacher settings that you have access to see
     *
     * Get the Jamf Teacher settings that you have access to see.
     * @returns TeacherSettingsResponse List of Jamf Teacher settings
     * @throws ApiError
     */
    public static getV1TeacherApp(): CancelablePromise<TeacherSettingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/teacher-app',
        });
    }

    /**
     * Update a Jamf Teacher settings object
     *
     * Update a Jamf Teacher settings object.
     * @returns TeacherSettingsResponse Updated Jamf Teacher settings.
     * @throws ApiError
     */
    public static putV1TeacherApp({
        requestBody,
    }: {
        /**
         * Teacher settings to create.
         */
        requestBody: TeacherSettingsRequest,
    }): CancelablePromise<TeacherSettingsResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/teacher-app',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Update Failed.`,
            },
        });
    }

    /**
     * Get Jamf Teacher app settings history
     *
     * Gets Jamf Teacher app settings history
     *
     * @returns HistorySearchResults Details of Jamf Teacher app settings history were found
     * @throws ApiError
     */
    public static getV1TeacherAppHistory({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort order is descending. Multiple sort criteria are supported and must be entered on separate lines in Swagger UI. In the URI the 'sort' query param is not duplicated for each sort criterion, e.g., ...&sort=name:asc,date:desc. Fields that can be sorted: status, updated
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter results. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: status, updated, version This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/teacher-app/history',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Add Jamf Teacher app settings history notes
     *
     * Adds Jamf Teacher app settings history notes
     *
     * @returns HrefResponse Notes to Jamf Teacher app settings history were added
     * @throws ApiError
     */
    public static postV1TeacherAppHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/teacher-app/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Jamf Teacher app history can not be saved`,
            },
        });
    }

}
