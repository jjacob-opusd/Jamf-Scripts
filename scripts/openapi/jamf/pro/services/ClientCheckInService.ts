/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientCheckInV2 } from '../models/ClientCheckInV2.ts';
import type { ClientCheckInV3 } from '../models/ClientCheckInV3.ts';
import type { HistorySearchResultsV1 } from '../models/HistorySearchResultsV1.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ClientCheckInService {

    /**
     * @deprecated
     * Get Client Check-In settings
     *
     * Gets `Client Check-In` object.
     *
     * @returns ClientCheckInV2 Successful response
     * @throws ApiError
     */
    public static getV2CheckIn(): CancelablePromise<ClientCheckInV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/check-in',
        });
    }

    /**
     * @deprecated
     * Update Client Check-In object
     *
     * Update Client Check-In object
     *
     * @returns ClientCheckInV2 Client Check-In was updated
     * @throws ApiError
     */
    public static putV2CheckIn({
        requestBody,
    }: {
        /**
         * Client Check-In object to update
         */
        requestBody: ClientCheckInV2,
    }): CancelablePromise<ClientCheckInV2> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/check-in',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Get Client Check-In history object
     *
     * Gets Client Check-In history object
     *
     * @returns HistorySearchResultsV1 Details of Client Check-In history were found
     * @throws ApiError
     */
    public static getV2CheckInHistory({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is name:asc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,username:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: username, date, note, details. This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResultsV1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/check-in/history',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * @deprecated
     * Add a Note to Client Check-In History
     *
     * Adds Client Check-In history object notes
     *
     * @returns HrefResponse Notes of Client Check-In history were added
     * @throws ApiError
     */
    public static postV2CheckInHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/check-in/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Client Check-In history can not be saved`,
            },
        });
    }

    /**
     * Get Client Check-In settings
     *
     * Gets `Client Check-In` object.
     *
     * @returns ClientCheckInV3 Successful response
     * @throws ApiError
     */
    public static getV3CheckIn(): CancelablePromise<ClientCheckInV3> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/check-in',
        });
    }

    /**
     * Update Client Check-In object
     *
     * Update Client Check-In object
     *
     * @returns ClientCheckInV3 Client Check-In was updated
     * @throws ApiError
     */
    public static putV3CheckIn({
        requestBody,
    }: {
        /**
         * Client Check-In object to update
         */
        requestBody: ClientCheckInV3,
    }): CancelablePromise<ClientCheckInV3> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v3/check-in',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Client Check-In history object
     *
     * Gets Client Check-In history object
     *
     * @returns HistorySearchResultsV1 Details of Client Check-In history were found
     * @throws ApiError
     */
    public static getV3CheckInHistory({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is name:asc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,username:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: username, date, note, details. This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResultsV1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/check-in/history',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Add a Note to Client Check-In History
     *
     * Adds Client Check-In history object notes
     *
     * @returns HrefResponse Notes of Client Check-In history were added
     * @throws ApiError
     */
    public static postV3CheckInHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/check-in/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Client Check-In history can not be saved`,
            },
        });
    }

}
