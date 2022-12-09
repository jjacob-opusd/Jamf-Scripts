/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SafelistedApp } from './SafelistedApp.ts';
import type { TeacherFeatures } from './TeacherFeatures.ts';

export type TeacherSettingsResponse = {
    isEnabled?: boolean;
    timezoneId?: string;
    autoClear?: string;
    maxRestrictionLengthSeconds?: number;
    displayNameType?: string;
    features?: TeacherFeatures;
    safelistedApps?: Array<SafelistedApp>;
};

