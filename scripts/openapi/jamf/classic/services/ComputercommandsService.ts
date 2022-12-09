/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputercommandsService {

    /**
     * Finds all computer commands
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerCommands(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computercommands',
        });
    }

    /**
     * Creates a new computer command.  Commands supported:  DeviceLock, EraseDevice, UnmanageDevice, BlankPush, UnlockUserAccount, DeleteUser, SettingsEnableBluetooth, SettingsDisableBluetooth (macOS 10.13.4 and later), EnableRemoteDesktop (macOS 10.14.4 and later), DisableRemoteDesktop (macOS 10.14.4 and later), ScheduleOSUpdate.
     * Command and computer list specified in an XML file.  DeviceLock and EraseDevice require a 6 character passcode. UnlockUserAccount and DeleteUser require a user_name that reflects a local account that is to be unlocked or removed. Command uuid and date_sent are set by Jamf Pro.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createComputerCommandByCommand({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/computercommands/command/{command}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new computer command with a command specific action.  Commands supported:  ScheduleOSUpdate.
     * Command uuid and date_sent are set by Jamf Pro. Id is used to specify a single computer, or multiple computers separated by commas, such as id/33 or id/33,34.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createComputerCommandByCommandAndAction({
        id,
        action,
    }: {
        /**
         * Id of computer,or computers if a comma-separated list, to which to send the command
         */
        id: string,
        /**
         * Command specific action.  For example, for a ScheduleOSUpdate command, users can set the action to 'install' to automatically attempt to install updates.
         */
        action: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/computercommands/command/{command}/action/{action}/id/{id}',
            path: {
                'id': id,
                'action': action,
            },
        });
    }

    /**
     * Creates a new computer command.  Commands supported:  UnmanageDevice, BlankPush, SettingsEnableBluetooth, SettingsDisableBluetooth (macOS 10.13.4 and later), EnableRemoteDesktop (macOS 10.14.4 and later), DisableRemoteDesktop (macOS 10.14.4 and later), ScheduleOSUpdate.
     * Command uuid and date_sent are set by Jamf Pro. Id is used to specify a single computer, or multiple computers separated by commas, such as id/33 or id/33,34
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createComputerCommandByCommandShortcut1({
        id,
    }: {
        /**
         * Id of computer or computers to send command to
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/computercommands/command/{command}/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new computer command.  Commands supported:  DeviceLock, EraseDevice.
     * Command uuid and date_sent are set by Jamf Pro. DeviceLock and EraseDevice require a 6 character passcode.  Id is used to specify a single computer, or multiple computers separated by commas, such as id/33 or id/33,34
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createComputerCommandByCommandShortcut2({
        id,
    }: {
        /**
         * Id of computer or computers to send command to
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/computercommands/command/{command}/passcode/{passcode}/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds matching computer commands by name.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerCommandsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computercommands/name/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Finds a computer command status by uuid
     * A command waiting to execute will have a Pending status.  A command that has failed will have an Error status.  A command that has been canceled will have a Canceled status and will not be available using the other GET options.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerCommandStatusByUuid({
        statusuuid,
    }: {
        /**
         * Command UUID value to filter by
         */
        statusuuid: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computercommands/status/{statusuuid}',
            path: {
                'statusuuid': statusuuid,
            },
        });
    }

    /**
     * Finds a computer command by uuid
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerCommandsByUuid({
        uuid,
    }: {
        /**
         * UUID value to filter by
         */
        uuid: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computercommands/uuid/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }

}
