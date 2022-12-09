/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimeZone } from '../models/TimeZone.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class TimeZonesPreviewService {

    /**
     * Return information about the currently supported Time Zones
     *
     * Returns information about the currently supported time zones
     *
     * @returns TimeZone Successful response
     * @throws ApiError
     */
    public static getV1TimeZones(): CancelablePromise<Array<TimeZone>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/time-zones',
        });
    }

}
