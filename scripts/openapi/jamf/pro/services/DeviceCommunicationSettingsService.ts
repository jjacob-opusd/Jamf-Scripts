/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceCommunicationSettings } from '../models/DeviceCommunicationSettings.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class DeviceCommunicationSettingsService {

    /**
     * Retrieves all settings for device communication
     *
     * Retrieves all device communication settings, including automatic renewal of the MDM profile.
     *
     * @returns DeviceCommunicationSettings Successful response - Device Communication Settings retrieved
     * @throws ApiError
     */
    public static getV1DeviceCommunicationSettings(): CancelablePromise<DeviceCommunicationSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/device-communication-settings',
        });
    }

    /**
     * Update device communication settings
     *
     * Update device communication settings
     *
     * @returns DeviceCommunicationSettings Successful response - Device communication Settings updated
     * @throws ApiError
     */
    public static putV1DeviceCommunicationSettings({
        requestBody,
    }: {
        requestBody: DeviceCommunicationSettings,
    }): CancelablePromise<DeviceCommunicationSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/device-communication-settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Device Communication settings history
     *
     * Gets Device Communication settings history
     *
     * @returns HistorySearchResults Details of Device Communication Settings history were found
     * @throws ApiError
     */
    public static getV1DeviceCommunicationSettingsHistory({
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
            url: '/v1/device-communication-settings/history',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Add Device Communication Settings history notes
     *
     * Adds Device Communication Settings history notes
     *
     * @returns ObjectHistory Notes to Device Communication Settings history were added
     * @throws ApiError
     */
    public static postV1DeviceCommunicationSettingsHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/device-communication-settings/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Device Communication Settings history can not be saved`,
            },
        });
    }

}
