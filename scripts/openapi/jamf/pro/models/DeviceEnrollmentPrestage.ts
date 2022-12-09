/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocationInformation } from './LocationInformation.ts';
import type { PrestagePurchasingInformation } from './PrestagePurchasingInformation.ts';

export type DeviceEnrollmentPrestage = {
    displayName: string;
    isMandatory: boolean;
    isMdmRemovable: boolean;
    supportPhoneNumber: string;
    supportEmailAddress: string;
    department: string;
    isDefaultPrestage: boolean;
    enrollmentSiteId: number;
    isKeepExistingSiteMembership: boolean;
    isKeepExistingLocationInformation: boolean;
    isRequireAuthentication: boolean;
    authenticationPrompt: string;
    isPreventActivationLock: boolean;
    isEnableDeviceBasedActivationLock: boolean;
    deviceEnrollmentProgramInstanceId: number;
    skipSetupItems?: Record<string, boolean>;
    locationInformation: LocationInformation;
    purchasingInformation: PrestagePurchasingInformation;
    /**
     * The Base64 encoded PEM Certificate
     */
    anchorCertificates?: Array<string>;
    enrollmentCustomizationId?: number;
};

