/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountPreferences } from './AccountPreferences.ts';

export type AuthAccount = {
    id?: number;
    username?: string;
    realName?: string;
    email?: string;
    preferences?: AccountPreferences;
    isMultiSiteAdmin?: boolean;
    accessLevel?: 'FullAccess' | 'SiteAccess' | 'GroupBasedAccess';
    privilegeSet?: 'ADMINISTRATOR' | 'AUDITOR' | 'ENROLLMENT' | 'CUSTOM';
    privilegesBySite?: Record<string, Array<string>>;
    groupIds?: Array<number>;
    currentSiteId?: number;
};

