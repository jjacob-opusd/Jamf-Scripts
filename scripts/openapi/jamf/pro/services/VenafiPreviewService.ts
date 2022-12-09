/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { VenafiCaRecord } from '../models/VenafiCaRecord.ts';
import type { VenafiPkiPayloadRecordSearchResults } from '../models/VenafiPkiPayloadRecordSearchResults.ts';
import type { VenafiServiceStatus } from '../models/VenafiServiceStatus.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class VenafiPreviewService {

    /**
     * Create a PKI configuration in Jamf Pro for Venafi
     *
     * Creates a Venafi PKI configuration in Jamf Pro, which can be used to issue certificates
     *
     * @returns HrefResponse Successful response creates a Venafi PKI configuration
     * @throws ApiError
     */
    public static postV1PkiVenafi({
        requestBody,
    }: {
        requestBody: VenafiCaRecord,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/pki/venafi',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid attributes for Certificate Authority configuration`,
            },
        });
    }

    /**
     * Retrieve a Venafi PKI configuration from Jamf Pro
     *
     * Retrieve a Venafi PKI configuration from Jamf Pro
     *
     * @returns VenafiCaRecord Successful response returns a Venafi PKI configuration
     * @throws ApiError
     */
    public static getV1PkiVenafi({
        id,
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
    }): CancelablePromise<VenafiCaRecord> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/venafi/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Certificate Authority not found for Id`,
            },
        });
    }

    /**
     * Delete a Venafi PKI configuration from Jamf Pro
     *
     * Delete a Venafi PKI configuration from Jamf Pro
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1PkiVenafi({
        id,
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/pki/venafi/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Certificate Authority not found for Id`,
                409: `Conflict deleting target, Venafi PKI configuration still in use on Configuration Profile`,
            },
        });
    }

    /**
     * Update a Venafi PKI configuration in Jamf Pro
     *
     * Update a Venafi PKI configuration in Jamf Pro
     *
     * @returns VenafiCaRecord Successful response returns a Venafi PKI configuration
     * @throws ApiError
     */
    public static patchV1PkiVenafi({
        id,
        requestBody,
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
        requestBody: VenafiCaRecord,
    }): CancelablePromise<VenafiCaRecord> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/pki/venafi/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid attributes for Certificate Authority configuration`,
                404: `Certificate Authority not found for Id`,
            },
        });
    }

    /**
     * Tests the communication between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * Tests the communication between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * @returns VenafiServiceStatus Successfully connected to Venafi
     * @throws ApiError
     */
    public static getV1PkiVenafiConnectionStatus({
        id,
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
    }): CancelablePromise<VenafiServiceStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/venafi/{id}/connection-status',
            path: {
                'id': id,
            },
            errors: {
                503: `Why we failed to connect`,
            },
        });
    }

    /**
     * Get configuration profile data using specified Venafi CA object
     *
     * Get configuration profile data using specified Venafi CA object
     *
     * @returns VenafiPkiPayloadRecordSearchResults Successfully returns a list of configuration profile data connected to the Venafi CA
     * @throws ApiError
     */
    public static getV1PkiVenafiDependentProfiles({
        id,
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
    }): CancelablePromise<VenafiPkiPayloadRecordSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/venafi/{id}/dependent-profiles',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get specified Venafi CA history object
     *
     * Get specified Venafi CA history object
     *
     * @returns HistorySearchResults Details of Venafi CA history was found
     * @throws ApiError
     */
    public static getV1PkiVenafiHistory({
        id,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is date:desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: username, date, note, details. This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/venafi/{id}/history',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
            errors: {
                404: `Specified Venafi CA object does not exist`,
            },
        });
    }

    /**
     * Add specified Venafi CA Object Note
     *
     * Adds specified Venafi CA Object Note
     *
     * @returns HrefResponse Notes of Venafi CA history were added
     * @throws ApiError
     */
    public static postV1PkiVenafiHistory({
        id,
        requestBody,
    }: {
        /**
         * instance id of department history record
         */
        id: string,
        /**
         * venafi ca history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/pki/venafi/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Specified Venafi CA object does not exist`,
                503: `Venafi CA history can not be saved`,
            },
        });
    }

    /**
     * Downloads a certificate used to secure communication between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * Downloads a certificate for an existing Venafi configuration that can be used to secure communication between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * @returns binary Successful response downloads the certificate
     * @throws ApiError
     */
    public static getV1PkiVenafiJamfPublicKey({
        id,
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/venafi/{id}/jamf-public-key',
            path: {
                'id': id,
            },
            errors: {
                400: `Keystore not found for Certificate Authority`,
                404: `Certificate not found for Id`,
            },
        });
    }

    /**
     * Regenerates a certificate used to secure communication between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * Regenerates a certificate for an existing Venafi configuration that can be used to secure communication between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * @returns void
     * @throws ApiError
     */
    public static postV1PkiVenafiJamfPublicKeyRegenerate({
        id,
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/pki/venafi/{id}/jamf-public-key/regenerate',
            path: {
                'id': id,
            },
            errors: {
                404: `Certificate Authority not found for Id`,
            },
        });
    }

    /**
     * Downloads the PKI Proxy Server public key to secure communication between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * Downloads the uploaded PKI Proxy Server public key to do basic TLS certificate validation between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * @returns binary Successful response downloads the certificate
     * @throws ApiError
     */
    public static getV1PkiVenafiProxyTrustStore({
        id,
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/pki/venafi/{id}/proxy-trust-store',
            path: {
                'id': id,
            },
            errors: {
                400: `Keystore not found for Certificate Authority`,
                404: `Certificate not found for Certificate Authority`,
            },
        });
    }

    /**
     * Uploads the PKI Proxy Server public key to secure communication between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * Uploads the PKI Proxy Server public key to do basic TLS certificate validation between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * @returns void
     * @throws ApiError
     */
    public static postV1PkiVenafiProxyTrustStore({
        id,
        requestBody,
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
        requestBody: Blob,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/pki/venafi/{id}/proxy-trust-store',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/pem-certificate-chain',
            errors: {
                400: `Keystore not found for Certificate Authority`,
                404: `Certificate not found for Certificate Authority`,
            },
        });
    }

    /**
     * Removes the PKI Proxy Server public key used to secure communication between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * Removes the uploaded PKI Proxy Server public key to do basic TLS certificate validation between Jamf Pro and a Jamf Pro PKI Proxy Server
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1PkiVenafiProxyTrustStore({
        id,
    }: {
        /**
         * ID of the Venafi configuration
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/pki/venafi/{id}/proxy-trust-store',
            path: {
                'id': id,
            },
            errors: {
                404: `Certificate Authority not found for Id`,
            },
        });
    }

}
