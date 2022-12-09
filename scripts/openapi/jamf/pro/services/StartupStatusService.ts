/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StartupStatus } from '../models/StartupStatus.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class StartupStatusService {

    /**
     * Retrieve information about application startup
     *
     * Retrieves information about application startup. Current startup operation taking place (if any) and overall startup completion percentage.
     * @returns StartupStatus OK
     * @throws ApiError
     */
    public static getStartupStatus(): CancelablePromise<StartupStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/startup-status',
        });
    }

}
