/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RemoteAdministrationResponse } from './RemoteAdministrationResponse.ts';

/**
 * A list with Remote administration configurations
 */
export type RemoteAdministrationSearchResults = {
    totalCount?: number;
    results?: Array<RemoteAdministrationResponse>;
};

