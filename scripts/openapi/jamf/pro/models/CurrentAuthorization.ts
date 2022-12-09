/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrentAccount } from './CurrentAccount.ts';
import type { Site } from './Site.ts';

export type CurrentAuthorization = {
    account?: CurrentAccount;
    sites?: Array<Site>;
    authenticationType?: 'JSS' | 'LDAP' | 'SAML' | 'INVITE' | 'OAUTH' | 'DEVICE_SIGNATURE' | 'CLOUD_CONNECTOR' | 'SYSTEM_ACCOUNT';
};

