/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExportParameters } from '../models/ExportParameters.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { Reenrollment } from '../models/Reenrollment.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ReEnrollmentPreviewService {

    /**
     * Get Re-enrollment object
     *
     * Gets Re-enrollment object
     *
     * @returns Reenrollment Details of Re-enrollment object were found
     * @throws ApiError
     */
    public static getV1Reenrollment(): CancelablePromise<Reenrollment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/reenrollment',
            errors: {
                404: `Re-enrollment object does not exist.`,
            },
        });
    }

    /**
     * Update the Re-enrollment object
     *
     * Update the Re-enrollment object
     *
     * @returns Reenrollment Re-enrollment record was updated
     * @throws ApiError
     */
    public static putV1Reenrollment({
        requestBody,
    }: {
        /**
         * Re-enrollment object to update
         */
        requestBody: Reenrollment,
    }): CancelablePromise<Reenrollment> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/reenrollment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Re-enrollment history object
     *
     * Gets Re-enrollment history object
     *
     * @returns HistorySearchResults Details of re-enrollment history were found
     * @throws ApiError
     */
    public static getV1ReenrollmentHistory({
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
            url: '/v1/reenrollment/history',
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
     * Add specified Re-enrollment history object notes
     *
     * Adds specified Re-enrollment history object notes
     *
     * @returns ObjectHistory Notes of re-enrollment history were added
     * @throws ApiError
     */
    public static postV1ReenrollmentHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/reenrollment/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Re-enrollment history can not be saved.`,
            },
        });
    }

    /**
     * Export reenrollment history collection
     *
     * Export reenrollment history collection
     *
     * @returns any Export successful
     * @throws ApiError
     */
    public static postV1ReenrollmentHistoryExport({
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
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: id, name. This param can be combined with paging and sorting. Example: name=="*script*"
         */
        filter?: string,
        /**
         * Optional. Override query parameters since they can make URI exceed 2,000 character limit.
         */
        requestBody?: ExportParameters,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/reenrollment/history/export',
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
                400: `Export fields specified incorrectly - non-existing column or duplicate in the list.
                Supported columns: id,name,categoryName,categoryId,priority.
                `,
                503: `Export currently unavailable, all export-related resources are in use. Try again later.`,
            },
        });
    }

}
