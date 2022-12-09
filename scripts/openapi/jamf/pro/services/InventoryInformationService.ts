/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryInformation } from '../models/InventoryInformation.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class InventoryInformationService {

    /**
     * Get statistics about managed/unmanaged devices and computers in the inventory
     *
     * Gets statistics about managed/unmanaged devices and computers in the inventory.
     *
     * @returns InventoryInformation Successful response
     * @throws ApiError
     */
    public static getV1InventoryInformation(): CancelablePromise<InventoryInformation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/inventory-information',
        });
    }

}
