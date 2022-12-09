/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigurationProfile } from './ConfigurationProfile.ts';
import type { IdAndNameV2 } from './IdAndNameV2.ts';
import type { MobileDeviceApplication } from './MobileDeviceApplication.ts';
import type { MobileDeviceAttachmentV2 } from './MobileDeviceAttachmentV2.ts';
import type { MobileDeviceCertificateV2 } from './MobileDeviceCertificateV2.ts';
import type { MobileDeviceEbook } from './MobileDeviceEbook.ts';
import type { MobileDeviceServiceSubscription } from './MobileDeviceServiceSubscription.ts';
import type { NetworkV2 } from './NetworkV2.ts';
import type { ProvisioningProfile } from './ProvisioningProfile.ts';
import type { PurchasingV2 } from './PurchasingV2.ts';
import type { SecurityV2 } from './SecurityV2.ts';

/**
 * will be populated if the type is ios.
 */
export type IosDetailsV2 = {
    model?: string;
    modelIdentifier?: string;
    modelNumber?: string;
    supervised?: boolean;
    batteryLevel?: number;
    lastBackupTimestamp?: string;
    capacityMb?: number;
    availableMb?: number;
    percentageUsed?: number;
    shared?: boolean;
    deviceLocatorServiceEnabled?: boolean;
    doNotDisturbEnabled?: boolean;
    cloudBackupEnabled?: boolean;
    lastCloudBackupTimestamp?: string;
    locationServicesEnabled?: boolean;
    iTunesStoreAccountActive?: boolean;
    bleCapable?: boolean;
    computer?: IdAndNameV2;
    purchasing?: PurchasingV2;
    security?: SecurityV2;
    network?: NetworkV2;
    serviceSubscriptions?: Array<MobileDeviceServiceSubscription>;
    applications?: Array<MobileDeviceApplication>;
    certificates?: Array<MobileDeviceCertificateV2>;
    ebooks?: Array<MobileDeviceEbook>;
    configurationProfiles?: Array<ConfigurationProfile>;
    provisioningProfiles?: Array<ProvisioningProfile>;
    attachments?: Array<MobileDeviceAttachmentV2>;
};

