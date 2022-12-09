/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JamfProVersion } from '../models/JamfProVersion.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfProVersionService {

    /**
     * Return information about the Jamf Pro including the current version
     *
     * Returns information about the Jamf Pro including the current version.
     *
     * @returns JamfProVersion Successful response
     * @throws ApiError
     */
    public static getV1JamfProVersion(): CancelablePromise<JamfProVersion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-pro-version',
        });
    }

}
