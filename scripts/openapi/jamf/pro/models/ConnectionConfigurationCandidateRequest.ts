/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Request that creates configuration and initialize connection between Jamf Pro and Team Viewer
 */
export type ConnectionConfigurationCandidateRequest = {
    /**
     * An identifier of a site which Team Viewer Remote Administration will be configured on
     */
    siteId: string;
    /**
     * Name for Team Viewer Connection Configuration
     */
    displayName: string;
    /**
     * Token which is used for connecting to Team Viewer
     */
    scriptToken: string;
    /**
     * Defines the intent to enable or disable Team Viewer connection
     */
    enabled: boolean;
    /**
     * Number of minutes before the session expires
     */
    sessionTimeout: number;
};

