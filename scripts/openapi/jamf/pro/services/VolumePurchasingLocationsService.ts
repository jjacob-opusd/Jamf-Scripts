/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { VolumePurchasingLocation } from '../models/VolumePurchasingLocation.ts';
import type { VolumePurchasingLocationPatch } from '../models/VolumePurchasingLocationPatch.ts';
import type { VolumePurchasingLocationPost } from '../models/VolumePurchasingLocationPost.ts';
import type { VolumePurchasingLocations } from '../models/VolumePurchasingLocations.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class VolumePurchasingLocationsService {

    /**
     * Retrieve Volume Purchasing Locations
     * Retrieves Volume Purchasing Locations
     * @returns VolumePurchasingLocations Success
     * @throws ApiError
     */
    public static getV1VolumePurchasingLocations({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is id:asc. Multiple sort criteria are supported and must be separated with a comma.
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter Volume Purchasing Location collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: id, name, appleId, organizationName, tokenExpiration, countryCode, locationName, automaticallyPopulatePurchasedContent, and sendNotificationWhenNoLongerAssigned. This param can be combined with paging and sorting.
         */
        filter?: string,
    }): CancelablePromise<VolumePurchasingLocations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/volume-purchasing-locations',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Create a Volume Purchasing Location
     * Creates a Volume Purchasing Location using an sToken
     * @returns HrefResponse Volume Purchasing Location was created
     * @throws ApiError
     */
    public static postV1VolumePurchasingLocations({
        requestBody,
    }: {
        /**
         * Volume Purchasing Location to create
         */
        requestBody: VolumePurchasingLocationPost,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/volume-purchasing-locations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Retrieve a Volume Purchasing Location with the supplied id
     * Retrieves a Volume Purchasing Location with the supplied id
     * @returns VolumePurchasingLocation Success
     * @throws ApiError
     */
    public static getV1VolumePurchasingLocations1({
        id,
    }: {
        /**
         * Volume Purchasing Location identifier
         */
        id: string,
    }): CancelablePromise<VolumePurchasingLocation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/volume-purchasing-locations/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Volume Purchasing Location with that id does not exist`,
            },
        });
    }

    /**
     * Delete a Volume Purchasing Location with the supplied id
     * Deletes a Volume Purchasing Location with the supplied id
     * @returns void
     * @throws ApiError
     */
    public static deleteV1VolumePurchasingLocations({
        id,
    }: {
        /**
         * Volume Purchasing Location identifier
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/volume-purchasing-locations/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified Volume Purchasing Location object does not exist.`,
            },
        });
    }

    /**
     * Update a Volume Purchasing Location
     * Updates a Volume Purchasing Location
     * @returns VolumePurchasingLocation Success
     * @throws ApiError
     */
    public static patchV1VolumePurchasingLocations({
        id,
        requestBody,
    }: {
        /**
         * Volume Purchasing Location identifier
         */
        id: string,
        /**
         * Volume Purchasing Location to update
         */
        requestBody: VolumePurchasingLocationPatch,
    }): CancelablePromise<VolumePurchasingLocation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/volume-purchasing-locations/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/merge-patch+json',
            errors: {
                400: `Bad Request`,
                404: `Volume Purchasing Location with that id does not exist`,
                422: `There was an error applying the patch`,
            },
        });
    }

    /**
     * Get specified Volume Purchasing Location history object
     *
     * Gets specified Volume Purchasing Location history object
     *
     * @returns HistorySearchResults Details of Volume Purchasing Location history were found
     * @throws ApiError
     */
    public static getV1VolumePurchasingLocationsHistory({
        id,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * instance id of Volume Purchasing Location history record
         */
        id: string,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is date:desc. Multiple sort criteria are supported and must be separated with a comma.
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: username, date, note, details. This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/volume-purchasing-locations/{id}/history',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
            errors: {
                404: `Specified Volume Purchasing Location object does not exist.`,
            },
        });
    }

    /**
     * Add specified Volume Purchasing Location history object notes
     *
     * Adds specified Volume Purchasing Location history object notes
     *
     * @returns ObjectHistory Notes of Volume Purchase Location history were added
     * @throws ApiError
     */
    public static postV1VolumePurchasingLocationsHistory({
        id,
        requestBody,
    }: {
        /**
         * instance id of Volume Purchasing Location history record
         */
        id: string,
        /**
         * history note to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/volume-purchasing-locations/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Specified Volume Purchase Location object does not exist.`,
                503: `Volume Purchase Location history can not be saved`,
            },
        });
    }

    /**
     * Reclaim a Volume Purchasing Location with the supplied id
     * Reclaims a Volume Purchasing Location with the supplied id
     * @returns any Request accepted
     * @throws ApiError
     */
    public static postV1VolumePurchasingLocationsReclaim({
        id,
    }: {
        /**
         * Volume Purchasing Location identifier
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/volume-purchasing-locations/{id}/reclaim',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Revoke licenses for a Volume Purchasing Location with the supplied id
     * Revokes licenses for a Volume Purchasing Location with the supplied id. The licenses must be revokable - any asset whose licenses are irrevocable will not be revoked.
     * @returns any Request accepted
     * @throws ApiError
     */
    public static postV1VolumePurchasingLocationsRevokeLicenses({
        id,
    }: {
        /**
         * Volume Purchasing Location identifier
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/volume-purchasing-locations/{id}/revoke-licenses',
            path: {
                'id': id,
            },
            errors: {
                404: `Volume Purchasing Location with that id does not exist`,
            },
        });
    }

}
