/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RedeployJamfManagementFrameworkResponse } from '../models/RedeployJamfManagementFrameworkResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfManagementFrameworkService {

    /**
     * Redeploy Jamf Management Framework
     *
     * Redeploys the Jamf Management Framework for enrolled device
     *
     * @returns RedeployJamfManagementFrameworkResponse Command successfully queued to redeploy the Jamf Managment Framework
     * @throws ApiError
     */
    public static postV1JamfManagementFrameworkRedeploy({
        id,
    }: {
        /**
         * instance id of computer
         */
        id: string,
    }): CancelablePromise<RedeployJamfManagementFrameworkResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/jamf-management-framework/redeploy/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Computer with given id does not exist`,
            },
        });
    }

}
