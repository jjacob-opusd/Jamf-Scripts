/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V1Site } from '../models/V1Site.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SitesService {

    /**
     * Find all sites
     *
     * Find all sites.
     *
     * @returns V1Site Successful response
     * @throws ApiError
     */
    public static getV1Sites(): CancelablePromise<Array<V1Site>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/sites',
        });
    }

}
