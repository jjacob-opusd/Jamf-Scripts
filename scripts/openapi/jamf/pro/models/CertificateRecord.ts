/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Signature } from './Signature.ts';

export type CertificateRecord = {
    subjectX500Principal?: string;
    issuerX500Principal?: string;
    serialNumber?: string;
    version?: number;
    notAfter?: number;
    notBefore?: number;
    signature?: Signature;
    keyUsage?: Array<string>;
    keyUsageExtended?: Array<string>;
    sha1Fingerprint?: string;
    sha256Fingerprint?: string;
};

