/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MobileDeviceExtensionAttributeResults } from '../models/MobileDeviceExtensionAttributeResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobileDeviceExtensionAttributesPreviewService {

    /**
     * Get Mobile Device Extension Attribute values placed in select paramter
     *
     * Gets Mobile Device Extension Attribute values placed in select parameter.
     * @returns MobileDeviceExtensionAttributeResults Successful response - Extension Attributes retrieved
     * @throws ApiError
     */
    public static getDevicesExtensionAttributes({
        select = 'name',
    }: {
        /**
         * Acceptable values currently include:
         * * name
         *
         */
        select?: string,
    }): CancelablePromise<MobileDeviceExtensionAttributeResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/devices/extensionAttributes',
            query: {
                'select': select,
            },
        });
    }

}
