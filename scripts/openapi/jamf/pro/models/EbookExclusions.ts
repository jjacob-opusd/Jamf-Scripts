/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EbookLimitations } from './EbookLimitations.ts';

export type EbookExclusions = {
    computerIds?: Array<string>;
    computerGroupIds?: Array<string>;
    mobileDeviceIds?: Array<string>;
    mobileDeviceGroupIds?: Array<string>;
    buildingIds?: Array<string>;
    departmentIds?: Array<string>;
    userIds?: Array<string>;
    userGroupIds?: Array<string>;
    limitations?: EbookLimitations;
};

