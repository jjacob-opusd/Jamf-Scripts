/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdminAccount } from './AdminAccount.ts';
import type { Recipients } from './Recipients.ts';

export type VppTokenSubscription = {
    id?: number;
    name?: string;
    enabled?: boolean;
    recipients?: Recipients;
    adminAccounts?: Array<AdminAccount>;
    siteID?: number;
    siteName?: string;
};

