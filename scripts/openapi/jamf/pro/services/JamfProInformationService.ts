/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JamfProInformation } from '../models/JamfProInformation.ts';
import type { JamfProInformationV2 } from '../models/JamfProInformationV2.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfProInformationService {

    /**
     * @deprecated
     * Get basic information about the Jamf Pro Server
     *
     * Deprecated version of the endpoint.
     *
     * @returns JamfProInformation Successful response
     * @throws ApiError
     */
    public static getV1JamfProInformation(): CancelablePromise<JamfProInformation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-pro-information',
        });
    }

    /**
     * Get basic information about the Jamf Pro Server
     *
     * Get basic information about the Jamf Pro Server
     *
     * @returns JamfProInformationV2 Successful response
     * @throws ApiError
     */
    public static getV2JamfProInformation(): CancelablePromise<JamfProInformationV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/jamf-pro-information',
        });
    }

}
