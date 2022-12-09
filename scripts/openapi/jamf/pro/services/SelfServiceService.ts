/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SelfServiceSettings } from '../models/SelfServiceSettings.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SelfServiceService {

    /**
     * Get an object representation of Self Service settings
     *
     * gets an object representation of Self Service settings
     *
     * @returns SelfServiceSettings successful GET
     *
     * @throws ApiError
     */
    public static getV1SelfServiceSettings(): CancelablePromise<SelfServiceSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/self-service/settings',
        });
    }

    /**
     * Put an object representation of Self Service settings
     *
     * puts an object representation of Self Service settings
     *
     * @returns SelfServiceSettings successful PUT
     *
     * @throws ApiError
     */
    public static putV1SelfServiceSettings({
        requestBody,
    }: {
        /**
         * object that contains all editable global fields to alter Self Service settings
         *
         */
        requestBody: SelfServiceSettings,
    }): CancelablePromise<SelfServiceSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/self-service/settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
