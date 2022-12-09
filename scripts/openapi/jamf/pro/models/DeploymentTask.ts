/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeploymentTask = {
    readonly id?: string;
    readonly computerId?: string;
    readonly computerName?: string;
    readonly version?: string;
    readonly updated?: string;
    /**
     * Status of this Jamf Connect deployment task. "Command" below refers to an `InstallEnterpriseApplication` command. Tasks that are not finished (i.e., `COMPLETE` or `GAVE_UP`) are evaluated once every thirty minutes, so the status value for a device may lag behind a successful Jamf Connect package install up to thirty minutes. * `COMMAND_QUEUED` - command has been queued * `NO_COMMAND` - command has not yet been queued * `PENDING_MANIFEST` - task is waiting to obtain a valid package manifest before a command can be queued * `COMPLETE` - command has been completed successfully * `GAVE_UP` - the command failed with an error or the device did not process it in a reasonable amount of time * `UNKNOWN` - unknown; tasks in this state will be evaluated
     *
     */
    status?: 'COMMAND_QUEUED' | 'NO_COMMAND' | 'PENDING_MANIFEST' | 'COMPLETE' | 'GAVE_UP' | 'UNKNOWN';
};

