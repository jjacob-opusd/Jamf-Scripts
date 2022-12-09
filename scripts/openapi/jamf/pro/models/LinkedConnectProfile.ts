/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LinkedConnectProfile = {
    readonly uuid?: string;
    readonly profileId?: string;
    readonly profileName?: string;
    readonly profileScopeDescription?: string;
    /**
     * Must be a valid Jamf Connect version 2.3.0 or higher. Versions are listed here `https://www.jamf.com/resources/product-documentation/jamf-connect-administrators-guide/`
     */
    version?: string;
    /**
     * Determines how the server will behave regarding application updates and installs on the devices that have the configuration profile installed. * `PATCH_UPDATES` - Server handles initial installation of the application and any patch updates. * `MINOR_AND_PATCH_UPDATES` - Server handles initial installation of the application and any patch and minor updates. * `INITIAL_INSTALLATION_ONLY` - Server only handles initial installation of the application. Updates will have to be done manually. * `NONE` - Server does not handle any installations or updates for the application. Version is ignored for this type.
     *
     */
    autoDeploymentType?: 'PATCH_UPDATES' | 'MINOR_AND_PATCH_UPDATES' | 'INITIAL_INSTALLATION_ONLY' | 'NONE';
};

