/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiErrorCause } from './ApiErrorCause.ts';

export type InventoryPreloadCsvValidationErrorCause = (ApiErrorCause & {
    value?: string;
    serialNumber?: string;
    line?: number;
    fieldSize?: number;
    deviceType?: string;
});

