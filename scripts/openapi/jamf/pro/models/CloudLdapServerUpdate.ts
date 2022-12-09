/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CloudLdapKeystoreFile } from './CloudLdapKeystoreFile.ts';

/**
 * A Cloud Identity Provider LDAP server configuration for updates
 */
export type CloudLdapServerUpdate = {
    serverUrl: string;
    enabled: boolean;
    domainName: string;
    port: number;
    keystore?: CloudLdapKeystoreFile;
    connectionTimeout: number;
    searchTimeout: number;
    useWildcards: boolean;
    connectionType: 'LDAPS' | 'START_TLS';
};

