/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountGroup } from './AccountGroup.ts';
import type { AuthAccountV1 } from './AuthAccountV1.ts';
import type { V1Site } from './V1Site.ts';

export type AuthorizationV1 = {
    account?: AuthAccountV1;
    accountGroups?: Array<AccountGroup>;
    sites?: Array<V1Site>;
    authenticationType?: 'JSS' | 'LDAP' | 'SAML' | 'INVITE' | 'OAUTH' | 'DEVICE_SIGNATURE' | 'CLOUD_CONNECTOR' | 'SYSTEM_ACCOUNT';
};

