/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Filter } from './Filter.ts';
import type { OrderBy } from './OrderBy.ts';

export type SearchPatchPolicyLogParams = {
    pageNumber?: number;
    pageSize?: number;
    orderBy?: Array<OrderBy>;
    filter?: Array<Filter>;
    isLoadToEnd?: boolean;
    patchPolicyId?: number;
    isLatest?: boolean;
};

