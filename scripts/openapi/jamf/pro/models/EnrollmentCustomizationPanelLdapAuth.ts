/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnrollmentCustomizationLdapGroupAccess } from './EnrollmentCustomizationLdapGroupAccess.ts';
import type { EnrollmentCustomizationPanel } from './EnrollmentCustomizationPanel.ts';

export type EnrollmentCustomizationPanelLdapAuth = (EnrollmentCustomizationPanel & {
    usernameLabel: string;
    passwordLabel: string;
    title: string;
    backButtonText: string;
    continueButtonText: string;
    ldapGroupAccess?: Array<EnrollmentCustomizationLdapGroupAccess>;
});

