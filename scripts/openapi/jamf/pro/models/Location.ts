/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdAndName } from './IdAndName.ts';

export type Location = {
    username?: string;
    realName?: string;
    emailAddress?: string;
    position?: string;
    phoneNumber?: string;
    department?: IdAndName;
    building?: IdAndName;
    room?: string;
};

