/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CertificateKey } from './CertificateKey.ts';

export type SsoKeystoreResponse = {
    key?: string;
    keys?: Array<CertificateKey>;
    type?: 'PKCS12' | 'JKS' | 'NONE';
    keystoreSetupType?: 'NONE' | 'UPLOADED' | 'GENERATED';
    keystoreFileName?: string;
};

