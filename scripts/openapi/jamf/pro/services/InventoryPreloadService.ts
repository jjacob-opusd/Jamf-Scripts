/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExportParameters } from '../models/ExportParameters.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { InventoryPreloadCsvValidationSuccess } from '../models/InventoryPreloadCsvValidationSuccess.ts';
import type { InventoryPreloadExtensionAttributeColumnResult } from '../models/InventoryPreloadExtensionAttributeColumnResult.ts';
import type { InventoryPreloadRecord } from '../models/InventoryPreloadRecord.ts';
import type { InventoryPreloadRecordSearchResults } from '../models/InventoryPreloadRecordSearchResults.ts';
import type { InventoryPreloadRecordSearchResultsV2 } from '../models/InventoryPreloadRecordSearchResultsV2.ts';
import type { InventoryPreloadRecordV2 } from '../models/InventoryPreloadRecordV2.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class InventoryPreloadService {

    /**
     * @deprecated
     * Return all Inventory Preload records
     *
     * Returns all Inventory Preload records.
     * @returns InventoryPreloadRecordSearchResults OK
     * @throws ApiError
     */
    public static getInventoryPreload({
        page,
        pagesize = 100,
        sort = 'ASC',
        sortBy = 'id',
    }: {
        page?: number,
        /**
         * @deprecated
         */
        pagesize?: number,
        sort?: 'ASC' | 'DESC',
        sortBy?: string,
    }): CancelablePromise<Array<InventoryPreloadRecordSearchResults>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/inventory-preload',
            query: {
                'page': page,
                'pagesize': pagesize,
                'sort': sort,
                'sortBy': sortBy,
            },
        });
    }

    /**
     * @deprecated
     * Create a new Inventory Preload record using JSON or CSV
     *
     * Create a new Inventory Preload record using JSON or CSV.
     * A CSV template can be downloaded from /api/inventory-preload/csv-template.
     * Serial number and device type are required. All other fields are optional.
     * When a matching serial number exists in the Inventory Preload data, the record will be overwritten with the CSV data.
     * If the CSV file contains a new username and an email address is provided, the new user is created in Jamf Pro.
     * If the CSV file contains an existing username, the following user-related fields are updated in Jamf Pro.
     * Full Name,
     * Email Address,
     * Phone Number,
     * Position.
     * This endpoint does not do full validation of each record in the CSV data.
     * To do full validation, use the /inventory-preload/validate-csv endpoint first.
     *
     * @returns InventoryPreloadRecord Created
     * @throws ApiError
     */
    public static postInventoryPreload({
        requestBody,
    }: {
        /**
         * Inventory Preload record or records to be created
         */
        requestBody: InventoryPreloadRecord,
    }): CancelablePromise<InventoryPreloadRecord> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/inventory-preload',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @deprecated
     * Delete all Inventory Preload records
     *
     * Deletes all Inventory Preload records.
     * @returns void
     * @throws ApiError
     */
    public static deleteInventoryPreload(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/inventory-preload',
        });
    }

    /**
     * @deprecated
     * Get the Inventory Preload CSV template
     *
     * Retrieves the Inventory Preload CSV template.
     * @returns any OK
     * @throws ApiError
     */
    public static getInventoryPreloadCsvTemplate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/inventory-preload/csv-template',
        });
    }

    /**
     * @deprecated
     * Get Inventory Preload history entries
     *
     * Gets Inventory Preload history entries.
     * @returns HistorySearchResults OK
     * @throws ApiError
     */
    public static getInventoryPreloadHistory({
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
            url: '/inventory-preload/history',
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
     * @deprecated
     * Add Inventory Preload history object notes
     *
     * Adds Inventory Preload history object notes.
     * @returns ObjectHistory Notes of Inventory Preload history were added
     * @throws ApiError
     */
    public static postInventoryPreloadHistoryNotes({
        requestBody,
    }: {
        /**
         * History notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/inventory-preload/history/notes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Inventory Preload history can not be saved`,
            },
        });
    }

    /**
     * @deprecated
     * Validate a given CSV file
     *
     * Validate a given CSV file.
     * Serial number and device type are required. All other fields are optional.
     * A CSV template can be downloaded from /api/inventory-preload/csv-template.
     *
     * @returns InventoryPreloadCsvValidationSuccess Ok
     * @throws ApiError
     */
    public static postInventoryPreloadValidateCsv({
        requestBody,
    }: {
        /**
         * Inventory Preload records to be validated. A CSV template can be downloaded from /api/inventory-preload/csv-template
         */
        requestBody: any,
    }): CancelablePromise<InventoryPreloadCsvValidationSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/inventory-preload/validate-csv',
            body: requestBody,
            mediaType: 'text/csv',
            errors: {
                412: `Precondition Failed`,
            },
        });
    }

    /**
     * @deprecated
     * Get an Inventory Preload record
     *
     * Retrieves an Inventory Preload record.
     * @returns InventoryPreloadRecord OK
     * @throws ApiError
     */
    public static getInventoryPreload1({
        id,
    }: {
        /**
         * Inventory Preload identifier
         */
        id: number,
    }): CancelablePromise<InventoryPreloadRecord> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/inventory-preload/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Inventory Preload record with specified id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Update an Inventory Preload record
     *
     * Updates an Inventory Preload record.
     * @returns InventoryPreloadRecord OK
     * @throws ApiError
     */
    public static putInventoryPreload({
        id,
        requestBody,
    }: {
        /**
         * Inventory Preload identifier
         */
        id: number,
        /**
         * Inventory Preload record to update
         */
        requestBody: InventoryPreloadRecord,
    }): CancelablePromise<InventoryPreloadRecord> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/inventory-preload/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Inventory Preload record with specified id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Delete an Inventory Preload record
     *
     * Deletes an Inventory Preload record.
     * @returns void
     * @throws ApiError
     */
    public static deleteInventoryPreload1({
        id,
    }: {
        /**
         * Inventory Preload identifier
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/inventory-preload/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Inventory Preload record with specified id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Return all Inventory Preload records
     *
     * Returns all Inventory Preload records.
     * @returns InventoryPreloadRecordSearchResults OK
     * @throws ApiError
     */
    public static getV1InventoryPreload({
        page,
        size = 100,
        pagesize = 100,
        pageSize = 100,
        sort = 'id:asc',
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
         * Sorting criteria in the format: property:asc/desc. Default sort is id:asc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: string,
    }): CancelablePromise<InventoryPreloadRecordSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/inventory-preload',
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
     * @deprecated
     * Create a new Inventory Preload record using JSON or CSV
     *
     * Create a new Inventory Preload record using JSON or CSV.
     * A CSV template can be downloaded from /api/inventory-preload/csv-template.
     * Serial number and device type are required. All other fields are optional.
     * When a matching serial number exists in the Inventory Preload data, the record will be overwritten with the CSV data.
     * If the CSV file contains a new username and an email address is provided, the new user is created in Jamf Pro.
     * If the CSV file contains an existing username, the following user-related fields are updated in Jamf Pro.
     * Full Name,
     * Email Address,
     * Phone Number,
     * Position.
     * This endpoint does not do full validation of each record in the CSV data.
     * To do full validation, use the /inventory-preload/validate-csv endpoint first.
     *
     * @returns InventoryPreloadRecord Created
     * @throws ApiError
     */
    public static postV1InventoryPreload({
        requestBody,
    }: {
        /**
         * Inventory Preload record or records to be created
         */
        requestBody: InventoryPreloadRecord,
    }): CancelablePromise<InventoryPreloadRecord> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/inventory-preload',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @deprecated
     * Delete all Inventory Preload records
     *
     * Deletes all Inventory Preload records.
     * @returns void
     * @throws ApiError
     */
    public static deleteV1InventoryPreload(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/inventory-preload',
        });
    }

    /**
     * @deprecated
     * Retrieve the Inventory Preload CSV template
     *
     * Retrieves the Inventory Preload CSV template.
     * @returns any OK
     * @throws ApiError
     */
    public static getV1InventoryPreloadCsvTemplate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/inventory-preload/csv-template',
        });
    }

    /**
     * @deprecated
     * Get Inventory Preload history entries
     *
     * Gets Inventory Preload history entries.
     * @returns HistorySearchResults OK
     * @throws ApiError
     */
    public static getV1InventoryPreloadHistory({
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
            url: '/v1/inventory-preload/history',
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
     * @deprecated
     * Add Inventory Preload history object notes
     *
     * Adds Inventory Preload history object notes.
     * @returns ObjectHistory Notes of Inventory Preload history were added
     * @throws ApiError
     */
    public static postV1InventoryPreloadHistory({
        requestBody,
    }: {
        /**
         * History notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/inventory-preload/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Inventory Preload history can not be saved`,
            },
        });
    }

    /**
     * @deprecated
     * Validate a given CSV file
     *
     * Validate a given CSV file.
     * Serial number and device type are required. All other fields are optional.
     * A CSV template can be downloaded from /api/inventory-preload/csv-template.
     *
     * @returns InventoryPreloadCsvValidationSuccess Ok
     * @throws ApiError
     */
    public static postV1InventoryPreloadValidateCsv({
        requestBody,
    }: {
        /**
         * Inventory Preload records to be validated. A CSV template can be downloaded from /api/inventory-preload/csv-template
         */
        requestBody: any,
    }): CancelablePromise<InventoryPreloadCsvValidationSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/inventory-preload/validate-csv',
            body: requestBody,
            mediaType: 'text/csv',
            errors: {
                412: `Precondition Failed`,
            },
        });
    }

    /**
     * @deprecated
     * Get an Inventory Preload record
     *
     * Retrieves an Inventory Preload record.
     * @returns InventoryPreloadRecord OK
     * @throws ApiError
     */
    public static getV1InventoryPreload1({
        id,
    }: {
        /**
         * Inventory Preload identifier
         */
        id: number,
    }): CancelablePromise<InventoryPreloadRecord> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/inventory-preload/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Inventory Preload record with specified id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Update an Inventory Preload record
     *
     * Updates an Inventory Preload record.
     * @returns InventoryPreloadRecord OK
     * @throws ApiError
     */
    public static putV1InventoryPreload({
        id,
        requestBody,
    }: {
        /**
         * Inventory Preload identifier
         */
        id: number,
        /**
         * Inventory Preload record to update
         */
        requestBody: InventoryPreloadRecord,
    }): CancelablePromise<InventoryPreloadRecord> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/inventory-preload/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Inventory Preload record with specified id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Delete an Inventory Preload record
     *
     * Deletes an Inventory Preload record.
     * @returns void
     * @throws ApiError
     */
    public static deleteV1InventoryPreload1({
        id,
    }: {
        /**
         * Inventory Preload identifier
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/inventory-preload/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Inventory Preload record with specified id does not exist`,
            },
        });
    }

    /**
     * Download all Inventory Preload records
     * Returns all Inventory Preload records as a CSV file.
     * @returns string OK
     * @throws ApiError
     */
    public static getV2InventoryPreloadCsv(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/inventory-preload/csv',
        });
    }

    /**
     * Create one or more new Inventory Preload records using CSV
     *
     * Create one or more new Inventory Preload records using CSV.
     * A CSV template can be downloaded from /v2/inventory-preload/csv-template.
     * Serial number and device type are required. All other fields are optional.
     * When a matching serial number exists in the Inventory Preload data, the record will be overwritten with the CSV data.
     * If the CSV file contains a new username and an email address is provided, the new user is created in Jamf Pro.
     * If the CSV file contains an existing username, the following user-related fields are updated in Jamf Pro.
     * Full Name,
     * Email Address,
     * Phone Number,
     * Position.
     * This endpoint does not do full validation of each record in the CSV data.
     * To do full validation, use the `/v2/inventory-preload/csv-validate` endpoint first.
     *
     * @returns HrefResponse Created
     * @throws ApiError
     */
    public static postV2InventoryPreloadCsv({
        formData,
    }: {
        formData: any,
    }): CancelablePromise<Array<HrefResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/inventory-preload/csv',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Validation Failed`,
            },
        });
    }

    /**
     * Download the Inventory Preload CSV template
     * Retrieves the Inventory Preload CSV file template.
     * @returns string OK
     * @throws ApiError
     */
    public static getV2InventoryPreloadCsvTemplate(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/inventory-preload/csv-template',
        });
    }

    /**
     * Validate a given CSV file
     *
     * Validate a given CSV file.
     * Serial number and device type are required. All other fields are optional.
     * A CSV template can be downloaded from `/v2/inventory-preload/csv-template`.
     *
     * @returns InventoryPreloadCsvValidationSuccess Ok
     * @throws ApiError
     */
    public static postV2InventoryPreloadCsvValidate({
        formData,
    }: {
        /**
         * Inventory Preload records to be validated. A CSV template can
         * be downloaded from `/v2/inventory-preload/csv-template`.
         *
         */
        formData: any,
    }): CancelablePromise<InventoryPreloadCsvValidationSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/inventory-preload/csv-validate',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Precondition Failed`,
            },
        });
    }

    /**
     * Retrieve a list of extension attribute columns
     *
     * Retrieve a list of extension attribute columns currently associated
     * with inventory preload records
     *
     * @returns InventoryPreloadExtensionAttributeColumnResult Ok
     * @throws ApiError
     */
    public static getV2InventoryPreloadEaColumns(): CancelablePromise<InventoryPreloadExtensionAttributeColumnResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/inventory-preload/ea-columns',
        });
    }

    /**
     * Export a collection of inventory preload records
     *
     * Export a collection of inventory preload records
     *
     * @returns any Export successful
     * @throws ApiError
     */
    public static postV2InventoryPreloadExport({
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
         * Sorting criteria in the format: `property:asc/desc`. Default sort
         * is `id:asc`. Multiple sort criteria are supported and must be separated with
         * a comma. All inventory preload fields are supported, however fields added by
         * extension attributes are not supported. If sorting by deviceType, use `0` for
         * Computer and `1` for Mobile Device.
         *
         * Example: `sort=date:desc,name:asc`.
         *
         */
        sort?: Array<string>,
        /**
         * Allowing to filter inventory preload records.
         * Default search is empty query - returning all results for the requested page.
         * All inventory preload fields are supported, however fields added by extension
         * attributes are not supported. If filtering by deviceType, use `0` for Computer
         * and `1` for Mobile Device.
         *
         * Query in the RSQL format, allowing `==`, `!=`, `>`, `<`, and `=in=`.
         *
         * Example: `filter=categoryName=="Category"`
         *
         */
        filter?: string,
        /**
         * Optional. Override query parameters since they can make URI exceed 2,000 character limit.
         */
        requestBody?: ExportParameters,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/inventory-preload/export',
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
                503: `Unable to perform export operation.`,
            },
        });
    }

    /**
     * Get Inventory Preload history entries
     *
     * Gets Inventory Preload history entries.
     * @returns HistorySearchResults OK
     * @throws ApiError
     */
    public static getV2InventoryPreloadHistory({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: `property:asc/desc`. Default sort
         * is `date:desc`. Multiple sort criteria are supported and must be separated
         * with a comma.
         *
         * Example: `sort=date:desc,name:asc`.
         *
         */
        sort?: Array<string>,
        /**
         * Allows filtering inventory preload history records.
         * Default search is empty query - returning all results for the requested page.
         * All inventory preload history fields are supported.
         *
         * Query in the RSQL format, allowing `==`, `!=`, `>`, `<`, and `=in=`.
         *
         * Example: `filter=username=="admin"`
         *
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/inventory-preload/history',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Add Inventory Preload history object notes
     * Adds Inventory Preload history object notes.
     * @returns HrefResponse Notes of Inventory Preload history were added
     * @throws ApiError
     */
    public static postV2InventoryPreloadHistory({
        requestBody,
    }: {
        /**
         * History notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/inventory-preload/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Inventory Preload history can not be saved`,
            },
        });
    }

    /**
     * Return all Inventory Preload records
     * Returns all Inventory Preload records.
     * @returns InventoryPreloadRecordSearchResultsV2 OK
     * @throws ApiError
     */
    public static getV2InventoryPreloadRecords({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: `property:asc/desc`. Default sort
         * is `id:asc`. Multiple sort criteria are supported and must be separated with
         * a comma. All inventory preload fields are supported, however fields added by
         * extension attributes are not supported. If sorting by deviceType, use `0` for
         * Computer and `1` for Mobile Device.
         *
         * Example: `sort=date:desc,name:asc`.
         *
         */
        sort?: Array<string>,
        /**
         * Allowing to filter inventory preload records.
         * Default search is empty query - returning all results for the requested page.
         * All inventory preload fields are supported, however fields added by extension
         * attributes are not supported. If filtering by deviceType, use `0` for Computer
         * and `1` for Mobile Device.
         *
         * Query in the RSQL format, allowing `==`, `!=`, `>`, `<`, and `=in=`.
         *
         * Example: `filter=categoryName=="Category"`
         *
         */
        filter?: string,
    }): CancelablePromise<InventoryPreloadRecordSearchResultsV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/inventory-preload/records',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Create a new Inventory Preload record using JSON
     * Create a new Inventory Preload record using JSON.
     * @returns HrefResponse Created
     * @throws ApiError
     */
    public static postV2InventoryPreloadRecords({
        requestBody,
    }: {
        /**
         * Inventory Preload record to be created.
         */
        requestBody: InventoryPreloadRecordV2,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/inventory-preload/records',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Delete all Inventory Preload records
     *
     * Deletes all Inventory Preload records.
     * @returns void
     * @throws ApiError
     */
    public static postV2InventoryPreloadRecordsDeleteAll(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/inventory-preload/records/delete-all',
        });
    }

    /**
     * Get an Inventory Preload record
     * Retrieves an Inventory Preload record.
     * @returns InventoryPreloadRecordV2 OK
     * @throws ApiError
     */
    public static getV2InventoryPreloadRecords1({
        id,
    }: {
        /**
         * Inventory Preload identifier
         */
        id: string,
    }): CancelablePromise<InventoryPreloadRecordV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/inventory-preload/records/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Inventory Preload record with specified id does not exist`,
            },
        });
    }

    /**
     * Update an Inventory Preload record
     * Updates an Inventory Preload record.
     * @returns InventoryPreloadRecordV2 OK
     * @throws ApiError
     */
    public static putV2InventoryPreloadRecords({
        id,
        requestBody,
    }: {
        /**
         * Inventory Preload identifier
         */
        id: string,
        /**
         * Inventory Preload record to update
         */
        requestBody: InventoryPreloadRecordV2,
    }): CancelablePromise<InventoryPreloadRecordV2> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/inventory-preload/records/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Inventory Preload record with specified id does not exist`,
            },
        });
    }

    /**
     * Delete an Inventory Preload record
     *
     * Deletes an Inventory Preload record.
     * @returns void
     * @throws ApiError
     */
    public static deleteV2InventoryPreloadRecords({
        id,
    }: {
        /**
         * Inventory Preload identifier
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/inventory-preload/records/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Inventory Preload record with specified id does not exist`,
            },
        });
    }

}
