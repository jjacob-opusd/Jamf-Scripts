/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiErrorCause } from './ApiErrorCause.ts';

export type ApiError = {
    /**
     * HTTP status of the response
     */
    httpStatus?: number;
    errors?: Array<ApiErrorCause>;
};

