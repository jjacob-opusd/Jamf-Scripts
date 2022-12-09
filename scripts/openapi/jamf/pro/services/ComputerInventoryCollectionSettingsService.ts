/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComputerInventoryCollectionSettings } from '../models/ComputerInventoryCollectionSettings.ts';
import type { CreatePath } from '../models/CreatePath.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerInventoryCollectionSettingsService {

    /**
     * Returns computer inventory settings
     * Returns computer inventory settings
     * @returns ComputerInventoryCollectionSettings Successful response returns the computer inventory settings
     * @throws ApiError
     */
    public static getV1ComputerInventoryCollectionSettings(): CancelablePromise<ComputerInventoryCollectionSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computer-inventory-collection-settings',
        });
    }

    /**
     * Update computer inventory settings
     * Update computer inventory settings
     * @returns ComputerInventoryCollectionSettings Computer inventory settings updated
     * @throws ApiError
     */
    public static patchV1ComputerInventoryCollectionSettings({
        requestBody,
    }: {
        /**
         * Computer inventory settings to update
         */
        requestBody: ComputerInventoryCollectionSettings,
    }): CancelablePromise<ComputerInventoryCollectionSettings> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/computer-inventory-collection-settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create Computer Inventory Collection Settings Custom Path
     * Creates a custom search path to use when collecting applications, fonts, and plug-ins.
     * @returns HrefResponse Custom path created
     * @throws ApiError
     */
    public static postV1ComputerInventoryCollectionSettingsCustomPath({
        requestBody,
    }: {
        /**
         * Computer inventory settings to update
         */
        requestBody: CreatePath,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/computer-inventory-collection-settings/custom-path',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data response`,
            },
        });
    }

    /**
     * Delete Custom Path from Computer Inventory Collection Settings
     * Delete Custom Path from Computer Inventory Collection Settings
     * @returns void
     * @throws ApiError
     */
    public static deleteV1ComputerInventoryCollectionSettingsCustomPath({
        id,
    }: {
        /**
         * id of Custom Path
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/computer-inventory-collection-settings/custom-path/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Invalid data response`,
            },
        });
    }

}
