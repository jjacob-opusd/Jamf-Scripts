/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MdmCommandClient } from './MdmCommandClient.ts';
import type { MdmCommandState } from './MdmCommandState.ts';
import type { MdmCommandType } from './MdmCommandType.ts';

export type MdmCommand = {
    uuid?: string;
    dateSent?: string;
    client?: MdmCommandClient;
    commandState?: MdmCommandState;
    commandType?: MdmCommandType;
};

