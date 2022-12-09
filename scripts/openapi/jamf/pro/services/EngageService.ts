/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Engage } from '../models/Engage.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class EngageService {

    /**
     * Get Engage settings
     *
     * Get Engage settings
     *
     * @returns Engage Successful response
     * @throws ApiError
     */
    public static getV1Engage(): CancelablePromise<Engage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/engage',
        });
    }

    /**
     * Update Engage settings
     *
     * Update Engage settings
     *
     * @returns Engage Engage settings updated
     * @throws ApiError
     */
    public static putV1Engage({
        requestBody,
    }: {
        /**
         * Engage settings object
         */
        requestBody: Engage,
    }): CancelablePromise<Engage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/engage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Engage settings history
     *
     * Gets Engage settings history
     *
     * @returns HistorySearchResults Details of Engage settings history were found
     * @throws ApiError
     */
    public static getV1EngageHistory({
        page,
        size = 100,
        pagesize = 100,
        pageSize = 100,
        sort = 'date:desc',
        search = '',
        filter = '',
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
         * Sorting criteria in the format: property:asc/desc. Default sort is date:desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: string,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default search is empty query - returning all results for the requested page. Fields allowed in the query: username, date, note, details. This param can be combined with paging and sorting. Example: search=username!=admin and details==*disabled* and date<2019-12-15
         */
        search?: string,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: username, date, note, details. This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/engage/history',
            query: {
                'page': page,
                'size': size,
                'pagesize': pagesize,
                'page-size': pageSize,
                'sort': sort,
                'search': search,
                'filter': filter,
            },
        });
    }

    /**
     * Add Engage settings history notes
     *
     * Adds Engage settings history notes
     *
     * @returns ObjectHistory Notes to Engage settings history were added
     * @throws ApiError
     */
    public static postV1EngageHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/engage/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Engage history can not be saved`,
            },
        });
    }

}
