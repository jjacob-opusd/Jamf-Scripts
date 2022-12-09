/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerExtensionAttribute } from './ComputerExtensionAttribute.ts';

export type ComputerUserAndLocation = {
    username?: string;
    realname?: string;
    email?: string;
    position?: string;
    phone?: string;
    departmentId?: string;
    buildingId?: string;
    room?: string;
    extensionAttributes?: Array<ComputerExtensionAttribute>;
};

