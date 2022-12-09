/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Locale } from '../models/Locale.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class LocalesPreviewService {

    /**
     * Return locales that can be used in other features
     *
     * Returns locales that can be used in other features.
     *
     * @returns Locale Successful response
     * @throws ApiError
     */
    public static getV1Locales(): CancelablePromise<Array<Locale>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/locales',
        });
    }

}
