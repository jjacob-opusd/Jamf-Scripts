/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Site } from '../models/Site.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SitesPreviewService {

    /**
     * @deprecated
     * Find all sites
     *
     * Found all sites.
     *
     * @returns Site Successful response
     * @throws ApiError
     */
    public static getSettingsSites(): CancelablePromise<Array<Site>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/sites',
        });
    }

}
