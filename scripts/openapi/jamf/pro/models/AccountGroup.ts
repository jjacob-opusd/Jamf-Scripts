/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccountGroup = {
    accessLevel?: 'FullAccess' | 'SiteAccess' | 'GroupBasedAccess';
    privilegeSet?: 'ADMINISTRATOR' | 'AUDITOR' | 'ENROLLMENT' | 'CUSTOM';
    siteId?: number;
    privileges?: Array<string>;
    memberUserIds?: Array<number>;
};

