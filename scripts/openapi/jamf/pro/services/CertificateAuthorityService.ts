/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CertificateRecord } from '../models/CertificateRecord.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CertificateAuthorityService {

    /**
     * Returns X.509 details of the active Certificate Authority (CA)
     * Returns X.509 details of the active Certificate Authority (CA)
     * @returns CertificateRecord Successful response displays the details of the active Certificate Authority (CA)
     * @throws ApiError
     */
    public static getV1PkiCertificateAuthorityActive(): CancelablePromise<CertificateRecord> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/certificate-authority/active',
        });
    }

    /**
     * Returns X.509 of active Certificate Authority (CA) in DER format
     * Returns X.509 of active Certificate Authority (CA) in DER format
     * @returns binary Successful response returns certificate in DER format
     * @throws ApiError
     */
    public static getV1PkiCertificateAuthorityActiveDer(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/certificate-authority/active/der',
        });
    }

    /**
     * Returns active Certificate Authority (CA) in PEM format
     * Returns active Certificate Authority (CA) in PEM format
     * @returns binary Successful response returns certificate in PEM format.
     * @throws ApiError
     */
    public static getV1PkiCertificateAuthorityActivePem(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/certificate-authority/active/pem',
        });
    }

    /**
     * Returns X.509 details of Certificate Authority (CA) with provided ID
     * Returns X.509 details of Certificate Authority (CA) with provided ID
     * @returns CertificateRecord Successful response displays the details of the Certificate Authority (CA) with provided ID
     * @throws ApiError
     */
    public static getV1PkiCertificateAuthority({
        id,
    }: {
        /**
         * UUID of the Certificate Authority (CA)
         */
        id: string,
    }): CancelablePromise<CertificateRecord> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/certificate-authority/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID parameter`,
                404: `Certificate with that ID does not exist`,
            },
        });
    }

    /**
     * Returns X.509 current Certificate Authority (CA) with provided ID in DER format
     * Returns X.509 current Certificate Authority (CA) with provided ID in DER format
     * @returns binary Successful response returns certificate in DER format
     * @throws ApiError
     */
    public static getV1PkiCertificateAuthorityDer({
        id,
    }: {
        /**
         * UUID of the Certificate Authority (CA)
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/certificate-authority/{id}/der',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID parameter`,
                404: `Certificate with that ID does not exist`,
            },
        });
    }

    /**
     * Returns current Certificate Authority (CA) with provided ID in PEM format
     * Returns current Certificate Authority (CA) with provided ID in PEM format
     * @returns binary Successful response returns certificate in PEM format
     * @throws ApiError
     */
    public static getV1PkiCertificateAuthorityPem({
        id,
    }: {
        /**
         * UUID of the Certificate Authority (CA)
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/certificate-authority/{id}/pem',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID parameter`,
                404: `Certificate with that ID does not exist`,
            },
        });
    }

}
