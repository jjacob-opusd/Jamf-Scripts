/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerExtensionAttribute } from './ComputerExtensionAttribute.ts';
import type { ComputerMdmCapability } from './ComputerMdmCapability.ts';
import type { ComputerRemoteManagement } from './ComputerRemoteManagement.ts';
import type { EnrollmentMethod } from './EnrollmentMethod.ts';
import type { V1Site } from './V1Site.ts';

export type ComputerGeneral = {
    name?: string;
    lastIpAddress?: string;
    lastReportedIp?: string;
    jamfBinaryVersion?: string;
    platform?: string;
    barcode1?: string;
    barcode2?: string;
    assetTag?: string;
    remoteManagement?: ComputerRemoteManagement;
    supervised?: boolean;
    mdmCapable?: ComputerMdmCapability;
    reportDate?: string;
    lastContactTime?: string;
    lastCloudBackupDate?: string;
    lastEnrolledDate?: string;
    mdmProfileExpiration?: string;
    initialEntryDate?: string;
    distributionPoint?: string;
    enrollmentMethod?: EnrollmentMethod;
    site?: V1Site;
    itunesStoreAccountActive?: boolean;
    enrolledViaAutomatedDeviceEnrollment?: boolean;
    userApprovedMdm?: boolean;
    declarativeDeviceManagementEnabled?: boolean;
    extensionAttributes?: Array<ComputerExtensionAttribute>;
};

