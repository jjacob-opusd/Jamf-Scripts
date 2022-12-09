/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobileDeviceEnrollmentProfileService {

    /**
     * Retrieve the MDM Enrollment Profile
     *
     * Retrieve the MDM Enrollment Profile
     * @returns binary Success
     * @throws ApiError
     */
    public static getV1MobileDeviceEnrollmentProfileDownloadProfile({
        id,
    }: {
        /**
         * MDM Enrollment Profile identifier
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-enrollment-profile/{id}/download-profile',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

}
