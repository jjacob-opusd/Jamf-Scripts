/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserTestAttributes } from './UserTestAttributes.ts';

export type UserTestSearch = {
    distinguishedName?: string;
    id?: string;
    uuid?: string;
    serverId?: string;
    name?: string;
    attributes?: UserTestAttributes;
};

