/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SafelistedApp } from './SafelistedApp.ts';

export type TeacherSettingsRequest = {
    isEnabled?: boolean;
    timezoneId?: string;
    autoClear?: string | null;
    maxRestrictionLengthSeconds?: number;
    safelistedApps?: Array<SafelistedApp>;
};

