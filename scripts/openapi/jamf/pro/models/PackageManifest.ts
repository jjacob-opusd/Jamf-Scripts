/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PackageManifest = {
    url: string;
    hash: string;
    hashType: 'MD5' | 'SHA256';
    displayImageUrl?: string;
    fullSizeImageUrl?: string;
    bundleId: string;
    bundleVersion: string;
    subtitle?: string;
    title: string;
    sizeInBytes: number;
};

