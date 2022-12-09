/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MobileDevice } from '../models/MobileDevice.ts';
import type { MobileDeviceDetails } from '../models/MobileDeviceDetails.ts';
import type { MobileDeviceDetailsGetV2 } from '../models/MobileDeviceDetailsGetV2.ts';
import type { MobileDeviceDetailsV2 } from '../models/MobileDeviceDetailsV2.ts';
import type { MobileDeviceSearchParams } from '../models/MobileDeviceSearchParams.ts';
import type { MobileDeviceSearchResults } from '../models/MobileDeviceSearchResults.ts';
import type { MobileDeviceSearchResultsV2 } from '../models/MobileDeviceSearchResultsV2.ts';
import type { MobileDeviceV2 } from '../models/MobileDeviceV2.ts';
import type { UpdateMobileDevice } from '../models/UpdateMobileDevice.ts';
import type { UpdateMobileDeviceV2 } from '../models/UpdateMobileDeviceV2.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobileDevicesService {

    /**
     * @deprecated
     * Get Mobile Device objects
     *
     * Gets Mobile Device objects.
     *
     * @returns MobileDevice Successful response
     * @throws ApiError
     */
    public static getV1MobileDevices(): CancelablePromise<Array<MobileDevice>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-devices',
        });
    }

    /**
     * @deprecated
     * Get Mobile Device
     *
     * Get MobileDevice
     * @returns MobileDevice Succesful response
     * @throws ApiError
     */
    public static getV1MobileDevices1({
        id,
    }: {
        /**
         * instance id of mobile device record
         */
        id: number,
    }): CancelablePromise<MobileDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-devices/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Update fields on a mobile device that are allowed to be modified by users
     *
     * Updates fields on a mobile device that are allowed to be modified by users.
     * @returns MobileDeviceDetails Succesful response
     * @throws ApiError
     */
    public static patchV1MobileDevices({
        id,
        requestBody,
    }: {
        /**
         * instance id of mobile device record
         */
        id: number,
        requestBody: UpdateMobileDevice,
    }): CancelablePromise<MobileDeviceDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/mobile-devices/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Get Mobile Device
     *
     * Get MobileDevice
     * @returns MobileDeviceDetails Succesful response
     * @throws ApiError
     */
    public static getV1MobileDevicesDetail({
        id,
    }: {
        /**
         * instance id of mobile device record
         */
        id: number,
    }): CancelablePromise<MobileDeviceDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-devices/{id}/detail',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Search Mobile Devices
     *
     * Search Mobile Devices
     * @returns MobileDeviceSearchResults Found buildings matching search params.
     * @throws ApiError
     */
    public static postV1SearchMobileDevices({
        requestBody,
    }: {
        requestBody?: MobileDeviceSearchParams,
    }): CancelablePromise<MobileDeviceSearchResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/search-mobile-devices',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Mobile Device objects
     *
     * Gets Mobile Device objects.
     *
     * @returns MobileDeviceSearchResultsV2 Successful response
     * @throws ApiError
     */
    public static getV2MobileDevices({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is id:asc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
    }): CancelablePromise<MobileDeviceSearchResultsV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-devices',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Get Mobile Device
     *
     * Get MobileDevice
     * @returns MobileDeviceV2 Succesful response
     * @throws ApiError
     */
    public static getV2MobileDevices1({
        id,
    }: {
        /**
         * instance id of mobile device record
         */
        id: string,
    }): CancelablePromise<MobileDeviceV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-devices/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified mobile device object does not exist.`,
            },
        });
    }

    /**
     * Update fields on a mobile device that are allowed to be modified by users
     *
     * Updates fields on a mobile device that are allowed to be modified by users.
     * @returns MobileDeviceDetailsV2 Succesful response
     * @throws ApiError
     */
    public static patchV2MobileDevices({
        id,
        requestBody,
    }: {
        /**
         * instance id of mobile device record
         */
        id: string,
        requestBody: UpdateMobileDeviceV2,
    }): CancelablePromise<MobileDeviceDetailsV2> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/mobile-devices/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Account not allowed to modify device`,
                404: `Specified mobile device object does not exist.`,
            },
        });
    }

    /**
     * Get Mobile Device
     *
     * Get MobileDevice
     * @returns MobileDeviceDetailsGetV2 Succesful response
     * @throws ApiError
     */
    public static getV2MobileDevicesDetail({
        id,
    }: {
        /**
         * instance id of mobile device record
         */
        id: string,
    }): CancelablePromise<MobileDeviceDetailsGetV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mobile-devices/{id}/detail',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified mobile device object does not exist.`,
            },
        });
    }

}
