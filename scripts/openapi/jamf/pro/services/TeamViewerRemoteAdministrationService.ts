/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionConfigurationCandidateRequest } from '../models/ConnectionConfigurationCandidateRequest.ts';
import type { ConnectionConfigurationResponse } from '../models/ConnectionConfigurationResponse.ts';
import type { ConnectionConfigurationStatusResponse } from '../models/ConnectionConfigurationStatusResponse.ts';
import type { ConnectionConfigurationUpdateRequest } from '../models/ConnectionConfigurationUpdateRequest.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { SessionCandidateRequest } from '../models/SessionCandidateRequest.ts';
import type { SessionDetails } from '../models/SessionDetails.ts';
import type { SessionDetailsSearchResults } from '../models/SessionDetailsSearchResults.ts';
import type { SessionStatus } from '../models/SessionStatus.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class TeamViewerRemoteAdministrationService {

    /**
     * Create Team Viewer Remote Administration connection configuration
     * Creates Team Viewer Remote Administration connection configuration
     * @returns HrefResponse Team Viewer connection configuration created successfully
     * @throws ApiError
     */
    public static postPreviewRemoteAdministrationConfigurationsTeamViewer({
        requestBody,
    }: {
        /**
         * Team Viewer connection configuration create definition
         */
        requestBody: ConnectionConfigurationCandidateRequest,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/preview/remote-administration-configurations/team-viewer',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid field for Team Viewer connection configuration`,
                403: `Insufficient privileges or site not found for Team Viewer connection configuration`,
                409: `Site limit exceeded for Team Viewer connection configuration`,
            },
        });
    }

    /**
     * Get a paginated list of sessions
     *
     * Returns a paginated list of sessions for a given configuration ID
     * @returns SessionDetailsSearchResults Successful response
     * @throws ApiError
     */
    public static getPreviewRemoteAdministrationConfigurationsTeamViewerSessions({
        configurationId,
        page,
        pageSize = 100,
        filter = '',
    }: {
        /**
         * ID of the Team Viewer connection configuration
         */
        configurationId: string,
        page?: number,
        pageSize?: number,
        /**
         * Query in the RSQL format, allowing to filter sessions collection.
         * Default filter is empty query - returning all results for the requested page.
         *
         * Fields allowed in the query: `deviceId`, `deviceType`, `state`
         *
         * This param can be combined with paging.
         *
         */
        filter?: string,
    }): CancelablePromise<SessionDetailsSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/preview/remote-administration-configurations/team-viewer/{configurationId}/sessions',
            path: {
                'configurationId': configurationId,
            },
            query: {
                'page': page,
                'page-size': pageSize,
                'filter': filter,
            },
            errors: {
                403: `Insufficient privileges`,
            },
        });
    }

    /**
     * Create a new session
     * Creates a new Team Viewer session to be used to establish a remote connection
     * @returns HrefResponse Successful response
     * @throws ApiError
     */
    public static postPreviewRemoteAdministrationConfigurationsTeamViewerSessions({
        configurationId,
        requestBody,
    }: {
        /**
         * ID of the Team Viewer connection configuration
         */
        configurationId: string,
        /**
         * Team Viewer session attributes
         */
        requestBody: SessionCandidateRequest,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/preview/remote-administration-configurations/team-viewer/{configurationId}/sessions',
            path: {
                'configurationId': configurationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid attributes for Team Viewer session`,
                403: `Insufficient privileges`,
                409: `Connection configuration is not active or there is an active session for the device`,
            },
        });
    }

    /**
     * Get a session by its ID
     *
     * Returns a session details if found.
     * @returns SessionDetails Successful response
     * @throws ApiError
     */
    public static getPreviewRemoteAdministrationConfigurationsTeamViewerSessions1({
        configurationId,
        sessionId,
    }: {
        /**
         * ID of the Team Viewer connection configuration
         */
        configurationId: string,
        /**
         * ID of the Team Viewer session
         */
        sessionId: string,
    }): CancelablePromise<SessionDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/preview/remote-administration-configurations/team-viewer/{configurationId}/sessions/{sessionId}',
            path: {
                'configurationId': configurationId,
                'sessionId': sessionId,
            },
            errors: {
                403: `Insufficient privileges`,
            },
        });
    }

    /**
     * Close a session
     * Changes the session state from open to close. Closing a session means it is not possible to establish new remote connection between devices
     * @returns void
     * @throws ApiError
     */
    public static postPreviewRemoteAdministrationConfigurationsTeamViewerSessionsClose({
        configurationId,
        sessionId,
    }: {
        /**
         * ID of the Team Viewer connection configuration
         */
        configurationId: string,
        /**
         * ID of the Team Viewer session
         */
        sessionId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/preview/remote-administration-configurations/team-viewer/{configurationId}/sessions/{sessionId}/close',
            path: {
                'configurationId': configurationId,
                'sessionId': sessionId,
            },
            errors: {
                403: `Insufficient privileges`,
                409: `Connection configuration is not active`,
            },
        });
    }

    /**
     * Resend nofications for a session
     * Resends configured notifications (e.g. Self Service push notifications).
     * @returns void
     * @throws ApiError
     */
    public static postPreviewRemoteAdministrationConfigurationsTeamViewerSessionsResendNotification({
        configurationId,
        sessionId,
    }: {
        /**
         * ID of the Team Viewer connection configuration
         */
        configurationId: string,
        /**
         * ID of the Team Viewer session
         */
        sessionId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/preview/remote-administration-configurations/team-viewer/{configurationId}/sessions/{sessionId}/resend-notification',
            path: {
                'configurationId': configurationId,
                'sessionId': sessionId,
            },
            errors: {
                403: `Insufficient privileges`,
                409: `Connection configuration is not active or session is already closed`,
            },
        });
    }

    /**
     * Get a session status by its ID
     *
     * Returns a session status if found.
     * @returns SessionStatus Successful response
     * @throws ApiError
     */
    public static getPreviewRemoteAdministrationConfigurationsTeamViewerSessionsStatus({
        configurationId,
        sessionId,
    }: {
        /**
         * ID of the Team Viewer connection configuration
         */
        configurationId: string,
        /**
         * ID of the Team Viewer session
         */
        sessionId: string,
    }): CancelablePromise<SessionStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/preview/remote-administration-configurations/team-viewer/{configurationId}/sessions/{sessionId}/status',
            path: {
                'configurationId': configurationId,
                'sessionId': sessionId,
            },
            errors: {
                403: `Insufficient privileges`,
                404: `Team Viewer session status not found`,
            },
        });
    }

    /**
     * Get Team Viewer Remote Administration connection configuration
     * Returns Team Viewer Remote Administration connection configuration
     * @returns ConnectionConfigurationResponse Returns Team Viewer connection configuration response
     * @throws ApiError
     */
    public static getPreviewRemoteAdministrationConfigurationsTeamViewer({
        id,
    }: {
        /**
         * ID of the Team Viewer connection configuration
         */
        id: string,
    }): CancelablePromise<ConnectionConfigurationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/preview/remote-administration-configurations/team-viewer/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Team Viewer connection configuration does not exist`,
            },
        });
    }

    /**
     * Delete Team Viewer Remote Administration connection configuration
     * Deletes Team Viewer Remote Administration connection configuration
     * @returns void
     * @throws ApiError
     */
    public static deletePreviewRemoteAdministrationConfigurationsTeamViewer({
        id,
    }: {
        /**
         * ID of the Team Viewer connection configuration
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/preview/remote-administration-configurations/team-viewer/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Team Viewer Remote Administration connection configuration
     * Updates Team Viewer Remote Administration connection configuration
     * @returns ConnectionConfigurationResponse Team Viewer connection configuration updated successfully
     * @throws ApiError
     */
    public static patchPreviewRemoteAdministrationConfigurationsTeamViewer({
        id,
        requestBody,
    }: {
        /**
         * ID of the Team Viewer connection configuration
         */
        id: string,
        /**
         * Team Viewer connection configuration update request
         */
        requestBody: ConnectionConfigurationUpdateRequest,
    }): CancelablePromise<ConnectionConfigurationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/preview/remote-administration-configurations/team-viewer/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid field for Team Viewer connection configuration update request`,
                404: `Team Viewer connection configuration does not exist`,
            },
        });
    }

    /**
     * Get Team Viewer Remote Administration connection status
     * Returns Team Viewer Remote Administration connection status
     * @returns ConnectionConfigurationStatusResponse Returns Team Viewer connection status response
     * @throws ApiError
     */
    public static getPreviewRemoteAdministrationConfigurationsTeamViewerStatus({
        id,
    }: {
        /**
         * ID of the Team Viewer connection configuration
         */
        id: string,
    }): CancelablePromise<ConnectionConfigurationStatusResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/preview/remote-administration-configurations/team-viewer/{id}/status',
            path: {
                'id': id,
            },
        });
    }

}
