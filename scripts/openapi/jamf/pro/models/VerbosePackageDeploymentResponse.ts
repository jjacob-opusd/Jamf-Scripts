/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerbosePackageDeploymentResponse = {
    queuedCommands?: Array<{
        device?: number;
        commandUuid?: string;
    }>;
    errors?: Array<{
        device?: number;
        group?: number;
        reason?: string;
    }>;
};

