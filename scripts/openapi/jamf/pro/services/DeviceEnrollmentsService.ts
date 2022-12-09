/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceEnrollmentDisownBody } from '../models/DeviceEnrollmentDisownBody.ts';
import type { DeviceEnrollmentDisownResponse } from '../models/DeviceEnrollmentDisownResponse.ts';
import type { DeviceEnrollmentInstance } from '../models/DeviceEnrollmentInstance.ts';
import type { DeviceEnrollmentInstanceSearchResults } from '../models/DeviceEnrollmentInstanceSearchResults.ts';
import type { DeviceEnrollmentInstanceSyncStatus } from '../models/DeviceEnrollmentInstanceSyncStatus.ts';
import type { DeviceEnrollmentToken } from '../models/DeviceEnrollmentToken.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class DeviceEnrollmentsService {

    /**
     * Read all sorted and paged Device Enrollment instances
     *
     * Search for sorted and paged device enrollment instances
     * @returns DeviceEnrollmentInstanceSearchResults Successful response
     * @throws ApiError
     */
    public static getV1DeviceEnrollments({
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
    }): CancelablePromise<DeviceEnrollmentInstanceSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/device-enrollments',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Retrieve the Jamf Pro Device Enrollment public key
     *
     * Retrieve the Jamf Pro device enrollment public key
     * @returns binary Success
     * @throws ApiError
     */
    public static getV1DeviceEnrollmentsPublicKey(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/device-enrollments/public-key',
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Get all instance sync states for all Device Enrollment Instances
     *
     * Get all instance sync states for all instances
     * @returns DeviceEnrollmentInstanceSyncStatus Successful response
     * @throws ApiError
     */
    public static getV1DeviceEnrollmentsSyncs(): CancelablePromise<Array<DeviceEnrollmentInstanceSyncStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/device-enrollments/syncs',
        });
    }

    /**
     * Create a Device Enrollment Instance with the supplied Token
     *
     * Creates a device enrollment instance with the supplied token.
     * @returns HrefResponse Device Enrollment Instance was created
     * @throws ApiError
     */
    public static postV1DeviceEnrollmentsUploadToken({
        requestBody,
    }: {
        /**
         * The downloaded token base 64 encoded from the MDM server to be used to create a new Device Enrollment Instance.
         */
        requestBody: DeviceEnrollmentToken,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/device-enrollments/upload-token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Something went wrong`,
            },
        });
    }

    /**
     * Retrieve a Device Enrollment Instance with the supplied id
     *
     * Retrieves a Device Enrollment Instance with the supplied id
     * @returns DeviceEnrollmentInstance Success
     * @throws ApiError
     */
    public static getV1DeviceEnrollments1({
        id,
    }: {
        /**
         * Device Enrollment Instance identifier
         */
        id: string,
    }): CancelablePromise<DeviceEnrollmentInstance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/device-enrollments/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Device Enrollment Instance with that id does not exist`,
            },
        });
    }

    /**
     * Update a Device Enrollment Instance with the supplied id
     *
     * Updates a Device Enrollment Instance with the supplied id
     * @returns DeviceEnrollmentInstance Success
     * @throws ApiError
     */
    public static putV1DeviceEnrollments({
        id,
        requestBody,
    }: {
        /**
         * Device Enrollment Instance identifier
         */
        id: string,
        requestBody: DeviceEnrollmentInstance,
    }): CancelablePromise<DeviceEnrollmentInstance> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/device-enrollments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Device Enrollment Instance with that id does not exist`,
            },
        });
    }

    /**
     * Delete a Device Enrollment Instance with the supplied id
     *
     * Deletes a Device Enrollment Instance with the supplied id
     * @returns void
     * @throws ApiError
     */
    public static deleteV1DeviceEnrollments({
        id,
    }: {
        /**
         * Device Enrollment Instance identifier
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/device-enrollments/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Device Enrollment Instance with that id does not exist`,
            },
        });
    }

    /**
     * Disown devices from the given Device Enrollment Instance
     *
     * Disowns devices from the given device enrollment instance
     * @returns DeviceEnrollmentDisownResponse Success
     * @throws ApiError
     */
    public static postV1DeviceEnrollmentsDisown({
        id,
        requestBody,
    }: {
        /**
         * Device Enrollment Instance identifier
         */
        id: string,
        /**
         * List of device serial numbers to disown
         */
        requestBody?: DeviceEnrollmentDisownBody,
    }): CancelablePromise<DeviceEnrollmentDisownResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/device-enrollments/{id}/disown',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Could not find device enrollment program instance for given id`,
                500: `Something went wrong.`,
            },
        });
    }

    /**
     * Get sorted and paged Device Enrollment history objects
     *
     * Gets sorted and paged device enrollment history objects
     * @returns HistorySearchResults Details of device enrollment history were found
     * @throws ApiError
     */
    public static getV1DeviceEnrollmentsHistory({
        id,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * Device Enrollment Instance identifier
         */
        id: string,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property,asc/desc. Default sort order is descending. Multiple sort criteria are supported and must be entered on separate lines in Swagger UI. In the URI the 'sort' query param is duplicated for each sort criterion, e.g., ...&sort=name%2Casc&sort=date%2Cdesc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default search is empty query - returning all results for the requested page. Fields allowed in the query: username, date, note, details. This param can be combined with paging and sorting. Example: search=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/device-enrollments/{id}/history',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Add Device Enrollment history object notes
     *
     * Adds device enrollment history object notes
     * @returns HrefResponse Notes of device enrollment history were added
     * @throws ApiError
     */
    public static postV1DeviceEnrollmentsHistory({
        id,
        requestBody,
    }: {
        /**
         * Device Enrollment Instance identifier
         */
        id: string,
        /**
         * History notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/device-enrollments/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Device enrollment history can not be saved`,
            },
        });
    }

    /**
     * Get all instance sync states for a single Device Enrollment Instance
     *
     * Get all instance sync states for a single instance
     * @returns DeviceEnrollmentInstanceSyncStatus Successful response
     * @throws ApiError
     */
    public static getV1DeviceEnrollmentsSyncs1({
        id,
    }: {
        /**
         * Device Enrollment Instance identifier
         */
        id: string,
    }): CancelablePromise<Array<DeviceEnrollmentInstanceSyncStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/device-enrollments/{id}/syncs',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get the latest sync state for a single Device Enrollment Instance
     *
     * Get the latest sync state for a single instance
     * @returns DeviceEnrollmentInstanceSyncStatus Successful response
     * @throws ApiError
     */
    public static getV1DeviceEnrollmentsSyncsLatest({
        id,
    }: {
        /**
         * Device Enrollment Instance identifier
         */
        id: string,
    }): CancelablePromise<DeviceEnrollmentInstanceSyncStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/device-enrollments/{id}/syncs/latest',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Device Enrollment Instance with the supplied Token
     *
     * Updates a device enrollment instance with the supplied token.
     * @returns DeviceEnrollmentInstance Success
     * @throws ApiError
     */
    public static putV1DeviceEnrollmentsUploadToken({
        id,
        requestBody,
    }: {
        /**
         * Device Enrollment Instance identifier
         */
        id: string,
        /**
         * The downloaded token base 64 encoded from the MDM server to be used to create a new Device Enrollment Instance.
         */
        requestBody: DeviceEnrollmentToken,
    }): CancelablePromise<DeviceEnrollmentInstance> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/device-enrollments/{id}/upload-token',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Device Enrollment Instance with that id does not exist`,
                500: `Something went wrong`,
            },
        });
    }

}
