/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AzureAdMigrationReportProcessStatus } from '../models/AzureAdMigrationReportProcessStatus.ts';
import type { AzureAdMigrationReportRequest } from '../models/AzureAdMigrationReportRequest.ts';
import type { AzureConfiguration } from '../models/AzureConfiguration.ts';
import type { AzureConfigurationRequest } from '../models/AzureConfigurationRequest.ts';
import type { AzureConfigurationUpdate } from '../models/AzureConfigurationUpdate.ts';
import type { AzureMappings } from '../models/AzureMappings.ts';
import type { AzureServerConfiguration } from '../models/AzureServerConfiguration.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CloudAzureService {

    /**
     * Start Azure Ad Migration report generation
     * Starts a new process in background that will generate Excel report
     * @returns HrefResponse Azure report generation started.
     * @throws ApiError
     */
    public static postV1AzureAdMigrationReports({
        requestBody,
    }: {
        /**
         * Necessary input to create a new migration report
         */
        requestBody: AzureAdMigrationReportRequest,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/azure-ad-migration/reports',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Azure report generation cannot be started.`,
            },
        });
    }

    /**
     * Get pending azure migration report
     * Returs dto with info about pending report
     * @returns AzureAdMigrationReportProcessStatus Azure report dto returned.
     * @throws ApiError
     */
    public static getV1AzureAdMigrationReportsPending(): CancelablePromise<AzureAdMigrationReportProcessStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/azure-ad-migration/reports/pending',
            errors: {
                404: `Pending report does not exist.`,
            },
        });
    }

    /**
     * Check status of azure ad migration report
     * Returns dto with minimal info about running process
     * @returns AzureAdMigrationReportProcessStatus Azure report status returned.
     * @throws ApiError
     */
    public static getV1AzureAdMigrationReports({
        id,
    }: {
        /**
         * Existing report ID
         */
        id: string,
    }): CancelablePromise<AzureAdMigrationReportProcessStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/azure-ad-migration/reports/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Report with provided ID does not exist.`,
            },
        });
    }

    /**
     * Download report of provided report ID
     * Returns excel file of generated report
     * @returns any Azure report excel file returned.
     * @throws ApiError
     */
    public static getV1AzureAdMigrationReportsDownload({
        id,
    }: {
        /**
         * Existing report ID
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/azure-ad-migration/reports/{id}/download',
            path: {
                'id': id,
            },
            errors: {
                404: `Report with provided ID hasn't been generated`,
            },
        });
    }

    /**
     * Create Azure Cloud Identity Provider configuration
     * Create new Azure Cloud Identity Provider configuration with unique display name.
     * @returns HrefResponse Azure Cloud Identity Provider configuration created
     * @throws ApiError
     */
    public static postV1CloudAzure({
        requestBody,
    }: {
        /**
         * Azure Cloud Identity Provider configuration to create
         */
        requestBody: AzureConfigurationRequest,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/cloud-azure',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Azure Cloud Identity Provider configuration cannot be saved.`,
                404: `This endpoint is not available for your environment.`,
            },
        });
    }

    /**
     * Get default mappings
     * This is the default set of attributes that allows you to return the data you need from Azure AD. Some fields may be empty and may be edited when creating a new configuration.
     * @returns AzureMappings Default mappings returned.
     * @throws ApiError
     */
    public static getV1CloudAzureDefaultsMappings(): CancelablePromise<AzureMappings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/cloud-azure/defaults/mappings',
            errors: {
                400: `Files cannot be loaded.`,
                404: `This endpoint is not available for your environment.`,
            },
        });
    }

    /**
     * Get default server configuration
     * This is the default set of attributes that allows you to return the data you need from Azure AD. Some fields may be empty and may be edited when creating a new configuration.
     * @returns AzureServerConfiguration Default server configuration returned.
     * @throws ApiError
     */
    public static getV1CloudAzureDefaultsServerConfiguration(): CancelablePromise<AzureServerConfiguration> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/cloud-azure/defaults/server-configuration',
            errors: {
                400: `Default server configuration cannot be loaded.`,
                404: `This endpoint is not available for your environment.`,
            },
        });
    }

    /**
     * Get Azure Cloud Identity Provider configuration with given ID.
     * Get Azure Cloud Identity Provider configuration with given ID.
     * @returns AzureConfiguration Cloud Identity Provider configuration returned.
     * @throws ApiError
     */
    public static getV1CloudAzure({
        id,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
    }): CancelablePromise<AzureConfiguration> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/cloud-azure/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `ID can only be a number.`,
                404: `This endpoint is not available for your environment if CLOUD_ONLY reason code or specified Azure Cloud Identity Provider configuration does not exist.`,
            },
        });
    }

    /**
     * Update Azure Cloud Identity Provider configuration
     * Update Azure Cloud Identity Provider configuration. Cannot be used for partial updates, all content body must be sent.
     * @returns AzureConfiguration Cloud Identity Provider configuration updated
     * @throws ApiError
     */
    public static putV1CloudAzure({
        id,
        requestBody,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
        /**
         * Azure Cloud Identity Provider configuration to update
         */
        requestBody: AzureConfigurationUpdate,
    }): CancelablePromise<AzureConfiguration> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/cloud-azure/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `One or more parameters were invalid.`,
                404: `This endpoint is not available for your environment if CLOUD_ONLY reason code or Cloud Identity Provider configuration does not exist.`,
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
    public static deleteV1CloudAzure({
        id,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/cloud-azure/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `ID can only be a number.`,
                404: `This endpoint is not available for your environment if CLOUD_ONLY reason code or Cloud Identity Provider configuration does not exist.`,
            },
        });
    }

}
