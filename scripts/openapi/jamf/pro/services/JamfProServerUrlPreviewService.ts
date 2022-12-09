/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { JamfProServerUrl } from '../models/JamfProServerUrl.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfProServerUrlPreviewService {

    /**
     * Get Jamf Pro Server URL settings
     *
     * Get Jamf Pro Server URL settings
     * @returns JamfProServerUrl Successful response
     * @throws ApiError
     */
    public static getV1JamfProServerUrl(): CancelablePromise<JamfProServerUrl> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-pro-server-url',
        });
    }

    /**
     * Update Jamf Pro Server URL settings
     *
     * Update Jamf Pro Server URL settings
     * @returns JamfProServerUrl Jamf Pro Server URL settings updated
     * @throws ApiError
     */
    public static putV1JamfProServerUrl({
        requestBody,
    }: {
        /**
         * Jamf Pro Server URL settings object
         */
        requestBody: JamfProServerUrl,
    }): CancelablePromise<JamfProServerUrl> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/jamf-pro-server-url',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Jamf Pro Server URL is managed by Jamf Cloud`,
            },
        });
    }

    /**
     * Get Jamf Pro Server URL settings history
     *
     * Gets Jamf Pro Server URL settings history
     * @returns HistorySearchResults Details of Jamf Pro Server URL settings history were found
     * @throws ApiError
     */
    public static getV1JamfProServerUrlHistory({
        page,
        size = 100,
        pagesize = 100,
        pageSize = 100,
        sort = 'date:desc',
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
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-pro-server-url/history',
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
     * Add Jamf Pro Server URL settings history notes
     *
     * Adds Jamf Pro Server URL settings history notes
     * @returns ObjectHistory Notes to Jamf Pro Server URL settings history were added
     * @throws ApiError
     */
    public static postV1JamfProServerUrlHistory({
        requestBody,
    }: {
        /**
         * History notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/jamf-pro-server-url/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Jamf Pro Server URL is managed by Jamf Cloud`,
                503: `Jamf Pro Server URL history does not exist.`,
            },
        });
    }

}
