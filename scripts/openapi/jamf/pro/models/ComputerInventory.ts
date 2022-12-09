/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerApplication } from './ComputerApplication.ts';
import type { ComputerAttachment } from './ComputerAttachment.ts';
import type { ComputerCertificate } from './ComputerCertificate.ts';
import type { ComputerConfigurationProfile } from './ComputerConfigurationProfile.ts';
import type { ComputerContentCaching } from './ComputerContentCaching.ts';
import type { ComputerDiskEncryption } from './ComputerDiskEncryption.ts';
import type { ComputerExtensionAttribute } from './ComputerExtensionAttribute.ts';
import type { ComputerFont } from './ComputerFont.ts';
import type { ComputerGeneral } from './ComputerGeneral.ts';
import type { ComputerHardware } from './ComputerHardware.ts';
import type { ComputerIbeacon } from './ComputerIbeacon.ts';
import type { ComputerLicensedSoftware } from './ComputerLicensedSoftware.ts';
import type { ComputerLocalUserAccount } from './ComputerLocalUserAccount.ts';
import type { ComputerOperatingSystem } from './ComputerOperatingSystem.ts';
import type { ComputerPackageReceipts } from './ComputerPackageReceipts.ts';
import type { ComputerPlugin } from './ComputerPlugin.ts';
import type { ComputerPrinter } from './ComputerPrinter.ts';
import type { ComputerPurchase } from './ComputerPurchase.ts';
import type { ComputerSecurity } from './ComputerSecurity.ts';
import type { ComputerService } from './ComputerService.ts';
import type { ComputerSoftwareUpdate } from './ComputerSoftwareUpdate.ts';
import type { ComputerStorage } from './ComputerStorage.ts';
import type { ComputerUserAndLocation } from './ComputerUserAndLocation.ts';
import type { GroupMembership } from './GroupMembership.ts';

export type ComputerInventory = {
    readonly id?: string;
    udid?: string;
    general?: ComputerGeneral;
    diskEncryption?: ComputerDiskEncryption;
    purchasing?: ComputerPurchase;
    applications?: Array<ComputerApplication>;
    storage?: ComputerStorage;
    userAndLocation?: ComputerUserAndLocation;
    configurationProfiles?: Array<ComputerConfigurationProfile>;
    printers?: Array<ComputerPrinter>;
    services?: Array<ComputerService>;
    hardware?: ComputerHardware;
    localUserAccounts?: Array<ComputerLocalUserAccount>;
    certificates?: Array<ComputerCertificate>;
    attachments?: Array<ComputerAttachment>;
    plugins?: Array<ComputerPlugin>;
    packageReceipts?: ComputerPackageReceipts;
    fonts?: Array<ComputerFont>;
    security?: ComputerSecurity;
    operatingSystem?: ComputerOperatingSystem;
    licensedSoftware?: Array<ComputerLicensedSoftware>;
    ibeacons?: Array<ComputerIbeacon>;
    softwareUpdates?: Array<ComputerSoftwareUpdate>;
    extensionAttributes?: Array<ComputerExtensionAttribute>;
    contentCaching?: ComputerContentCaching;
    groupMemberships?: Array<GroupMembership>;
};

