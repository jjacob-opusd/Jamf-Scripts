/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Response that contains information about connection configuration for Team Viewer
 */
export type ConnectionConfigurationResponse = {
    /**
     * An identifier of connection configuration for Team Viewer Remote Administration
     */
    id: string;
    /**
     * An identifier of a site which Team Viewer Remote Administration is configured on
     */
    siteId: string;
    /**
     * Name for Team Viewer Connection Configuration
     */
    displayName: string;
    /**
     * Describes if Team Viewer connection is enabled or disabled
     */
    enabled: boolean;
    /**
     * Number of minutes before the session expires
     */
    sessionTimeout: number;
};

