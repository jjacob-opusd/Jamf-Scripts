/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabasePassword } from '../models/DatabasePassword.ts';
import type { Initialize } from '../models/Initialize.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfProInitializationPreviewService {

    /**
     * @deprecated
     * Set up fresh installed Jamf Pro Server
     *
     * Set up fresh installed Jamf Pro Server
     *
     * @returns void
     * @throws ApiError
     */
    public static postSystemInitialize({
        requestBody,
    }: {
        requestBody: Initialize,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/system/initialize',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The following are codes returned by this call:
                INVALID_ACTIVATION_CODE - activation code provided is not valid or is expired
                INVALID_STATE - The system is in an invalid state to be initialized.
                FIELD_REQUIRED - A required field was not provided.  The field name will be provided on the response.
                `,
            },
        });
    }

    /**
     * @deprecated
     * Provide Database Password during startup
     *
     * Provide database password during startup. Endpoint is accessible when database password was not configured and Jamf Pro server has not been initialized yet.
     * @returns void
     * @throws ApiError
     */
    public static postSystemInitializeDatabaseConnection({
        requestBody,
    }: {
        requestBody: DatabasePassword,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/system/initialize-database-connection',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Incorrect database password.`,
                429: `Limit of requests per second was exceeded`,
            },
        });
    }

}
