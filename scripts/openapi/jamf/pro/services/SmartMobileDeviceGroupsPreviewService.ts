/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecalculationResults } from '../models/RecalculationResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SmartMobileDeviceGroupsPreviewService {

    /**
     * Recalculate all smart groups for the given device id and then return count of smart groups that device fall into
     *
     * Recalculates all smart groups for the given device id and then
     * returns the count of smart groups the device falls into
     *
     * @returns RecalculationResults Successful response
     * @throws ApiError
     */
    public static postV1MobileDevicesRecalculateSmartGroups({
        id,
    }: {
        /**
         * id of mobile device
         */
        id: number,
    }): CancelablePromise<RecalculationResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/mobile-devices/{id}/recalculate-smart-groups',
            path: {
                'id': id,
            },
            errors: {
                400: `smart group not found`,
            },
        });
    }

    /**
     * Recalculate a smart group for the given id then return the ids for the devices in the smart group
     *
     * recalculates a smart group for the given id and then
     * returns the ids for the devices in the smart group
     *
     * @returns RecalculationResults Successful response
     * @throws ApiError
     */
    public static postV1SmartMobileDeviceGroupsRecalculate({
        id,
    }: {
        /**
         * instance id of smart group
         */
        id: number,
    }): CancelablePromise<RecalculationResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/smart-mobile-device-groups/{id}/recalculate',
            path: {
                'id': id,
            },
            errors: {
                400: `smart group not found`,
            },
        });
    }

}
