/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ComputerCertificate = {
    commonName?: string;
    identity?: boolean;
    expirationDate?: string;
    username?: string;
    lifecycleStatus?: 'ACTIVE' | 'INACTIVE';
    certificateStatus?: 'EXPIRING' | 'EXPIRED' | 'REVOKED' | 'PENDING_REVOKE' | 'ISSUED';
    subjectName?: string;
    serialNumber?: string;
    sha1Fingerprint?: string;
    issuedDate?: string;
};

