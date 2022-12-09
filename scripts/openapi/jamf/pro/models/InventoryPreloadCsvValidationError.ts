/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryPreloadCsvValidationErrorCause } from './InventoryPreloadCsvValidationErrorCause.ts';

export type InventoryPreloadCsvValidationError = {
    /**
     * HTTP status of the response
     */
    httpStatus?: number;
    errors?: Array<InventoryPreloadCsvValidationErrorCause>;
};

