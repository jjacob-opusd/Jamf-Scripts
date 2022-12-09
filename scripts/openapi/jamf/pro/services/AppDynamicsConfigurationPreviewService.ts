/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppDynamicsConfig } from '../models/AppDynamicsConfig.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AppDynamicsConfigurationPreviewService {

    /**
     * Get Application Dynamics Config object
     *
     * Gets `AppDynamicsConfig` object.
     * Details for using the response as script configuration are available in the official documentation - https://docs.appdynamics.com/display/PRO45/Configure+the+JavaScript+Agent
     *
     * @returns AppDynamicsConfig Successful response
     * @throws ApiError
     */
    public static getV1AppDynamicsScriptConfiguration(): CancelablePromise<AppDynamicsConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/app-dynamics/script-configuration',
            errors: {
                400: `AppDynamics script configuration may be obtained only when AppDynamics monitoring tool is enabled.`,
            },
        });
    }

}
