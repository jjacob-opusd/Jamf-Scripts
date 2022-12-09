/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceEnrollmentDeviceSearchResults } from '../models/DeviceEnrollmentDeviceSearchResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class DeviceEnrollmentsDevicesService {

    /**
     * Retrieve a list of Devices assigned to the supplied id
     *
     * Retrieves a list of devices assigned to the supplied id
     * @returns DeviceEnrollmentDeviceSearchResults Success
     * @throws ApiError
     */
    public static getV1DeviceEnrollmentsDevices({
        id,
    }: {
        /**
         * Device Enrollment Instance identifier
         */
        id: string,
    }): CancelablePromise<DeviceEnrollmentDeviceSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/device-enrollments/{id}/devices',
            path: {
                'id': id,
            },
        });
    }

}
