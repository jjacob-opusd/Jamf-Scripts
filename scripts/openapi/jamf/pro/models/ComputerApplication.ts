/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ComputerApplication = {
    name?: string;
    path?: string;
    version?: string;
    macAppStore?: boolean;
    sizeMegabytes?: number;
    bundleId?: string;
    updateAvailable?: boolean;
    /**
     * The app's external version ID. It can be used in the iTunes Search API to decide if the app needs to be updated
     */
    externalVersionId?: string;
};

