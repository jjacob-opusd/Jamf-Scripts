/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloudLdapConnectionPoolStatistics } from '../models/CloudLdapConnectionPoolStatistics.ts';
import type { CloudLdapConnectionStatus } from '../models/CloudLdapConnectionStatus.ts';
import type { CloudLdapKeystore } from '../models/CloudLdapKeystore.ts';
import type { CloudLdapKeystoreFile } from '../models/CloudLdapKeystoreFile.ts';
import type { CloudLdapMappingsRequest } from '../models/CloudLdapMappingsRequest.ts';
import type { CloudLdapMappingsResponse } from '../models/CloudLdapMappingsResponse.ts';
import type { CloudLdapServerResponse } from '../models/CloudLdapServerResponse.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { LdapConfigurationRequest } from '../models/LdapConfigurationRequest.ts';
import type { LdapConfigurationResponse } from '../models/LdapConfigurationResponse.ts';
import type { LdapConfigurationUpdate } from '../models/LdapConfigurationUpdate.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CloudLdapService {

    /**
     * Validate keystore for Cloud Identity Provider secure connection
     * Validate keystore for Cloud Identity Provider secure connection
     * @returns CloudLdapKeystore Keystore verified.
     * @throws ApiError
     */
    public static postV1LdapKeystoreVerify({
        requestBody,
    }: {
        requestBody: CloudLdapKeystoreFile,
    }): CancelablePromise<CloudLdapKeystore> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/ldap-keystore/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more invalid parameters`,
            },
        });
    }

    /**
     * Create Cloud Identity Provider configuration
     * Create new Cloud Identity Provider configuration with unique display name. If mappings not provided, then defaults will be generated instead.
     * @returns HrefResponse Cloud Identity Provider configuration created
     * @throws ApiError
     */
    public static postV2CloudLdaps({
        requestBody,
    }: {
        /**
         * Cloud Identity Provider configuration to create
         */
        requestBody: LdapConfigurationRequest,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/cloud-ldaps',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Cloud Identity Provider configuration cannot be saved.`,
            },
        });
    }

    /**
     * Get default mappings
     * Get default mappings for Cloud Identity Provider Provider.
     * @returns CloudLdapMappingsResponse Default mappings returned.
     * @throws ApiError
     */
    public static getV2CloudLdapsDefaultsMappings({
        provider,
    }: {
        /**
         * Cloud Identity Provider name
         */
        provider: string,
    }): CancelablePromise<CloudLdapMappingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cloud-ldaps/defaults/{provider}/mappings',
            path: {
                'provider': provider,
            },
            errors: {
                400: `Files cannot be loaded.`,
                404: `The provider name in the URL is invalid or not supported.`,
            },
        });
    }

    /**
     * Get default server configuration
     * Get default server configuration for Cloud Identity Provider Identity Provider.
     * @returns CloudLdapServerResponse Default server configuration returned.
     * @throws ApiError
     */
    public static getV2CloudLdapsDefaultsServerConfiguration({
        provider,
    }: {
        /**
         * Cloud Identity Provider name
         */
        provider: string,
    }): CancelablePromise<CloudLdapServerResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cloud-ldaps/defaults/{provider}/server-configuration',
            path: {
                'provider': provider,
            },
            errors: {
                400: `Default server configuration cannot be loaded.`,
                404: `The provider name in the URL is invalid or not supported.`,
            },
        });
    }

    /**
     * Get Cloud Identity Provider configuration with given id.
     * Get Cloud Identity Provider configuration with given id.
     * @returns LdapConfigurationResponse Cloud Identity Provider configuration returned.
     * @throws ApiError
     */
    public static getV2CloudLdaps({
        id,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
    }): CancelablePromise<LdapConfigurationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cloud-ldaps/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Id can only be a number.`,
                404: `Specified Cloud Identity Provider configuration does not exist.`,
            },
        });
    }

    /**
     * Update Cloud Identity Provider configuration
     * Update Cloud Identity Provider configuration. Cannot be used for partial updates, all content body must be sent.
     * @returns LdapConfigurationResponse Cloud Identity Provider configuration updated
     * @throws ApiError
     */
    public static putV2CloudLdaps({
        id,
        requestBody,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
        /**
         * Cloud Identity Provider configuration to update
         */
        requestBody: LdapConfigurationUpdate,
    }): CancelablePromise<LdapConfigurationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/cloud-ldaps/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more parameters were invalid.`,
                404: `Cloud Identity Provider configuration does not exist.`,
                409: `The request URL configuration id value does not match the id value in the request body.`,
            },
        });
    }

    /**
     * Delete Cloud Identity Provider configuration.
     * Delete Cloud Identity Provider configuration.
     * @returns void
     * @throws ApiError
     */
    public static deleteV2CloudLdaps({
        id,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/cloud-ldaps/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Id can only be a number.`,
                404: `Cloud Identity Provider configuration does not exist.`,
            },
        });
    }

    /**
     * Get bind connection pool statistics
     * Get all search connection pool for chosen Cloud Identity Provider.
     * numConnectionsClosedDefunct - The number of connections that have been closed as defunct.
     * numConnectionsClosedExpired - The number of connections that have been closed because they were expired.
     * numConnectionsClosedUnneeded - The number of connections that have been closed because they were no longer needed.
     * numFailedCheckouts - The number of failed attempts to check out a connection from the pool.
     * numFailedConnectionAttempts - The number of failed attempts to create a connection for use in the pool.
     * numReleasedValid - The number of valid connections released back to the pool.
     * numSuccessfulCheckouts - The number of successful attempts to check out a connection from the pool.
     * numSuccessfulCheckoutsNewConnection - The number of successful checkout attempts that had to create a new connection because none were available.
     * numSuccessfulConnectionAttempts - The number successful attempts to create a connection for use in the pool.
     * maximumAvailableConnections - The maximum number of connections that may be available in the pool at any time.
     * numSuccessfulCheckoutsWithoutWait - The number of successful checkout attempts that were able to take an existing connection without waiting.
     * numSuccessfulCheckoutsAfterWait - The number of successful checkout attempts that retrieved a connection from the pool after waiting for it to become available.
     * numAvailableConnections - The number of connections currently available for use in the pool.
     *
     * @returns CloudLdapConnectionPoolStatistics Cloud Identity Provider bind connection pool statistics returned.
     * @throws ApiError
     */
    public static getV2CloudLdapsConnectionBind({
        id,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
    }): CancelablePromise<CloudLdapConnectionPoolStatistics> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cloud-ldaps/{id}/connection/bind',
            path: {
                'id': id,
            },
            errors: {
                400: `Bind connection pool statistics data is not available.`,
                404: `Cloud Identity Provider bind connection pool statistics does not exist.`,
            },
        });
    }

    /**
     * Get search connection pool statistics
     * Get all search connection pool for chosen Cloud Identity Provider.
     * numConnectionsClosedDefunct - The number of connections that have been closed as defunct.
     * numConnectionsClosedExpired - The number of connections that have been closed because they were expired.
     * numConnectionsClosedUnneeded - The number of connections that have been closed because they were no longer needed.
     * numFailedCheckouts - The number of failed attempts to check out a connection from the pool.
     * numFailedConnectionAttempts - The number of failed attempts to create a connection for use in the pool.
     * numReleasedValid - The number of valid connections released back to the pool.
     * numSuccessfulCheckouts - The number of successful attempts to check out a connection from the pool.
     * numSuccessfulCheckoutsNewConnection - The number of successful checkout attempts that had to create a new connection because none were available.
     * numSuccessfulConnectionAttempts - The number successful attempts to create a connection for use in the pool.
     * maximumAvailableConnections - The maximum number of connections that may be available in the pool at any time.
     * numSuccessfulCheckoutsWithoutWait - The number of successful checkout attempts that were able to take an existing connection without waiting.
     * numSuccessfulCheckoutsAfterWait - The number of successful checkout attempts that retrieved a connection from the pool after waiting for it to become available.
     * numAvailableConnections - The number of connections currently available for use in the pool.
     *
     * @returns CloudLdapConnectionPoolStatistics Cloud Identity Provider search connection pool statistics returned.
     * @throws ApiError
     */
    public static getV2CloudLdapsConnectionSearch({
        id,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
    }): CancelablePromise<CloudLdapConnectionPoolStatistics> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cloud-ldaps/{id}/connection/search',
            path: {
                'id': id,
            },
            errors: {
                400: `Search connection pool statistics data is not available.`,
                404: `Cloud Identity Provider search connection pool statistics does not exist.`,
            },
        });
    }

    /**
     * Tests the communication with the specified cloud connection
     *
     * Tests the communication with the specified cloud connection
     *
     * @returns CloudLdapConnectionStatus Successfully connected to the specified cloud connection
     * @throws ApiError
     */
    public static getV2CloudLdapsConnectionStatus({
        id,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
    }): CancelablePromise<CloudLdapConnectionStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cloud-ldaps/{id}/connection/status',
            path: {
                'id': id,
            },
            errors: {
                400: `One or more parameters were invalid.`,
                404: `Cloud Identity Provider does not exist.`,
            },
        });
    }

    /**
     * Get mappings configurations for Cloud Identity Providers server configuration.
     * Get all mappings configurations for Cloud Identity Providers server configuration.
     * @returns CloudLdapMappingsResponse Cloud Identity Provider mappings configuration returned.
     * @throws ApiError
     */
    public static getV2CloudLdapsMappings({
        id,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
    }): CancelablePromise<CloudLdapMappingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cloud-ldaps/{id}/mappings',
            path: {
                'id': id,
            },
            errors: {
                400: `Id can only be a number.`,
                404: `Specified mappings settings for Cloud Identity Provider configuration do not exist.`,
            },
        });
    }

    /**
     * Update Cloud Identity Provider mappings configuration.
     * Update Cloud Identity Provider mappings configuration. Cannot be used for partial updates, all content body must be sent.
     * @returns CloudLdapMappingsResponse Cloud Identity Provider mappings configuration updated.
     * @throws ApiError
     */
    public static putV2CloudLdapsMappings({
        id,
        requestBody,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
        /**
         * Cloud Identity Provider mappings to update.
         */
        requestBody: CloudLdapMappingsRequest,
    }): CancelablePromise<CloudLdapMappingsResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/cloud-ldaps/{id}/mappings',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more parameters were invalid.`,
                404: `Specified Cloud Identity Provider configuration does not exist.`,
                409: `Cloud Identity Provider id from request path do not match id in request body.`,
            },
        });
    }

}
