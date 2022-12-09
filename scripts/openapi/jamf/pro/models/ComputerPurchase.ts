/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerExtensionAttribute } from './ComputerExtensionAttribute.ts';

export type ComputerPurchase = {
    leased?: boolean;
    purchased?: boolean;
    poNumber?: string;
    poDate?: string;
    vendor?: string;
    warrantyDate?: string;
    appleCareId?: string;
    leaseDate?: string;
    purchasePrice?: string;
    lifeExpectancy?: number;
    purchasingAccount?: string;
    purchasingContact?: string;
    extensionAttributes?: Array<ComputerExtensionAttribute>;
};

