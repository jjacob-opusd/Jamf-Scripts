/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SmartSearchCriterion } from './SmartSearchCriterion.ts';

export type AdvancedSearch = {
    readonly id?: string;
    name: string;
    criteria?: Array<SmartSearchCriterion>;
    displayFields?: Array<string>;
    siteId?: string | null;
};

