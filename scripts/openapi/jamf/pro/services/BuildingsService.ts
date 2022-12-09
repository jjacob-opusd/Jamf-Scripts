/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Building } from '../models/Building.ts';
import type { BuildingSearchResults } from '../models/BuildingSearchResults.ts';
import type { ExportParameters } from '../models/ExportParameters.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { Ids } from '../models/Ids.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class BuildingsService {

    /**
     * Search for sorted and paged Buildings
     *
     * Search for sorted and paged buildings
     * @returns BuildingSearchResults Successful response
     * @throws ApiError
     */
    public static getV1Buildings({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is id:asc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter buildings collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: name, streetAddress1, streetAddress2, city, stateProvince, zipPostalCode, country. This param can be combined with paging and sorting. Example: filter=city=="Chicago" and name=="*build*"
         */
        filter?: string,
    }): CancelablePromise<BuildingSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/buildings',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Create Building record
     *
     * Create building record
     *
     * @returns HrefResponse Building record was created
     * @throws ApiError
     */
    public static postV1Buildings({
        requestBody,
    }: {
        /**
         * building object to create. ids defined in this body will be ignored
         */
        requestBody: Building,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/buildings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete multiple Buildings by their ids
     *
     * multiple many Buildings by their ids
     * @returns void
     * @throws ApiError
     */
    public static postV1BuildingsDeleteMultiple({
        requestBody,
    }: {
        /**
         * ids of the building to be deleted
         */
        requestBody: Ids,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/buildings/delete-multiple',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request processed.  Returns ids and error codes of any buildings unable to be deleted.  Expected error codes: INVALID_ID - id does not exist SYSTEM_EXCEPTION - a system exception occurred trying to delete the building.`,
            },
        });
    }

    /**
     * Export Buildings collection
     *
     * Export Buildings collection
     *
     * @returns any Export successful
     * @throws ApiError
     */
    public static postV1BuildingsExport({
        exportFields,
        exportLabels,
        page,
        pageSize = 100,
        sort,
        filter = '',
        requestBody,
    }: {
        /**
         * Export fields parameter, used to change default order or ignore some of the response properties. Default is empty array, which means that all fields of the response entity will be serialized. Example: export-fields=id,username
         */
        exportFields?: Array<string>,
        /**
         * Export labels parameter, used to customize fieldnames/columns in the exported file. Default is empty array, which means that response properties names will be used. Number of the provided labels must match the number of export-fields Example: export-labels=identifier,name with matching: export-fields=id,username
         */
        exportLabels?: Array<string>,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is id:desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=id:desc,name:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: id, name. This param can be combined with paging and sorting. Example: name=="*buildings*"
         */
        filter?: string,
        /**
         * Optional. Override query parameters since they can make URI exceed 2,000 character limit.
         */
        requestBody?: ExportParameters,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/buildings/export',
            query: {
                'export-fields': exportFields,
                'export-labels': exportLabels,
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Export fields specified incorrectly - non-existing column or duplicate on the list.`,
                503: `Export currently unavailable, all export-related resources are in use. Try again later.`,
            },
        });
    }

    /**
     * Get specified Building object
     *
     * Gets specified Building object
     *
     * @returns Building Details of building were found
     * @throws ApiError
     */
    public static getV1Buildings1({
        id,
    }: {
        /**
         * instance id of building record
         */
        id: string,
    }): CancelablePromise<Building> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/buildings/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified building object does not exist.`,
            },
        });
    }

    /**
     * Update specified Building object
     *
     * Update specified building object
     *
     * @returns Building Building update
     * @throws ApiError
     */
    public static putV1Buildings({
        id,
        requestBody,
    }: {
        /**
         * instance id of building record
         */
        id: string,
        /**
         * building object to update. ids defined in this body will be ignored
         */
        requestBody: Building,
    }): CancelablePromise<Building> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/buildings/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove specified Building record
     *
     * Removes specified building record
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1Buildings({
        id,
    }: {
        /**
         * instance id of building record
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/buildings/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get specified Building History object
     *
     * Gets specified Building history object
     *
     * @returns HistorySearchResults Details of building history were found
     * @throws ApiError
     */
    public static getV1BuildingsHistory({
        id,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * instance id of building history record
         */
        id: string,
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
            url: '/v1/buildings/{id}/history',
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
                404: `Specified building object does not exist.`,
            },
        });
    }

    /**
     * Add specified Building history object notes
     *
     * Adds specified Building history object notes
     *
     * @returns ObjectHistory Notes of building history were added
     * @throws ApiError
     */
    public static postV1BuildingsHistory({
        id,
        requestBody,
    }: {
        /**
         * instance id of building history record
         */
        id: string,
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/buildings/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Specified building object does not exist.`,
                503: `Building history can not be saved`,
            },
        });
    }

    /**
     * Export history object collection in specified format for specified Buildings
     *
     * Export history object collection in specified format for specified Buildings
     *
     * @returns any Export successful
     * @throws ApiError
     */
    public static postV1BuildingsHistoryExport({
        id,
        exportFields,
        exportLabels,
        page,
        pageSize = 100,
        sort,
        filter = '',
        requestBody,
    }: {
        /**
         * instance id of buildings
         */
        id: string,
        /**
         * Export fields parameter, used to change default order or ignore some of the response properties. Default is empty array, which means that all fields of the response entity will be serialized. Example: export-fields=id,username
         */
        exportFields?: Array<string>,
        /**
         * Export labels parameter, used to customize fieldnames/columns in the exported file. Default is empty array, which means that response properties names will be used. Number of the provided labels must match the number of export-fields Example: export-labels=identifier,name with matching: export-fields=id,username
         */
        exportLabels?: Array<string>,
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
        /**
         * Optional. Override query parameters since they can make URI exceed 2,000 character limit.
         */
        requestBody?: ExportParameters,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/buildings/{id}/history/export',
            path: {
                'id': id,
            },
            query: {
                'export-fields': exportFields,
                'export-labels': exportLabels,
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Export fields specified incorrectly - non-existing column or duplicate on the list.`,
                503: `Export currently unavailable, all export-related resources are in use. Try again later.`,
            },
        });
    }

}
