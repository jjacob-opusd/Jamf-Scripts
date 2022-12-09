/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SessionDetails } from './SessionDetails.ts';

/**
 * Sessions search result
 */
export type SessionDetailsSearchResults = {
    totalCount?: number;
    results?: Array<SessionDetails>;
};

