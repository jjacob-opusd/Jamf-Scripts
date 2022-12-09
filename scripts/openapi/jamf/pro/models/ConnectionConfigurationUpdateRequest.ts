/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Request that updates configuration connection between Jamf Pro and Team Viewer
 */
export type ConnectionConfigurationUpdateRequest = {
    /**
     * Name for Team Viewer Connection Configuration
     */
    displayName?: string;
    /**
     * Defines the intent to enable or disable Team Viewer connection
     */
    enabled?: boolean;
    /**
     * Number of minutes before the session expires
     */
    sessionTimeout?: number;
    /**
     * Script token for Team Viewer Connection Configuration
     */
    token?: string;
};

