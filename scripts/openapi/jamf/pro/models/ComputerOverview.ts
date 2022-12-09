/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerLocation } from './ComputerLocation.ts';

export type ComputerOverview = {
    id?: string;
    location?: ComputerLocation;
    name?: string;
    udid?: string;
    serialNumber?: string;
    lastContactDate?: string;
    lastReportDate?: string;
    lastEnrolledDate?: string;
    operatingSystemVersion?: string;
    operatingSystemBuild?: string;
    ipAddress?: string;
    macAddress?: string;
    assetTag?: string;
    modelIdentifier?: string;
    mdmAccessRights?: number;
    isManaged?: boolean;
    readonly managementId?: string;
};

