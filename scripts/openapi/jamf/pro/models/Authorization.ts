/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountGroup } from './AccountGroup.ts';
import type { AuthAccount } from './AuthAccount.ts';
import type { Site } from './Site.ts';

export type Authorization = {
    account?: AuthAccount;
    accountGroups?: Array<AccountGroup>;
    sites?: Array<Site>;
    authenticationType?: 'JSS' | 'LDAP' | 'SAML' | 'INVITE' | 'OAUTH' | 'DEVICE_SIGNATURE' | 'CLOUD_CONNECTOR' | 'SYSTEM_ACCOUNT';
};

