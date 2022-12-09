/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileAttachment } from '../models/FileAttachment.ts';
import type { FileAttachmentDelete } from '../models/FileAttachmentDelete.ts';
import type { FileAttachmentV2 } from '../models/FileAttachmentV2.ts';
import type { GetMobileDevicePrestage } from '../models/GetMobileDevicePrestage.ts';
import type { GetMobileDevicePrestageV2 } from '../models/GetMobileDevicePrestageV2.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { Ids } from '../models/Ids.ts';
import type { MobileDevicePrestage } from '../models/MobileDevicePrestage.ts';
import type { MobileDevicePrestageSearchResults } from '../models/MobileDevicePrestageSearchResults.ts';
import type { MobileDevicePrestageSearchResultsV2 } from '../models/MobileDevicePrestageSearchResultsV2.ts';
import type { MobileDevicePrestageV2 } from '../models/MobileDevicePrestageV2.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { PrestageFileAttachment } from '../models/PrestageFileAttachment.ts';
import type { PrestageFileAttachmentV2 } from '../models/PrestageFileAttachmentV2.ts';
import type { PrestageScope } from '../models/PrestageScope.ts';
import type { PrestageScopeResponse } from '../models/PrestageScopeResponse.ts';
import type { PrestageScopeResponseV2 } from '../models/PrestageScopeResponseV2.ts';
import type { PrestageScopeUpdate } from '../models/PrestageScopeUpdate.ts';
import type { PrestageScopeV2 } from '../models/PrestageScopeV2.ts';
import type { PrestageSyncStatus } from '../models/PrestageSyncStatus.ts';
import type { PrestageSyncStatusV2 } from '../models/PrestageSyncStatusV2.ts';
import type { PutMobileDevicePrestage } from '../models/PutMobileDevicePrestage.ts';
import type { PutMobileDevicePrestageV2 } from '../models/PutMobileDevicePrestageV2.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobileDevicePrestagesService {

    /**
     * @deprecated
     * Search for sorted and paged Mobile Device Prestages
     *
     * Search for sorted and paged mobile device prestages
     * @returns MobileDevicePrestageSearchResults Successful response
     * @throws ApiError
     */
    public static getV1MobileDevicePrestages({
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
         * Sorting criteria in the format: property:asc/desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: string,
    }): CancelablePromise<MobileDevicePrestageSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-prestages',
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
     * Create a Mobile Device Prestage
     *
     * Create a mobile device prestage
     * @returns GetMobileDevicePrestage Mobile Device Prestage was created
     * @throws ApiError
     */
    public static postV1MobileDevicePrestages({
        requestBody,
    }: {
        /**
         * Mobile Device Prestage to create. ids defined in this body will be ignored
         */
        requestBody: MobileDevicePrestage,
    }): CancelablePromise<GetMobileDevicePrestage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/mobile-device-prestages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Get all Device Scope for all Mobile Device Prestages
     *
     * Get all device scope for all mobile device prestages
     * @returns PrestageScope Successful response
     * @throws ApiError
     */
    public static getV1MobileDevicePrestagesScope(): CancelablePromise<PrestageScope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-prestages/scope',
        });
    }

    /**
     * @deprecated
     * Get all Prestage sync States for all prestages
     *
     * Get all prestage sync states for all prestages
     * @returns PrestageSyncStatus Successful response
     * @throws ApiError
     */
    public static getV1MobileDevicePrestagesSync(): CancelablePromise<Array<PrestageSyncStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-prestages/sync',
        });
    }

    /**
     * @deprecated
     * Get all prestage sync states for a single prestage
     *
     * Get all prestage sync states for a single prestage
     * @returns PrestageSyncStatus Successful response
     * @throws ApiError
     */
    public static getV1MobileDevicePrestagesSync1({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
    }): CancelablePromise<Array<PrestageSyncStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-prestages/sync/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Get the latest Sync State for a single Prestage
     *
     * Get the latest sync state for a single prestage
     * @returns PrestageSyncStatus Successful response
     * @throws ApiError
     */
    public static getV1MobileDevicePrestagesSyncLatest({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
    }): CancelablePromise<PrestageSyncStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-prestages/sync/{id}/latest',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Retrieve a Mobile Device Prestage with the supplied id
     *
     * Retrieves a Mobile Device Prestage with the supplied id
     * @returns GetMobileDevicePrestage Success
     * @throws ApiError
     */
    public static getV1MobileDevicePrestages1({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
    }): CancelablePromise<GetMobileDevicePrestage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-prestages/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Mobile Device Prestage with that id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Update a Mobile Device Prestage
     *
     * Updates a Mobile Device Prestage
     * @returns GetMobileDevicePrestage Success
     * @throws ApiError
     */
    public static putV1MobileDevicePrestages({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
        /**
         * Mobile Device Prestage to update
         */
        requestBody: PutMobileDevicePrestage,
    }): CancelablePromise<GetMobileDevicePrestage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/mobile-device-prestages/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Mobile Device Prestage with that id does not exist`,
                409: `The Mobile Device Prestage was modified by another process. Read the Mobile Device Prestage again for updated changes.`,
            },
        });
    }

    /**
     * @deprecated
     * Delete a Mobile Device Prestage with the supplied id
     *
     * Deletes a Mobile Device Prestage with the supplied id
     * @returns void
     * @throws ApiError
     */
    public static deleteV1MobileDevicePrestages({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/mobile-device-prestages/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Get attachments for a Mobile Device Prestage
     *
     * Get attachments for a Mobile Device Prestage
     * @returns FileAttachment Success
     * @throws ApiError
     */
    public static getV1MobileDevicePrestagesAttachments({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
    }): CancelablePromise<Array<FileAttachment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-prestages/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                404: `Mobile Device Prestage with that id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Add an attachment to a Mobile Device Prestage
     *
     * Add an attachment to a Mobile Device prestage
     * @returns PrestageFileAttachment Success
     * @throws ApiError
     */
    public static postV1MobileDevicePrestagesAttachments({
        id,
        formData,
    }: {
        /**
         * Identifier of the Mobile Device Prestage the attachment should be assigned to
         */
        id: number,
        formData: any,
    }): CancelablePromise<PrestageFileAttachment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/mobile-device-prestages/{id}/attachments',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Mobile Device Prestage with that id does not exist`,
                413: `Payload Too Large`,
            },
        });
    }

    /**
     * @deprecated
     * Remove an attachment for a Mobile Device Prestage
     *
     * Remove an attachment for a Mobile Device Prestage
     * @returns void
     * @throws ApiError
     */
    public static deleteV1MobileDevicePrestagesAttachments({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
        requestBody: FileAttachmentDelete,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/mobile-device-prestages/{id}/attachments',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Get sorted and paged Mobile Device Prestage history objects
     *
     * Gets sorted and paged mobile device prestage history objects
     * @returns HistorySearchResults Details of mobile device prestage history were found
     * @throws ApiError
     */
    public static getV1MobileDevicePrestagesHistory({
        id,
        page,
        size = 100,
        pagesize = 100,
        pageSize = 100,
        sort,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
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
         * Sorting criteria in the format: property,asc/desc. Default sort order is descending. Multiple sort criteria are supported and must be entered on separate lines in Swagger UI. In the URI the 'sort' query param is duplicated for each sort criterion, e.g., ...&sort=name%2Casc&sort=date%2Cdesc
         */
        sort?: Array<string>,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-prestages/{id}/history',
            path: {
                'id': id,
            },
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
     * Add Mobile Device Prestage history object notes
     *
     * Adds mobile device prestage history object notes
     * @returns ObjectHistory Notes of mobile deivce prestage history were added
     * @throws ApiError
     */
    public static postV1MobileDevicePrestagesHistory({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
        /**
         * History notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/mobile-device-prestages/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Mobile device prestage history can not be saved`,
            },
        });
    }

    /**
     * @deprecated
     * Get Device Scope for a specific Mobile Device Prestage
     *
     * Get device scope for a specific mobile device prestage
     * @returns PrestageScopeResponse Successful response
     * @throws ApiError
     */
    public static getV1MobileDevicePrestagesScope1({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
    }): CancelablePromise<PrestageScopeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-prestages/{id}/scope',
            path: {
                'id': id,
            },
            errors: {
                404: `Mobile Device Prestage with that id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Replace Device Scope for a specific Mobile Device Prestage
     *
     * Replace device scope for a specific mobile device prestage
     * @returns PrestageScopeResponse Successful response
     * @throws ApiError
     */
    public static putV1MobileDevicePrestagesScope({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
        /**
         * Serial Numbers to scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/mobile-device-prestages/{id}/scope',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Mobile Device Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * @deprecated
     * Add Device Scope for a specific Mobile Device Prestage
     *
     * Add device scope for a specific mobile device prestage
     * @returns PrestageScopeResponse Successful response
     * @throws ApiError
     */
    public static postV1MobileDevicePrestagesScope({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
        /**
         * Serial Numbers to scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/mobile-device-prestages/{id}/scope',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Mobile Device Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * @deprecated
     * Remove Device Scope for a specific Mobile Device Prestage
     *
     * Remove device scope for a specific mobile device prestage
     * @returns PrestageScopeResponse Successful response
     * @throws ApiError
     */
    public static deleteV1MobileDevicePrestagesScope({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: number,
        /**
         * Serial Numbers to remove from scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/mobile-device-prestages/{id}/scope',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Mobile Device Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * Get sorted and paged Mobile Device Prestages
     *
     * Gets sorted and paged mobile device prestages
     * @returns MobileDevicePrestageSearchResultsV2 Successful response
     * @throws ApiError
     */
    public static getV2MobileDevicePrestages({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
    }): CancelablePromise<MobileDevicePrestageSearchResultsV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-device-prestages',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Create a Mobile Device Prestage
     *
     * Create a mobile device prestage
     * @returns HrefResponse Mobile Device Prestage was created
     * @throws ApiError
     */
    public static postV2MobileDevicePrestages({
        requestBody,
    }: {
        /**
         * Mobile Device Prestage to create. ids defined in this body will be ignored
         */
        requestBody: MobileDevicePrestageV2,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/mobile-device-prestages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all Device Scope for all Mobile Device Prestages
     *
     * Get all device scope for all mobile device prestages
     * @returns PrestageScopeV2 Successful response
     * @throws ApiError
     */
    public static getV2MobileDevicePrestagesScope(): CancelablePromise<PrestageScopeV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-device-prestages/scope',
        });
    }

    /**
     * Get all Prestage sync States for all prestages
     *
     * Get all prestage sync states for all prestages
     * @returns PrestageSyncStatusV2 Successful response
     * @throws ApiError
     */
    public static getV2MobileDevicePrestagesSyncs(): CancelablePromise<Array<PrestageSyncStatusV2>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-device-prestages/syncs',
        });
    }

    /**
     * Retrieve a Mobile Device Prestage with the supplied id
     *
     * Retrieves a Mobile Device Prestage with the supplied id
     * @returns GetMobileDevicePrestageV2 Success
     * @throws ApiError
     */
    public static getV2MobileDevicePrestages1({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
    }): CancelablePromise<GetMobileDevicePrestageV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-device-prestages/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Mobile Device Prestage with that id does not exist`,
            },
        });
    }

    /**
     * Update a Mobile Device Prestage
     *
     * Updates a Mobile Device Prestage
     * @returns GetMobileDevicePrestageV2 Success
     * @throws ApiError
     */
    public static putV2MobileDevicePrestages({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
        /**
         * Mobile Device Prestage to update
         */
        requestBody: PutMobileDevicePrestageV2,
    }): CancelablePromise<GetMobileDevicePrestageV2> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/mobile-device-prestages/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Mobile Device Prestage with that id does not exist`,
                409: `The Mobile Device Prestage was modified by another process. Read the Mobile Device Prestage again for updated changes.`,
            },
        });
    }

    /**
     * Delete a Mobile Device Prestage with the supplied id
     *
     * Deletes a Mobile Device Prestage with the supplied id
     * @returns void
     * @throws ApiError
     */
    public static deleteV2MobileDevicePrestages({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/mobile-device-prestages/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get attachments for a Mobile Device Prestage
     *
     * Get attachments for a Mobile Device Prestage
     * @returns FileAttachmentV2 Success
     * @throws ApiError
     */
    public static getV2MobileDevicePrestagesAttachments({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
    }): CancelablePromise<Array<FileAttachmentV2>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-device-prestages/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                404: `Mobile Device Prestage with that id does not exist`,
            },
        });
    }

    /**
     * Add an attachment to a Mobile Device Prestage
     *
     * Add an attachment to a Mobile Device prestage
     * @returns PrestageFileAttachmentV2 Success
     * @throws ApiError
     */
    public static postV2MobileDevicePrestagesAttachments({
        id,
        formData,
    }: {
        /**
         * Identifier of the Mobile Device Prestage the attachment should be assigned to
         */
        id: string,
        formData: any,
    }): CancelablePromise<PrestageFileAttachmentV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/mobile-device-prestages/{id}/attachments',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Mobile Device Prestage with that id does not exist`,
                413: `Payload Too Large`,
            },
        });
    }

    /**
     * Remove an attachment for a Mobile Device Prestage
     *
     * Remove an attachment for a Mobile Device Prestage
     * @returns void
     * @throws ApiError
     */
    public static postV2MobileDevicePrestagesAttachmentsDeleteMultiple({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
        requestBody: Ids,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/mobile-device-prestages/{id}/attachments/delete-multiple',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get sorted and paged Mobile Device Prestage history objects
     *
     * Gets sorted and paged mobile device prestage history objects
     * @returns HistorySearchResults Details of mobile device prestage history were found
     * @throws ApiError
     */
    public static getV2MobileDevicePrestagesHistory({
        id,
        page,
        pageSize = 100,
        sort,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property,asc/desc. Default sort order is descending. Multiple sort criteria are supported and must be entered on separate lines in Swagger UI. In the URI the 'sort' query param is duplicated for each sort criterion, e.g., ...&sort=name%2Casc&sort=date%2Cdesc
         */
        sort?: Array<string>,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-device-prestages/{id}/history',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Add Mobile Device Prestage history object notes
     *
     * Adds mobile device prestage history object notes
     * @returns HrefResponse Notes of mobile deivce prestage history were added
     * @throws ApiError
     */
    public static postV2MobileDevicePrestagesHistory({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
        /**
         * History notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/mobile-device-prestages/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Mobile device prestage history can not be saved`,
            },
        });
    }

    /**
     * Get Device Scope for a specific Mobile Device Prestage
     *
     * Get device scope for a specific mobile device prestage
     * @returns PrestageScopeResponseV2 Successful response
     * @throws ApiError
     */
    public static getV2MobileDevicePrestagesScope1({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
    }): CancelablePromise<PrestageScopeResponseV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-device-prestages/{id}/scope',
            path: {
                'id': id,
            },
            errors: {
                404: `Mobile Device Prestage with that id does not exist`,
            },
        });
    }

    /**
     * Replace Device Scope for a specific Mobile Device Prestage
     *
     * Replace device scope for a specific mobile device prestage
     * @returns PrestageScopeResponseV2 Successful response
     * @throws ApiError
     */
    public static putV2MobileDevicePrestagesScope({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
        /**
         * Serial Numbers to scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponseV2> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/mobile-device-prestages/{id}/scope',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Mobile Device Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * Add Device Scope for a specific Mobile Device Prestage
     *
     * Add device scope for a specific mobile device prestage
     * @returns PrestageScopeResponseV2 Successful response
     * @throws ApiError
     */
    public static postV2MobileDevicePrestagesScope({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
        /**
         * Serial Numbers to scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponseV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/mobile-device-prestages/{id}/scope',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Mobile Device Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * Remove Device Scope for a specific Mobile Device Prestage
     *
     * Remove device scope for a specific mobile device prestage
     * @returns PrestageScopeResponseV2 Successful response
     * @throws ApiError
     */
    public static postV2MobileDevicePrestagesScopeDeleteMultiple({
        id,
        requestBody,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
        /**
         * Serial Numbers to remove from scope
         */
        requestBody: PrestageScopeUpdate,
    }): CancelablePromise<PrestageScopeResponseV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/mobile-device-prestages/{id}/scope/delete-multiple',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more serial numbers are not valid`,
                404: `Mobile Device Prestage with that id does not exist`,
                409: `Optimistic Lock Error - The prestage you are trying to update has been updated by another process`,
            },
        });
    }

    /**
     * Get all prestage sync states for a single prestage
     *
     * Get all prestage sync states for a single prestage
     * @returns PrestageSyncStatusV2 Successful response
     * @throws ApiError
     */
    public static getV2MobileDevicePrestagesSyncs1({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
    }): CancelablePromise<Array<PrestageSyncStatusV2>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-device-prestages/{id}/syncs',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get the latest Sync State for a single Prestage
     *
     * Get the latest sync state for a single prestage
     * @returns PrestageSyncStatusV2 Successful response
     * @throws ApiError
     */
    public static getV2MobileDevicePrestagesSyncsLatest({
        id,
    }: {
        /**
         * Mobile Device Prestage identifier
         */
        id: string,
    }): CancelablePromise<PrestageSyncStatusV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-device-prestages/{id}/syncs/latest',
            path: {
                'id': id,
            },
        });
    }

}
