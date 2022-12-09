/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryPreloadExtensionAttribute } from './InventoryPreloadExtensionAttribute.ts';

export type InventoryPreloadRecord = {
    readonly id?: number;
    serialNumber: string;
    deviceType: 'Computer' | 'Mobile Device' | 'Unknown';
    username?: string;
    fullName?: string;
    emailAddress?: string;
    phoneNumber?: string;
    position?: string;
    department?: string;
    building?: string;
    room?: string;
    poNumber?: string;
    poDate?: string;
    warrantyExpiration?: string;
    appleCareId?: string;
    lifeExpectancy?: string;
    purchasePrice?: string;
    purchasingContact?: string;
    purchasingAccount?: string;
    leaseExpiration?: string;
    barCode1?: string;
    barCode2?: string;
    assetTag?: string;
    vendor?: string;
    extensionAttributes?: Array<InventoryPreloadExtensionAttribute>;
};

