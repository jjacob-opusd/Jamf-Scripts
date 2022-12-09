/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CertificateKey } from './CertificateKey.ts';
import type { SsoKeystoreParse } from './SsoKeystoreParse.ts';

export type SsoKeystore = (SsoKeystoreParse & {
    keys?: Array<CertificateKey>;
    key: string;
    password: string;
    type: 'PKCS12' | 'JKS' | 'NONE';
    keystoreSetupType?: 'NONE' | 'UPLOADED' | 'GENERATED';
});

