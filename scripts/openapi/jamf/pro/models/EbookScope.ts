/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EbookExclusions } from './EbookExclusions.ts';
import type { EbookLimitations } from './EbookLimitations.ts';

export type EbookScope = {
    allComputers?: boolean;
    allMobileDevices?: boolean;
    allUsers?: boolean;
    computerIds?: Array<string>;
    computerGroupIds?: Array<string>;
    mobileDeviceIds?: Array<string>;
    mobileDeviceGroupIds?: Array<string>;
    buildingIds?: Array<string>;
    departmentIds?: Array<string>;
    userIds?: Array<string>;
    userGroupIds?: Array<string>;
    classroomIds?: Array<string>;
    limitations?: EbookLimitations;
    exclusions?: EbookExclusions;
};

