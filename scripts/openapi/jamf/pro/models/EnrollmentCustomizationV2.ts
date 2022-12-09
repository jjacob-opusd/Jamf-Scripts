/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnrollmentCustomizationBrandingSettings } from './EnrollmentCustomizationBrandingSettings.ts';

export type EnrollmentCustomizationV2 = {
    readonly id?: string;
    siteId: string;
    displayName: string;
    description: string;
    enrollmentCustomizationBrandingSettings: EnrollmentCustomizationBrandingSettings;
};

