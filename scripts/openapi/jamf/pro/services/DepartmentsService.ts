/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Department } from '../models/Department.ts';
import type { DepartmentsSearchResults } from '../models/DepartmentsSearchResults.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { Ids } from '../models/Ids.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class DepartmentsService {

    /**
     * Search for Departments
     *
     * Search for Departments
     *
     * @returns DepartmentsSearchResults Successful response
     * @throws ApiError
     */
    public static getV1Departments({
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
         * Query in the RSQL format, allowing to filter department collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: id, name. Example: name=="*department*"
         */
        filter?: string,
    }): CancelablePromise<DepartmentsSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/departments',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Create department record
     *
     * Create department record
     *
     * @returns HrefResponse Department record was created
     * @throws ApiError
     */
    public static postV1Departments({
        requestBody,
    }: {
        /**
         * department object to create. ids defined in this body will be ignored
         */
        requestBody: Department,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deletes all departments by ids passed in body
     *
     * Deletes all departments by ids passed in body
     *
     * @returns void
     * @throws ApiError
     */
    public static postV1DepartmentsDeleteMultiple({
        requestBody,
    }: {
        /**
         * ids of departments to be deleted. pass in an array of ids
         */
        requestBody: Ids,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/departments/delete-multiple',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request processed.  Returns ids and error codes of any departments unable to be deleted.  Expected error codes: INVALID_ID - id does not exist SYSTEM_EXCEPTION - a system exception occured trying to delete the department.`,
            },
        });
    }

    /**
     * Get specified Department object
     *
     * Gets specified Department object
     *
     * @returns Department Details of department were found
     * @throws ApiError
     */
    public static getV1Departments1({
        id,
    }: {
        /**
         * instance id of department record
         */
        id: string,
    }): CancelablePromise<Department> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/departments/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified department object does not exist.`,
            },
        });
    }

    /**
     * Update specified department object
     *
     * Update specified department object
     *
     * @returns Department Department update
     * @throws ApiError
     */
    public static putV1Departments({
        id,
        requestBody,
    }: {
        /**
         * instance id of department record
         */
        id: string,
        /**
         * department object to create. ids defined in this body will be ignored
         */
        requestBody: Department,
    }): CancelablePromise<Department> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/departments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove specified department record
     *
     * Removes specified department record
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1Departments({
        id,
    }: {
        /**
         * instance id of department record
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/departments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get specified Department history object
     *
     * Gets specified Department history object
     *
     * @returns HistorySearchResults Details of department history were found
     * @throws ApiError
     */
    public static getV1DepartmentsHistory({
        id,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * instance id of department history record
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
            url: '/v1/departments/{id}/history',
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
                404: `Specified department object does not exist.`,
            },
        });
    }

    /**
     * Add specified Department history object notes
     *
     * Adds specified Department history object notes
     *
     * @returns HrefResponse Notes of department history were added
     * @throws ApiError
     */
    public static postV1DepartmentsHistory({
        id,
        requestBody,
    }: {
        /**
         * instance id of department history record
         */
        id: string,
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/departments/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Specified department object does not exist.`,
                503: `Department history can not be saved`,
            },
        });
    }

}
