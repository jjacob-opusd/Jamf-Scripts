/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CertificateDetails } from './CertificateDetails.ts';
import type { CertificateIdentityV2 } from './CertificateIdentityV2.ts';

export type EnrollmentSettingsV2 = {
    installSingleProfile?: boolean;
    signingMdmProfileEnabled?: boolean;
    mdmSigningCertificate?: CertificateIdentityV2;
    restrictReenrollment?: boolean;
    flushLocationInformation?: boolean;
    flushLocationHistoryInformation?: boolean;
    flushPolicyHistory?: boolean;
    flushExtensionAttributes?: boolean;
    flushMdmCommandsOnReenroll?: 'DELETE_NOTHING' | 'DELETE_ERRORS' | 'DELETE_EVERYTHING_EXCEPT_ACKNOWLEDGED' | 'DELETE_EVERYTHING';
    macOsEnterpriseEnrollmentEnabled?: boolean;
    managementUsername: string;
    managementPassword?: string;
    readonly managementPasswordSet?: boolean;
    passwordType?: 'STATIC' | 'RANDOM';
    randomPasswordLength?: number;
    createManagementAccount?: boolean;
    hideManagementAccount?: boolean;
    allowSshOnlyManagementAccount?: boolean;
    ensureSshRunning?: boolean;
    launchSelfService?: boolean;
    signQuickAdd?: boolean;
    developerCertificateIdentity?: CertificateIdentityV2;
    developerCertificateIdentityDetails?: CertificateDetails;
    mdmSigningCertificateDetails?: CertificateDetails;
    iosEnterpriseEnrollmentEnabled?: boolean;
    iosPersonalEnrollmentEnabled?: boolean;
    personalDeviceEnrollmentType?: 'USERENROLLMENT' | 'PERSONALDEVICEPROFILES';
    accountDrivenUserEnrollmentEnabled?: boolean;
};

