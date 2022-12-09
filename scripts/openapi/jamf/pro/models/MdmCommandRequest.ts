/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeclarativeManagementCommand } from './DeclarativeManagementCommand.ts';
import type { DeleteUserCommand } from './DeleteUserCommand.ts';
import type { EnableLostModeCommand } from './EnableLostModeCommand.ts';
import type { LogOutUserCommand } from './LogOutUserCommand.ts';
import type { MdmCommandClientRequest } from './MdmCommandClientRequest.ts';
import type { MdmCommandType } from './MdmCommandType.ts';
import type { RestartDeviceCommand } from './RestartDeviceCommand.ts';
import type { SetRecoveryLockCommand } from './SetRecoveryLockCommand.ts';
import type { SettingsCommand } from './SettingsCommand.ts';

export type MdmCommandRequest = {
    clientData?: Array<MdmCommandClientRequest>;
    commandData?: (EnableLostModeCommand | DeleteUserCommand | LogOutUserCommand | SettingsCommand | RestartDeviceCommand | SetRecoveryLockCommand | DeclarativeManagementCommand | {
        commandType?: MdmCommandType;
    });
};

