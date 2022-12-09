/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { Script } from '../models/Script.ts';
import type { ScriptsSearchResults } from '../models/ScriptsSearchResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ScriptsService {

    /**
     * Search for sorted and paged Scripts
     *
     * Search for sorted and paged scripts
     * @returns ScriptsSearchResults Found scripts matching search params.
     * @throws ApiError
     */
    public static getV1Scripts({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is name:asc. Multiple sort criteria are supported and must be separated with a comma. Fields allowed in the query: `id`, `name`, `info`, `notes`, `priority`, `categoryId`, `categoryName`, `parameter4` up to `parameter11`, `osRequirements`, `scriptContents`. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter scripts collection. Default search is empty query - returning all results for the requested page. Fields allowed in the query: `id`, `name`, `info`, `notes`, `priority`, `categoryId`, `categoryName`, `parameter4` up to `parameter11`, `osRequirements`, `scriptContents`. This param can be combined with paging and sorting. Example: filter=categoryName=="Category" and name=="*script name*"
         */
        filter?: string,
    }): CancelablePromise<ScriptsSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/scripts',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Create a Script
     *
     * Creates a script
     * @returns HrefResponse Script created successfully
     * @throws ApiError
     */
    public static postV1Scripts({
        requestBody,
    }: {
        /**
         * new script to create. ids defined in this body will be ignored
         */
        requestBody: Script,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/scripts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a full script object
     *
     * Retrieves a full script object
     * @returns Script Success
     * @throws ApiError
     */
    public static getV1Scripts1({
        id,
    }: {
        /**
         * Script object identifier
         */
        id: string,
    }): CancelablePromise<Script> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/scripts/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Script with that ID does not exist`,
            },
        });
    }

    /**
     * Replace the script at the id with the supplied information
     *
     * Replaces the script at the id with the supplied information
     * @returns Script Script at id was updated
     * @throws ApiError
     */
    public static putV1Scripts({
        id,
        requestBody,
    }: {
        /**
         * Script object identifier
         */
        id: string,
        /**
         * new script to upload to existing id. ids defined in this body will be ignored
         */
        requestBody: Script,
    }): CancelablePromise<Script> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/scripts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Script with that id does not exist`,
            },
        });
    }

    /**
     * Delete a Script at the specified id
     *
     * Deletes a script at the specified id
     * @returns void
     * @throws ApiError
     */
    public static deleteV1Scripts({
        id,
    }: {
        /**
         * Script object identifier
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/scripts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Download a text file of the Script contents
     *
     * Download a text file of the script contents
     * @returns binary The script of the specified id
     * @throws ApiError
     */
    public static getV1ScriptsDownload({
        id,
    }: {
        /**
         * id of the script to be downloaded
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/scripts/{id}/download',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Get specified Script history object
     *
     * Gets specified Script history object
     *
     * @returns HistorySearchResults OK
     * @throws ApiError
     */
    public static getV1ScriptsHistory({
        id,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * id of script history record
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
            url: '/v1/scripts/{id}/history',
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
                404: `Specified script does not exist.`,
            },
        });
    }

    /**
     * Add specified Script history object notes
     *
     * Adds specified Script history object notes
     *
     * @returns ObjectHistory Notes of script history were added
     * @throws ApiError
     */
    public static postV1ScriptsHistory({
        id,
        requestBody,
    }: {
        /**
         * instance id of script history record
         */
        id: string,
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/scripts/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Specified script does not exist.`,
                503: `Script history can not be saved`,
            },
        });
    }

}
