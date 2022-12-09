/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CertificateIdentityV2 = {
    filename?: string;
    keystorePassword?: string;
    /**
     * The base 64 encoded certificate.
     */
    identityKeystore?: string;
    /**
     * The md5 checksum of the certificate file. Intended to be used in verifification the cert being used to sign QuickAdd packages.
     */
    readonly md5Sum?: string;
};

