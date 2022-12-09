/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SsoKeystore } from '../models/SsoKeystore.ts';
import type { SsoKeystoreCertParseResponse } from '../models/SsoKeystoreCertParseResponse.ts';
import type { SsoKeystoreParse } from '../models/SsoKeystoreParse.ts';
import type { SsoKeystoreWithDetails } from '../models/SsoKeystoreWithDetails.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SsoCertificatePreviewService {

    /**
     * Retrieve the certificate currently configured for use with SSO
     *
     * Retrieves the certificate currently configured for use with SSO.
     * @returns SsoKeystoreWithDetails Successful operation.
     * @throws ApiError
     */
    public static getV1SsoCert(): CancelablePromise<SsoKeystoreWithDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/sso/cert',
        });
    }

    /**
     * Update the certificate used by Jamf Pro to sign SSO requests to the identify provider
     *
     * Update the certificate used by Jamf Pro to sign SSO requests to the identify provider.
     * @returns SsoKeystoreWithDetails Successfully changed the keystore.
     * @throws ApiError
     */
    public static putV1SsoCert({
        requestBody,
    }: {
        requestBody: SsoKeystore,
    }): CancelablePromise<SsoKeystoreWithDetails> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/sso/cert',
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
     * @returns SsoKeystoreWithDetails Newly generated will be set and returned.
     * @throws ApiError
     */
    public static postV1SsoCert(): CancelablePromise<SsoKeystoreWithDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/sso/cert',
        });
    }

    /**
     * Delete the currently configured certificate used by SSO
     *
     * Deletes the currently configured certificate used by SSO.
     * @returns void
     * @throws ApiError
     */
    public static deleteV1SsoCert(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/sso/cert',
        });
    }

    /**
     * Download the certificate currently configured for use with Jamf Pro's SSO configuration
     *
     * Downloads the certificate currently configured for use with Jamf Pro's SSO configuration
     * @returns binary Request successful
     * @throws ApiError
     */
    public static getV1SsoCertDownload(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/sso/cert/download',
        });
    }

    /**
     * Parse the certificate to get details about certificate type and keys needed to upload certificate file
     *
     * Parse the certificate to get details about certificate type and keys needed to upload certificate file.
     * @returns SsoKeystoreCertParseResponse Successfully parsed the certificate.
     * @throws ApiError
     */
    public static postV1SsoCertParse({
        requestBody,
    }: {
        requestBody: SsoKeystoreParse,
    }): CancelablePromise<SsoKeystoreCertParseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/sso/cert/parse',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more parameters were invalid.`,
            },
        });
    }

}
