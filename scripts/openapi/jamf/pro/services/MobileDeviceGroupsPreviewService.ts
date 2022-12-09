/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MobileDeviceGroup } from '../models/MobileDeviceGroup.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobileDeviceGroupsPreviewService {

    /**
     * Return the list of all Mobile Device Groups
     *
     * Returns the list of all mobile device groups.
     *
     * @returns MobileDeviceGroup Success
     * @throws ApiError
     */
    public static getV1MobileDeviceGroups(): CancelablePromise<Array<MobileDeviceGroup>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mobile-device-groups',
        });
    }

}
