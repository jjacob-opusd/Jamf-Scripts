/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CloudIdPCommonResponse } from './CloudIdPCommonResponse.ts';

/**
 * A list with Cloud Identity Providers informations about configurations
 */
export type ConfigurationSearchResults = {
    totalCount?: number;
    results?: Array<CloudIdPCommonResponse>;
};

