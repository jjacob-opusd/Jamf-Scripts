/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CertificateKey } from './CertificateKey.ts';

export type SsoKeystoreCertParseResponse = {
    key?: string;
    keys?: Array<CertificateKey>;
    type?: 'PKCS12' | 'JKS' | 'NONE';
    keystoreSetupType?: 'NONE' | 'UPLOADED' | 'GENERATED';
    keystoreFile?: Array<string>;
    keystoreFileName?: string;
};

