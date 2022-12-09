/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProtectSettingsResponse = {
    id?: string;
    apiClientId?: string;
    /**
     * display name used when creating the API Client in the Jamf Protect web console
     */
    apiClientName?: string;
    /**
     * ID used when making requests to identify this particular Protect registration.
     */
    registrationId?: string;
    protectUrl?: string;
    lastSyncTime?: string;
    syncStatus?: 'IN_PROGRESS' | 'COMPLETED' | 'ERROR' | 'UNKNOWN';
    /**
     * determines whether the Jamf Protect agent will be automatically installed on client computers
     */
    autoInstall?: boolean;
};

