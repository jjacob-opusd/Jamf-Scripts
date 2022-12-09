/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentTaskSearchResults } from '../models/DeploymentTaskSearchResults.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { Ids } from '../models/Ids.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { PlanSearchResults } from '../models/PlanSearchResults.ts';
import type { ProtectRegistrationRequest } from '../models/ProtectRegistrationRequest.ts';
import type { ProtectSettingsResponse } from '../models/ProtectSettingsResponse.ts';
import type { ProtectUpdatableSettingsRequest } from '../models/ProtectUpdatableSettingsRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfProtectService {

    /**
     * Jamf Protect integration settings
     * Jamf Protect integration settings
     * @returns ProtectSettingsResponse Success.
     * @throws ApiError
     */
    public static getV1JamfProtect(): CancelablePromise<ProtectSettingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-protect',
            errors: {
                403: `Cloud Services Connection has not been established.`,
                404: `Protect Integration has not been configured.`,
                500: `Jamf Pro is not able to establish contact with the Protect API via the SOUP CSA client.`,
            },
        });
    }

    /**
     * Jamf Protect integration settings
     * Jamf Protect integration settings
     * @returns ProtectSettingsResponse Success.
     * @throws ApiError
     */
    public static putV1JamfProtect({
        requestBody,
    }: {
        /**
         * Updatable Jamf Protect Settings
         */
        requestBody: ProtectUpdatableSettingsRequest,
    }): CancelablePromise<ProtectSettingsResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/jamf-protect',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Jamf Protect API registration.
     * Deletes an existing Jamf Protect API registration if present. Jamf Protect API integration will be disabled.
     * @returns void
     * @throws ApiError
     */
    public static deleteV1JamfProtect(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/jamf-protect',
            errors: {
                400: `Cloud Services Connection has not been established.`,
                500: `Error Deleting registration`,
            },
        });
    }

    /**
     * Search for deployment tasks for a config profile linked to Jamf Protect
     *
     * Search for config profiles linked to Jamf Protect
     * @returns DeploymentTaskSearchResults Success.
     * @throws ApiError
     */
    public static getV1JamfProtectDeploymentsTasks({
        id,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * the UUID of the Jamf Protect deployment
         */
        id: string,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort order is descending. Multiple sort criteria are supported and must be entered on separate lines in Swagger UI. In the URI the 'sort' query param is not duplicated for each sort criterion, e.g., ...&sort=name:asc,date:desc. Fields that can be sorted: status, updated
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter results. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: status, updated, version This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<DeploymentTaskSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-protect/deployments/{id}/tasks',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Request a retry of Protect install tasks
     *
     * Request a retry of Protect install tasks
     *
     * @returns void
     * @throws ApiError
     */
    public static postV1JamfProtectDeploymentsTasksRetry({
        id,
        requestBody,
    }: {
        /**
         * the UUID of the deployment associated with the retry
         */
        id: string,
        /**
         * task IDs to retry
         */
        requestBody: Ids,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/jamf-protect/deployments/{id}/tasks/retry',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Cloud Services Connection has not been established.`,
                500: `Jamf Protect tasks to retry failed`,
            },
        });
    }

    /**
     * Get Jamf Protect history
     *
     * Get Jamf Protect history
     *
     * @returns HistorySearchResults Details of Jamf Protect history were found
     * @throws ApiError
     */
    public static getV1JamfProtectHistory({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort order is descending. Multiple sort criteria are supported and must be entered on separate lines in Swagger UI. In the URI the 'sort' query param is not duplicated for each sort criterion, e.g., ...&sort=name:asc,date:desc. Fields that can be sorted: status, updated
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter results. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: status, updated, version This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-protect/history',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Add Jamf Protect history notes
     *
     * Add Jamf Protect history notes
     *
     * @returns HrefResponse Notes to Jamf Protect history were added
     * @throws ApiError
     */
    public static postV1JamfProtectHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/jamf-protect/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Jamf Protect history can not be saved`,
            },
        });
    }

    /**
     * Get all of the previously synced Jamf Protect Plans with information about their associated configuration profile
     * Get all of the previously synced Jamf Protect Plans with information about their associated configuration profile
     * @returns PlanSearchResults Success.
     * @throws ApiError
     */
    public static getV1JamfProtectPlans({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort order is descending. Multiple sort criteria are supported and must be entered on separate lines in Swagger UI. In the URI the 'sort' query param is not duplicated for each sort criterion, e.g., ...&sort=name:asc,date:desc. Fields that can be sorted: status, updated
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter results. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: status, updated, version This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<PlanSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-protect/plans',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Sync Plans with Jamf Protect
     * Sync Plans with Jamf Protect. Configuration profiles associated with new plans will be imported to Jamf Pro.
     * @returns void
     * @throws ApiError
     */
    public static postV1JamfProtectPlansSync(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/jamf-protect/plans/sync',
            errors: {
                400: `Cloud Services Connection has not been established.`,
                404: `Protect API credentials have not been configured.`,
            },
        });
    }

    /**
     * Register a Jamf Protect API configuration with Jamf Pro
     * Register a Jamf Protect API configuration with Jamf Pro
     * @returns ProtectSettingsResponse Successful registration.
     * @throws ApiError
     */
    public static postV1JamfProtectRegister({
        requestBody,
    }: {
        /**
         * Jamf Protect API connection information
         */
        requestBody: ProtectRegistrationRequest,
    }): CancelablePromise<ProtectSettingsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/jamf-protect/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Cloud Services Connection has not been established.`,
            },
        });
    }

}
