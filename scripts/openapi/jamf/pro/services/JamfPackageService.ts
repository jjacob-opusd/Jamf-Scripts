/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JamfApplicationResponse } from '../models/JamfApplicationResponse.ts';
import type { JamfPackageResponse } from '../models/JamfPackageResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfPackageService {

    /**
     * Get the packages for a given Jamf application
     *
     * Get the packages for a given Jamf application.
     * @returns JamfPackageResponse List of packages for the given application.
     * @throws ApiError
     */
    public static getV1JamfPackage({
        application,
    }: {
        /**
         * The Jamf Application key. The only supported values are protect and connect.
         */
        application: string,
    }): CancelablePromise<Array<JamfPackageResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-package',
            query: {
                'application': application,
            },
            errors: {
                400: `Invalid Content. It is possible that there is no application with the given application id. Or Cloud Services Connection has not been established.`,
            },
        });
    }

    /**
     * Get the packages for a given Jamf application
     *
     * Get the packages for a given Jamf application.
     * @returns JamfApplicationResponse Properties for the given application.
     * @throws ApiError
     */
    public static getV2JamfPackage({
        application,
    }: {
        /**
         * The Jamf Application key. The only supported values are protect and connect.
         */
        application: string,
    }): CancelablePromise<JamfApplicationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/jamf-package',
            query: {
                'application': application,
            },
            errors: {
                400: `Invalid Content. It is possible that there is no application with the given application id. Or Cloud Services Connection has not been established.`,
            },
        });
    }

}
