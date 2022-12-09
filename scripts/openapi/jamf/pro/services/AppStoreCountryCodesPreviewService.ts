/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryCodes } from '../models/CountryCodes.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AppStoreCountryCodesPreviewService {

    /**
     * Return a list of Countries and the associated Codes
     *
     * Returns a list of countries and the associated codes that can be use for the App Store locale
     *
     * @returns CountryCodes Successful response
     * @throws ApiError
     */
    public static getV1AppStoreCountryCodes(): CancelablePromise<CountryCodes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/app-store-country-codes',
        });
    }

}
