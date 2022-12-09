/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryPreloadExtensionAttribute } from './InventoryPreloadExtensionAttribute.ts';

export type InventoryPreloadRecordV2 = {
    readonly id?: string;
    serialNumber: string;
    deviceType: 'Computer' | 'Mobile Device' | 'Unknown';
    username?: string | null;
    fullName?: string | null;
    emailAddress?: string | null;
    phoneNumber?: string | null;
    position?: string | null;
    department?: string | null;
    building?: string | null;
    room?: string | null;
    poNumber?: string | null;
    poDate?: string | null;
    warrantyExpiration?: string | null;
    appleCareId?: string | null;
    lifeExpectancy?: string | null;
    purchasePrice?: string | null;
    purchasingContact?: string | null;
    purchasingAccount?: string | null;
    leaseExpiration?: string | null;
    barCode1?: string | null;
    barCode2?: string | null;
    assetTag?: string | null;
    vendor?: string | null;
    extensionAttributes?: Array<InventoryPreloadExtensionAttribute>;
};

