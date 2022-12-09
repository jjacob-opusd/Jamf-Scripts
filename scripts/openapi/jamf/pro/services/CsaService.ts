/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CsaToken } from '../models/CsaToken.ts';
import type { JamfNationCredentials } from '../models/JamfNationCredentials.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CsaService {

    /**
     * Get details regarding the CSA token exchange
     *
     * Get details regarding the CSA token exchange
     *
     * @returns CsaToken Success
     * @throws ApiError
     */
    public static getV1CsaToken(): CancelablePromise<CsaToken> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/csa/token',
            errors: {
                404: `CSA token exchange has not been initialized`,
            },
        });
    }

    /**
     * Re-initialize the CSA token exchange with new credentials
     *
     * Re-initialize the CSA token exchange with new credentials
     *
     * @returns CsaToken CSA Token Exchange succesfully updated
     * @throws ApiError
     */
    public static putV1CsaToken({
        requestBody,
    }: {
        /**
         * Jamf Nation username and password
         *
         */
        requestBody?: JamfNationCredentials,
    }): CancelablePromise<CsaToken> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/csa/token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Jamf Nation credentials provided are invalid`,
                404: `CSA token exchange has not been initialized`,
            },
        });
    }

    /**
     * Initialize the CSA token exchange
     *
     * Initializes the CSA token exchange - This will allow Jamf Pro to authenticate with cloud-hosted services
     *
     * @returns CsaToken CSA Token Exchange succesfully initialized
     * @throws ApiError
     */
    public static postV1CsaToken({
        requestBody,
    }: {
        /**
         * Jamf Nation username and password
         *
         */
        requestBody?: JamfNationCredentials,
    }): CancelablePromise<CsaToken> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/csa/token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Jamf Nation credentials provided are invalid`,
                409: `CSA token exchange has already been initialized`,
            },
        });
    }

    /**
     * Delete the CSA token exchange - This will disable Jamf Pro's ability to authenticate with cloud-hosted services
     *
     * Delete the CSA token exchange - This will disable Jamf Pro's ability to authenticate with cloud-hosted services
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1CsaToken(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/csa/token',
            errors: {
                404: `CSA Token Exchange has not been initialized`,
            },
        });
    }

}
