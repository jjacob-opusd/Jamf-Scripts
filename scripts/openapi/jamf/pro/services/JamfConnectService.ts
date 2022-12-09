/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentTaskSearchResults } from '../models/DeploymentTaskSearchResults.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { Ids } from '../models/Ids.ts';
import type { LinkedConnectProfile } from '../models/LinkedConnectProfile.ts';
import type { LinkedConnectProfileSearchResults } from '../models/LinkedConnectProfileSearchResults.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfConnectService {

    /**
     * Get the Jamf Connect settings that you have access to see
     *
     * Get the Jamf Connect settings that you have access to see.
     * @returns void
     * @throws ApiError
     */
    public static getV1JamfConnect(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-connect',
            errors: {
                403: `Cloud Services Connection has not been established.`,
            },
        });
    }

    /**
     * Search for config profiles linked to Jamf Connect
     *
     * Search for config profiles linked to Jamf Connect
     * @returns LinkedConnectProfileSearchResults Success.
     * @throws ApiError
     */
    public static getV1JamfConnectConfigProfiles({
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
    }): CancelablePromise<LinkedConnectProfileSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jamf-connect/config-profiles',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Update the way the Jamf Connect app gets updated on computers within scope of the associated configuration profile.
     *
     * Update the way the Jamf Connect app gets updated on computers within scope of the associated configuration profile.
     * @returns LinkedConnectProfile Success
     * @throws ApiError
     */
    public static putV1JamfConnectConfigProfiles({
        id,
        requestBody,
    }: {
        /**
         * the UUID of the profile to update
         */
        id: string,
        /**
         * Updatable Jamf Connect Settings
         */
        requestBody?: LinkedConnectProfile,
    }): CancelablePromise<LinkedConnectProfile> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/jamf-connect/config-profiles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Search for deployment tasks for a config profile linked to Jamf Connect
     *
     * Search for config profiles linked to Jamf Connect
     * @returns DeploymentTaskSearchResults Success.
     * @throws ApiError
     */
    public static getV1JamfConnectDeploymentsTasks({
        id,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * the UUID of the Jamf Connect deployment
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
            url: '/v1/jamf-connect/deployments/{id}/tasks',
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
     * Request a retry of Connect install tasks
     *
     * Request a retry of Connect install tasks
     *
     * @returns void
     * @throws ApiError
     */
    public static postV1JamfConnectDeploymentsTasksRetry({
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
            url: '/v1/jamf-connect/deployments/{id}/tasks/retry',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Cloud Services Connection has not been established.`,
                500: `Jamf Connect tasks to retry failed`,
            },
        });
    }

    /**
     * Get Jamf Connect history
     *
     * Get Jamf Connect history
     *
     * @returns HistorySearchResults Details of Jamf Connect history were found
     * @throws ApiError
     */
    public static getV1JamfConnectHistory({
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
            url: '/v1/jamf-connect/history',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Add Jamf Connect history notes
     *
     * Add Jamf Connect history notes
     *
     * @returns HrefResponse Notes to Jamf Connect history were added
     * @throws ApiError
     */
    public static postV1JamfConnectHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/jamf-connect/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Jamf Connect history can not be saved`,
            },
        });
    }

}
