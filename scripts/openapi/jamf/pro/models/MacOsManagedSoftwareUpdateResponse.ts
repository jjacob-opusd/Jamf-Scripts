/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiErrorCause } from './ApiErrorCause.ts';
import type { HrefResponse } from './HrefResponse.ts';

export type MacOsManagedSoftwareUpdateResponse = {
    responses?: Array<HrefResponse>;
    errors?: Array<ApiErrorCause>;
};

