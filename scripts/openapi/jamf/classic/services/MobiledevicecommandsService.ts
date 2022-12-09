/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobiledevicecommandsService {

    /**
     * Finds all mobile device commands
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceCommands(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicecommands',
        });
    }

    /**
     * Creates a new mobile device command.  Command and mobile device list specified in an XML file.  Commands supported:  Settings, DeviceLock, EraseDevice, ClearPasscode, UnmanageDevice, UpdateInventory, ClearRestrictionsPassword, SettingsEnableDataRoaming, SettingsDisableDataRoaming, SettingsEnableVoiceRoaming, SettingsDisableVoiceRoaming, SettingsEnableAppAnalytics, SettingsDisableAppAnalytics, SettingsEnableDiagnosticSubmission, SettingsDisableDiagnosticSubmission, SettingsEnableBluetooth, SettingsDisableBluetooth (iOS 11.3+ and supervised only),  SettingsEnablePersonalHotspot, SettingsDisablePersonalHotspot, BlankPush, Wallpaper (supervised only), DeviceName (supervised only), ShutDownDevice (supervised only), RestartDevice (supervised only), PasscodeLockGracePeriod (shared iPad only), , EnableLostMode (supervised only), DisableLostMode (supervised and in lost mode only), DeviceLocation (supervised and in lost mode only), PlayLostModeSound (supervised and in lost mode only), ScheduleOSUpdate (iOS 9 - 10.2, enrolled via a Prestage enrollment; and/or iOS 10.3 or later; tvOS 12 or later), RefreshCellularPlans
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceCommand({
        command,
        deviceName,
        lockMessage,
        wallpaperSetting,
        wallpaperId,
        wallpaperContent,
        passcodeLockGracePeriod,
        lostModePhone,
        lostModeFootnote,
        alwaysEnforceLostMode,
        lostModeWithSound,
        preserveDataPlan,
        disallowProximitySetup,
        clearActivationLock,
        installAction,
        productVersion,
        eSimServerUrl,
    }: {
        /**
         * Command name
         */
        command: string,
        /**
         * Device name to set (required for DeviceName command)
         */
        deviceName?: string,
        /**
         * Lock message for the DeviceLock command
         */
        lockMessage?: string,
        /**
         * Where to set wallpaper (required for Wallpaper command). Possible integer values are: 1 (Lock screen), 2 (Home screen), or 3 (Lock and home screens)
         */
        wallpaperSetting?: number,
        /**
         * Device name to set (required for Wallpaper command if wallpaper_content is not set)
         */
        wallpaperId?: string,
        /**
         * Wallpaper image in PNG or JPEG format encoded using base64 (required for Wallpaper command if wallpaper_id is not set)
         */
        wallpaperContent?: string,
        /**
         * The number of seconds the screen must be locked before unlock attempts will require the device passcode.
         */
        passcodeLockGracePeriod?: number,
        /**
         * The phone to be displayed on the lost device. 'lost_mode_message', 'lost_mode_phone' or both of those parameters must be provided to enable lost mode.
         */
        lostModePhone?: string,
        /**
         * The footnote to be displayed on the lost device.
         */
        lostModeFootnote?: string,
        /**
         * 'false' if the lost mode is NOT to be re-enabled after the device is wiped and re-enrolled. Defaults to 'true'.
         */
        alwaysEnforceLostMode?: string,
        /**
         * 'true' if the device is to play a loud sound while the lost mode is enabled. Defaults to 'false'.
         */
        lostModeWithSound?: string,
        /**
         * 'true' if the data plan should be preserved when wiping a device
         */
        preserveDataPlan?: string,
        /**
         * If true, on the next reboot Proximity Setup is not allowed and the pane in Setup Assistant will be skipped. Defaults to false.
         */
        disallowProximitySetup?: string,
        /**
         * Will attempt to clear the activation lock if the device has it enabled. Accepts true, defaults to false. Optional parameter for EraseDevice.
         */
        clearActivationLock?: string,
        /**
         * Specify the behavior of the install. Possible integer values are: 1 (Download the update for users to install), 2 (Download and install the update, and restart devices after installation).
         */
        installAction?: number,
        /**
         * Specify the OS version of the update.  Updating to a specific iOS version requires devices with iOS 11.3 or later. Updating to a specific tvOS version requires devices with tvOS 12.2 or later. install_action required by the ScheduleOSUpdate command if product_version is specified.
         */
        productVersion?: string,
        /**
         * The carrier's eSIM server URL to query. This URL is obtained from each carrier separately.
         */
        eSimServerUrl?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledevicecommands/command',
            body: eSimServerUrl,
        });
    }

    /**
     * Creates a new command to lock a mobile device.  Command and mobile device list specified in URL.
     * Example: JSSResource/mobiledevicecommands/command/DeviceLock/Lock+Message/id/13 -X POST
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceLockCommandUrl({
        idList,
        lockMessage,
    }: {
        /**
         * Mobile device id values, multiple ids may be separated by commas.   Examples:  /id/13&nbsp;&nbsp;&nbsp;id/13,14,15
         */
        idList: string,
        /**
         * Lock message for the DeviceLock command
         */
        lockMessage?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledevicecommands/command/DeviceLock/{lock_message}/id/{id_list}',
            path: {
                'id_list': idList,
            },
            body: lockMessage,
        });
    }

    /**
     * Creates a new command to set the name of a mobile device.  Command and mobile device list specified in URL.  Command fails when another DeviceName command is pending. Use of a list of devices is generally not advised.
     * Example: JSSResource/mobiledevicecommands/command/DeviceName/NewName/id/13 -X POST
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceNameCommandUrl({
        idList,
        deviceName,
    }: {
        /**
         * Mobile device id values, multiple ids may be separated by commas.   Examples:  /id/13&nbsp;&nbsp;&nbsp;id/13,14,15
         */
        idList: string,
        /**
         * Device name to set (required for DeviceName command)
         */
        deviceName?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledevicecommands/command/DeviceName/{device_name}/id/{id_list}',
            path: {
                'id_list': idList,
            },
            body: deviceName,
        });
    }

    /**
     * Creates a new command to request that a mobile device update its OS. Command and mobile device list specified in URL. Device will be updated to the latest OS version based on device eligibility.
     * Example: JSSResource/mobiledevicecommands/command/ScheduleOSUpdate/2/id/13 -X POST
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileScheduleOsUpdateCommandUrl({
        idList,
        installAction,
    }: {
        /**
         * Mobile device id values, multiple ids may be separated by commas.   Examples:  /id/13&nbsp;&nbsp;&nbsp;id/13,14,15
         */
        idList: string,
        /**
         * Specify the behavior of the install. Possible integer values are: 1 (Download the update for users to install), 2 (Download and install the update, and restart devices after installation)
         */
        installAction?: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledevicecommands/command/ScheduleOSUpdate/{install_action}/id/{id_list}',
            path: {
                'id_list': idList,
            },
            body: installAction,
        });
    }

    /**
     * Creates a new command to request that a mobile device update its OS. Command and mobile device list specified in URL. Mixing iOS and tvOS devices in ID list is not advised, as product version is specific to OS type.
     * Example: JSSResource/mobiledevicecommands/command/ScheduleOSUpdate/1/12.3.1/id/13 -X POST
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileScheduleOsUpdateCommandWithProductVersionUrl({
        idList,
        installAction,
        productVersion,
    }: {
        /**
         * Mobile device id values, multiple ids may be separated by commas.   Examples:  /id/13&nbsp;&nbsp;&nbsp;id/13,14,15
         */
        idList: string,
        /**
         * Specify the behavior of the install. Possible integer values are: 1 (Download the update for users to install), 2 (Download and install the update, and restart devices after installation)
         */
        installAction?: number,
        /**
         * Specify the OS version of the update.  Updating to a specific iOS version requires devices with iOS 11.3 or later. Updating to a specific tvOS version requires devices with tvOS 12.2 or later. install_action required by the ScheduleOSUpdate command if product_version is specified.
         */
        productVersion?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledevicecommands/command/ScheduleOSUpdate/{install_action}/{product_version}/id/{id_list}',
            path: {
                'id_list': idList,
            },
            body: productVersion,
        });
    }

    /**
     * Finds all mobile device commands for specified command
     * You can POST using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceCommandsByCommand({
        command,
    }: {
        /**
         * Name to filter by
         */
        command: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicecommands/command/{command}',
            path: {
                'command': command,
            },
        });
    }

    /**
     * Creates a new mobile device command using command name.   Command and mobile device list specified in an XML file.  Commands supported:  Settings, DeviceLock, EraseDevice, ClearPasscode, UnmanageDevice, UpdateInventory, ClearRestrictionsPassword, SettingsEnableDataRoaming, SettingsDisableDataRoaming, SettingsEnableVoiceRoaming, SettingsDisableVoiceRoaming, SettingsEnableAppAnalytics, SettingsDisableAppAnalytics, SettingsEnableDiagnosticSubmission, SettingsDisableDiagnosticSubmission, SettingsEnableBluetooth, SettingsDisableBluetooth (iOS 11.3+ and supervised only), SettingsEnablePersonalHotspot, SettingsDisablePersonalHotspot, BlankPush, Wallpaper (supervised only), DeviceName (supervised only), ShutDownDevice (supervised only), RestartDevice (supervised only), PasscodeLockGracePeriod (shared iPad only), EnableLostMode (supervised only), DisableLostMode (supervised and in lost mode only), DeviceLocation (supervised and in lost mode only), PlayLostModeSound (supervised and in lost mode only), ScheduleOSUpdate (iOS 9 - 10.2, enrolled via a Prestage enrollment; and/or iOS 10.3 or later; tvOS 12 or later)
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceCommandByCommand({
        command,
        deviceName,
        lockMessage,
        wallpaperSetting,
        wallpaperId,
        wallpaperContent,
        passcodeLockGracePeriod,
        lostModePhone,
        lostModeFootnote,
        alwaysEnforceLostMode,
        lostModeWithSound,
        preserveDataPlan,
        disallowProximitySetup,
        clearActivationLock,
        installAction,
        productVersion,
    }: {
        /**
         * Command name (url)
         */
        command: string,
        /**
         * Device name to set (required for DeviceName command)
         */
        deviceName?: string,
        /**
         * Lock message for the DeviceLock command
         */
        lockMessage?: string,
        /**
         * Where to set wallpaper (required for Wallpaper command). Possible integer values are: 1 (Lock screen), 2 (Home screen), or 3 (Lock and home screens)
         */
        wallpaperSetting?: number,
        /**
         * Device name to set (required for Wallpaper command if wallpaper_content is not set)
         */
        wallpaperId?: string,
        /**
         * Wallpaper image in PNG or JPEG format encoded using base64 (required for Wallpaper command if wallpaper_id is not set)
         */
        wallpaperContent?: string,
        /**
         * The number of seconds the screen must be locked before unlock attempts will require the device passcode.
         */
        passcodeLockGracePeriod?: number,
        /**
         * The phone to be displayed on the lost device. 'lost_mode_message', 'lost_mode_phone' or both of those parameters must be provided to enable lost mode.
         */
        lostModePhone?: string,
        /**
         * The footnote to be displayed on the lost device.
         */
        lostModeFootnote?: string,
        /**
         * 'false' if the lost mode is NOT to be re-enabled after the device is wiped and re-enrolled. Defaults to 'true'.
         */
        alwaysEnforceLostMode?: string,
        /**
         * 'true' if the device is to play a loud sound while the lost mode is enabled. Defaults to 'false'.
         */
        lostModeWithSound?: string,
        /**
         * 'true' if the data plan should be preserved when wiping a device
         */
        preserveDataPlan?: string,
        /**
         * If true, on the next reboot Proximity Setup is not allowed and the pane in Setup Assistant will be skipped. Defaults to false.
         */
        disallowProximitySetup?: string,
        /**
         * Will attempt to clear the activation lock if the device has it enabled. Accepts true, defaults to false. Optional parameter for EraseDevice.
         */
        clearActivationLock?: string,
        /**
         * Specify the behavior of the install. Possible integer values are: 1 (Download the update for users to install), 2 (Download and install the update, and restart devices after installation).
         */
        installAction?: number,
        /**
         * Specify the OS version of the update.  Updating to a specific iOS version requires devices with iOS 11.3 or later. Updating to a specific tvOS version requires devices with tvOS 12.2 or later. install_action required by the ScheduleOSUpdate command if product_version is specified.
         */
        productVersion?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledevicecommands/command/{command}',
            path: {
                'command': command,
            },
            body: productVersion,
        });
    }

    /**
     * Creates a new mobile device command.  Command and mobile device list specified in URL.  Commands supported:  Settings, EraseDevice, ClearPasscode, UnmanageDevice, UpdateInventory, ClearRestrictionsPassword, SettingsEnableDataRoaming, SettingsDisableDataRoaming, SettingsEnableVoiceRoaming, SettingsDisableVoiceRoaming, SettingsEnableAppAnalytics, SettingsDisableAppAnalytics, SettingsEnableDiagnosticSubmission, SettingsDisableDiagnosticSubmission, SettingsEnableBluetooth, SettingsDisableBluetooth (iOS 11.3+ and supervised only), SettingsEnablePersonalHotspot, SettingsDisablePersonalHotspot, BlankPush, ShutDownDevice (supervised only), RestartDevice (supervised only), PasscodeLockGracePeriod (shared iPad only), EnableLostMode (supervised only), DisableLostMode (supervised and in lost mode only), DeviceLocation (supervised and in lost mode only), PlayLostModeSound (supervised and in lost mode only)
     * Example: JSSResource/mobiledevicecommands/command/UpdateInventory/id/13 -X POST
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceCommandUrl({
        idList,
        passcodeLockGracePeriod,
        lostModePhone,
        lostModeFootnote,
        alwaysEnforceLostMode,
        lostModeWithSound,
        preserveDataPlan,
        disallowProximitySetup,
    }: {
        /**
         * Mobile device id values, multiple ids may be separated by commas.   Examples:  /id/13&nbsp;&nbsp;&nbsp;id/13,14,15
         */
        idList: string,
        /**
         * The number of seconds the screen must be locked before unlock attempts will require the device passcode.
         */
        passcodeLockGracePeriod?: number,
        /**
         * The phone to be displayed on the lost device. 'lost_mode_message', 'lost_mode_phone' or both of those parameters must be provided to enable lost mode.
         */
        lostModePhone?: string,
        /**
         * The footnote to be displayed on the lost device.
         */
        lostModeFootnote?: string,
        /**
         * 'false' if the lost mode is NOT to be re-enabled after the device is wiped and re-enrolled. Defaults to 'true'.
         */
        alwaysEnforceLostMode?: string,
        /**
         * 'true' if the device is to play a loud sound while the lost mode is enabled. Defaults to 'false'.
         */
        lostModeWithSound?: string,
        /**
         * 'true' if the data plan should be preserved when wiping a device
         */
        preserveDataPlan?: string,
        /**
         * If true, on the next reboot Proximity Setup is not allowed and the pane in Setup Assistant will be skipped. Defaults to false.
         */
        disallowProximitySetup?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledevicecommands/command/{command}/id/{id_list}',
            path: {
                'id_list': idList,
            },
            body: disallowProximitySetup,
        });
    }

    /**
     * Finds all mobile device commands by name.  Same as command below.
     * You can POST using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceCommandsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicecommands/name/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Finds a mobile device command by uuid
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceCommandsByUuid({
        uuid,
    }: {
        /**
         * UUID value to filter by
         */
        uuid: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicecommands/uuid/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }

}
