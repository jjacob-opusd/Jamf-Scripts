/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Filter } from './Filter.ts';
import type { OrderBy } from './OrderBy.ts';

export type SearchActivePatchHistoryParams = {
    pageNumber?: number;
    pageSize?: number;
    isLoadToEnd?: boolean;
    softwareTitleID?: number;
    softwareTitleConfigurationID?: number;
    orderBy?: Array<OrderBy>;
    filter?: Array<Filter>;
};

