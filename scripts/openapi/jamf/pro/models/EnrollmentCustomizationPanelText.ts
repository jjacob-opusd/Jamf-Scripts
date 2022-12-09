/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnrollmentCustomizationPanel } from './EnrollmentCustomizationPanel.ts';

export type EnrollmentCustomizationPanelText = (EnrollmentCustomizationPanel & {
    body: string;
    subtext?: string;
    title: string;
    backButtonText: string;
    continueButtonText: string;
});

