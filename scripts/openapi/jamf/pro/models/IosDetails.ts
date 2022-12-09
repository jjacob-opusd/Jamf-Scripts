/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigurationProfile } from './ConfigurationProfile.ts';
import type { IdAndName } from './IdAndName.ts';
import type { MobileDeviceApplication } from './MobileDeviceApplication.ts';
import type { MobileDeviceAttachment } from './MobileDeviceAttachment.ts';
import type { MobileDeviceCertificateV1 } from './MobileDeviceCertificateV1.ts';
import type { MobileDeviceEbook } from './MobileDeviceEbook.ts';
import type { Network } from './Network.ts';
import type { ProvisioningProfile } from './ProvisioningProfile.ts';
import type { Purchasing } from './Purchasing.ts';
import type { Security } from './Security.ts';

/**
 * will be populated if the type is ios.
 */
export type IosDetails = {
    model?: string;
    modelIdentifier?: string;
    modelNumber?: string;
    isSupervised?: boolean;
    batteryLevel?: number;
    lastBackupTimestamp?: string;
    capacityMb?: number;
    availableMb?: number;
    percentageUsed?: number;
    isShared?: boolean;
    isDeviceLocatorServiceEnabled?: boolean;
    isDoNotDisturbEnabled?: boolean;
    isCloudBackupEnabled?: boolean;
    lastCloudBackupTimestamp?: string;
    isLocationServicesEnabled?: boolean;
    isITunesStoreAccountActive?: boolean;
    isBleCapable?: boolean;
    computer?: IdAndName;
    purchasing?: Purchasing;
    security?: Security;
    network?: Network;
    applications?: Array<MobileDeviceApplication>;
    certificates?: Array<MobileDeviceCertificateV1>;
    ebooks?: Array<MobileDeviceEbook>;
    configurationProfiles?: Array<ConfigurationProfile>;
    provisioningProfiles?: Array<ProvisioningProfile>;
    attachments?: Array<MobileDeviceAttachment>;
};

