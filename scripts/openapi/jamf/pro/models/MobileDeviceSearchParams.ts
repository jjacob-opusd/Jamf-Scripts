/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderBy } from './OrderBy.ts';

export type MobileDeviceSearchParams = {
    pageNumber?: number;
    pageSize?: number;
    isLoadToEnd?: boolean;
    orderBy?: Array<OrderBy>;
    udid?: string;
    macAddress?: string;
    name?: string;
    serialNumber?: string;
    osType?: string;
    isManaged?: boolean;
    excludedIds?: Array<number>;
};

