/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CacheSettings } from '../models/CacheSettings.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CacheSettingsService {

    /**
     * Get Cache Settings
     *
     * gets cache settings
     * @returns CacheSettings cache settings
     * @throws ApiError
     */
    public static getV1CacheSettings(): CancelablePromise<CacheSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/cache-settings',
        });
    }

    /**
     * Update Cache Settings
     *
     * updates cache settings
     *
     * @returns CacheSettings cache has been updated
     * @throws ApiError
     */
    public static putV1CacheSettings({
        requestBody,
    }: {
        requestBody: CacheSettings,
    }): CancelablePromise<CacheSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/cache-settings',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `The following code is returned by this call:
                HOSTED_ENVIRONMENT - PUT command is not available in hosted environments.
                `,
            },
        });
    }

}
