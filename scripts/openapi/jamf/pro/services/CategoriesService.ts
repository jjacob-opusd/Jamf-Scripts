/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriesSearchResults } from '../models/CategoriesSearchResults.ts';
import type { Category } from '../models/Category.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { Ids } from '../models/Ids.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CategoriesService {

    /**
     * Get Category objects
     *
     * Gets `Category` objects.
     *
     * @returns CategoriesSearchResults Successful response
     * @throws ApiError
     */
    public static getV1Categories({
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
         * Query in the RSQL format, allowing to filter categories collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: name, priority. This param can be combined with paging and sorting. Example: filter=name=="Apps*" and priority>=5
         */
        filter?: string,
    }): CancelablePromise<CategoriesSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/categories',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Create Category record
     *
     * Create category record
     *
     * @returns HrefResponse Category record was created
     * @throws ApiError
     */
    public static postV1Categories({
        requestBody,
    }: {
        /**
         * category object to create. IDs defined in this body will be ignored
         */
        requestBody: Category,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/categories',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete multiple Categories by their IDs
     *
     * Delete multiple Categories by their IDs
     * @returns void
     * @throws ApiError
     */
    public static postV1CategoriesDeleteMultiple({
        requestBody,
    }: {
        /**
         * IDs of the categories to be deleted
         */
        requestBody: Ids,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/categories/delete-multiple',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request processed.  Returns IDs and error codes of any categories unable to be deleted.  Expected error codes: INVALID_ID - id does not exist SYSTEM_EXCEPTION - a system exception occurred trying to delete the category.`,
            },
        });
    }

    /**
     * Get specified Category object
     *
     * Gets specified Category object
     *
     * @returns Category Details of category were found
     * @throws ApiError
     */
    public static getV1Categories1({
        id,
    }: {
        /**
         * instance id of category record
         */
        id: string,
    }): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/categories/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified category object does not exist.`,
            },
        });
    }

    /**
     * Update specified Category object
     *
     * Update specified category object
     *
     * @returns Category Category record was updated
     * @throws ApiError
     */
    public static putV1Categories({
        id,
        requestBody,
    }: {
        /**
         * instance id of category record
         */
        id: string,
        /**
         * category object to create. id defined in this body will be ignored
         */
        requestBody: Category,
    }): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/categories/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove specified Category record
     *
     * Removes specified category record
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1Categories({
        id,
    }: {
        /**
         * instance id of category record
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/categories/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get specified Category history object
     *
     * Gets specified Category history object
     *
     * @returns HistorySearchResults Details of category history were found
     * @throws ApiError
     */
    public static getV1CategoriesHistory({
        id,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * instance id of category history record
         */
        id: string,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is id:asc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: username, date, note, details. This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/categories/{id}/history',
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
                404: `Specified category object does not exist.`,
            },
        });
    }

    /**
     * Add specified Category history object notes
     *
     * Adds specified Category history object notes
     *
     * @returns ObjectHistory Notes of category history were added
     * @throws ApiError
     */
    public static postV1CategoriesHistory({
        id,
        requestBody,
    }: {
        /**
         * instance id of category history record
         */
        id: string,
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/categories/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Specified category object does not exist.`,
                503: `Category history can not be saved`,
            },
        });
    }

}
