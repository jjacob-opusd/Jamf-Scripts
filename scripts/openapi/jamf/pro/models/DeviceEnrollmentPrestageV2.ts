/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocationInformationV2 } from './LocationInformationV2.ts';
import type { PrestagePurchasingInformationV2 } from './PrestagePurchasingInformationV2.ts';

export type DeviceEnrollmentPrestageV2 = {
    displayName: string;
    mandatory: boolean;
    mdmRemovable: boolean;
    supportPhoneNumber: string;
    supportEmailAddress: string;
    department: string;
    defaultPrestage: boolean;
    enrollmentSiteId: string;
    keepExistingSiteMembership: boolean;
    keepExistingLocationInformation: boolean;
    requireAuthentication: boolean;
    authenticationPrompt: string;
    preventActivationLock: boolean;
    enableDeviceBasedActivationLock: boolean;
    deviceEnrollmentProgramInstanceId: string;
    skipSetupItems?: Record<string, boolean>;
    locationInformation: LocationInformationV2;
    purchasingInformation: PrestagePurchasingInformationV2;
    /**
     * The Base64 encoded PEM Certificate
     */
    anchorCertificates?: Array<string>;
    enrollmentCustomizationId?: string;
    language?: string;
    region?: string;
    autoAdvanceSetup: boolean;
};

