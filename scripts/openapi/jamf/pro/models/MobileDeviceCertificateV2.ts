/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MobileDeviceCertificateV2 = {
    commonName?: string;
    identity?: boolean;
    expirationDateEpoch?: string;
    subjectName?: string;
    serialNumber?: string;
    sha1Fingerprint?: string;
    issuedDateEpoch?: string;
    certificateStatus?: 'EXPIRING' | 'EXPIRED' | 'REVOKED' | 'PENDING_REVOKE' | 'ISSUED';
    lifecycleStatus?: 'ACTIVE' | 'INACTIVE';
};

