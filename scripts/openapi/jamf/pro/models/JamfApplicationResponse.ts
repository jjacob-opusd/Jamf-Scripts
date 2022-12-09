/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JamfPackageResponse } from './JamfPackageResponse.ts';

export type JamfApplicationResponse = {
    displayName?: string;
    releaseHistoryUrl?: string;
    artifacts?: Array<JamfPackageResponse>;
};

