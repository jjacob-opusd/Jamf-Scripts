/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountPreferencesV1 } from './AccountPreferencesV1.ts';

export type AuthAccountV1 = {
    id?: string;
    username?: string;
    realName?: string;
    email?: string;
    preferences?: AccountPreferencesV1;
    multiSiteAdmin?: boolean;
    accessLevel?: 'FullAccess' | 'SiteAccess' | 'GroupBasedAccess';
    privilegeSet?: 'ADMINISTRATOR' | 'AUDITOR' | 'ENROLLMENT' | 'CUSTOM';
    privilegesBySite?: Record<string, Array<string>>;
    groupIds?: Array<string>;
    currentSiteId?: string;
};

