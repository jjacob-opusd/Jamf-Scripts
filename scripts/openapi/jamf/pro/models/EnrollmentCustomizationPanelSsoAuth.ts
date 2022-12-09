/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnrollmentCustomizationPanel } from './EnrollmentCustomizationPanel.ts';

export type EnrollmentCustomizationPanelSsoAuth = (EnrollmentCustomizationPanel & {
    isUseJamfConnect: boolean;
    longNameAttribute: string;
    shortNameAttribute: string;
    isGroupEnrollmentAccessEnabled: boolean;
    groupEnrollmentAccessName: string;
});

