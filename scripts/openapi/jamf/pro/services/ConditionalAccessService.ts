/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceComplianceInformation } from '../models/DeviceComplianceInformation.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ConditionalAccessService {

    /**
     * Get compliance information for a single computer device
     * Return basic compliance information for the given computer device
     * @returns DeviceComplianceInformation Array of device compliance information records
     * @throws ApiError
     */
    public static getV1ConditionalAccessDeviceComplianceInformationComputer({
        deviceId,
    }: {
        /**
         * ID of the device the query pertains
         */
        deviceId: string,
    }): CancelablePromise<Array<DeviceComplianceInformation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/conditional-access/device-compliance-information/computer/{deviceId}',
            path: {
                'deviceId': deviceId,
            },
        });
    }

    /**
     * Get compliance information for a single mobile device
     * Return basic compliance information for the given mobile device
     * @returns DeviceComplianceInformation Array of device compliance information records
     * @throws ApiError
     */
    public static getV1ConditionalAccessDeviceComplianceInformationMobile({
        deviceId,
    }: {
        /**
         * ID of the device the query pertains
         */
        deviceId: string,
    }): CancelablePromise<Array<DeviceComplianceInformation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/conditional-access/device-compliance-information/mobile/{deviceId}',
            path: {
                'deviceId': deviceId,
            },
        });
    }

}
