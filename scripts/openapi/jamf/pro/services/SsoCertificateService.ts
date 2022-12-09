/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SsoKeystore } from '../models/SsoKeystore.ts';
import type { SsoKeystoreCertParseResponse } from '../models/SsoKeystoreCertParseResponse.ts';
import type { SsoKeystoreParse } from '../models/SsoKeystoreParse.ts';
import type { SsoKeystoreResponseWithDetails } from '../models/SsoKeystoreResponseWithDetails.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SsoCertificateService {

    /**
     * Retrieve the certificate currently configured for use with SSO
     *
     * Retrieves the certificate currently configured for use with SSO.
     * @returns SsoKeystoreResponseWithDetails Successful operation.
     * @throws ApiError
     */
    public static getV2SsoCert(): CancelablePromise<SsoKeystoreResponseWithDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/sso/cert',
        });
    }

    /**
     * Update the certificate used by Jamf Pro to sign SSO requests to the identify provider
     *
     * Update the certificate used by Jamf Pro to sign SSO requests to the identify provider.
     * @returns SsoKeystoreResponseWithDetails Successfully changed the keystore.
     * @throws ApiError
     */
    public static putV2SsoCert({
        requestBody,
    }: {
        requestBody: SsoKeystore,
    }): CancelablePromise<SsoKeystoreResponseWithDetails> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/sso/cert',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more parameters were invalid.`,
            },
        });
    }

    /**
     * Jamf Pro will generate a new certificate and use it to sign SSO
     *
     * Jamf Pro will generate a new certificate and use it to sign SSO requests to the identity provider.
     * @returns SsoKeystoreResponseWithDetails Newly generated will be set and returned.
     * @throws ApiError
     */
    public static postV2SsoCert(): CancelablePromise<SsoKeystoreResponseWithDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/sso/cert',
        });
    }

    /**
     * Delete the currently configured certificate used by SSO
     *
     * Deletes the currently configured certificate used by SSO.
     * @returns void
     * @throws ApiError
     */
    public static deleteV2SsoCert(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/sso/cert',
        });
    }

    /**
     * Download the certificate currently configured for use with Jamf Pro's SSO configuration
     *
     * Downloads the certificate currently configured for use with Jamf Pro's SSO configuration
     * @returns binary Request successful
     * @throws ApiError
     */
    public static getV2SsoCertDownload(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/sso/cert/download',
        });
    }

    /**
     * Parse the certificate to get details about certificate type and keys needed to upload certificate file
     *
     * Parse the certificate to get details about certificate type and keys needed to upload certificate file.
     * @returns SsoKeystoreCertParseResponse Successfully parsed the certificate.
     * @throws ApiError
     */
    public static postV2SsoCertParse({
        requestBody,
    }: {
        requestBody: SsoKeystoreParse,
    }): CancelablePromise<SsoKeystoreCertParseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/sso/cert/parse',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more parameters were invalid.`,
            },
        });
    }

}
