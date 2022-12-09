/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailableUpdates } from '../models/AvailableUpdates.ts';
import type { MacOsManagedSoftwareUpdate } from '../models/MacOsManagedSoftwareUpdate.ts';
import type { MacOsManagedSoftwareUpdateResponse } from '../models/MacOsManagedSoftwareUpdateResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MacosManagedSoftwareUpdatesService {

    /**
     * Retrieve available MacOs Managed Software Updates
     * Retrieves available MacOs Managed Software Updates
     * @returns AvailableUpdates Success
     * @throws ApiError
     */
    public static getV1MacosManagedSoftwareUpdatesAvailableUpdates(): CancelablePromise<AvailableUpdates> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/macos-managed-software-updates/available-updates',
        });
    }

    /**
     * Send MacOs Managed Software Updates
     * Sends MacOs Managed Software Updates
     * @returns MacOsManagedSoftwareUpdateResponse Success
     * @throws ApiError
     */
    public static postV1MacosManagedSoftwareUpdatesSendUpdates({
        requestBody,
    }: {
        /**
         * MacOs Managed Software Update to send
         */
        requestBody: MacOsManagedSoftwareUpdate,
    }): CancelablePromise<MacOsManagedSoftwareUpdateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/macos-managed-software-updates/send-updates',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
