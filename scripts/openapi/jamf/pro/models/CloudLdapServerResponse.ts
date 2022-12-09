/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CloudLdapKeystore } from './CloudLdapKeystore.ts';

/**
 * A Cloud Identity Provider LDAP server configuration for responses
 */
export type CloudLdapServerResponse = {
    id?: string;
    enabled?: boolean;
    serverUrl?: string;
    domainName?: string;
    port?: number;
    keystore?: CloudLdapKeystore;
    connectionTimeout?: number;
    searchTimeout?: number;
    useWildcards?: boolean;
    connectionType?: 'LDAPS' | 'START_TLS';
};

