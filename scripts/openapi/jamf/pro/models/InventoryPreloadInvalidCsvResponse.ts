/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InventoryPreloadCsvError } from './InventoryPreloadCsvError.ts';

export type InventoryPreloadInvalidCsvResponse = {
    httpsStatus?: number;
    errors?: Array<InventoryPreloadCsvError>;
};

