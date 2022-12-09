/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyProperties } from '../models/PolicyProperties.ts';
import type { PolicyPropertiesV1 } from '../models/PolicyPropertiesV1.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PoliciesPreviewService {

    /**
     * @deprecated
     * Get Policy Properties object
     *
     * Gets `Policy Properties` object.
     *
     * @returns PolicyProperties Successful response
     * @throws ApiError
     */
    public static getSettingsObjPolicyProperties(): CancelablePromise<PolicyProperties> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/obj/policyProperties',
        });
    }

    /**
     * @deprecated
     * Update Policy Properties object
     *
     * Update Policy Properties object
     *
     * @returns PolicyProperties Policy Properties was updated
     * @throws ApiError
     */
    public static putSettingsObjPolicyProperties({
        requestBody,
    }: {
        /**
         * Policy Properties object to update
         */
        requestBody: PolicyProperties,
    }): CancelablePromise<PolicyProperties> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/settings/obj/policyProperties',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Policy Properties object
     *
     * Gets `Policy Properties` object.
     *
     * @returns PolicyPropertiesV1 Successful response
     * @throws ApiError
     */
    public static getV1PolicyProperties(): CancelablePromise<PolicyPropertiesV1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/policy-properties',
        });
    }

    /**
     * Update Policy Properties object
     *
     * Update Policy Properties object
     *
     * @returns PolicyPropertiesV1 Policy Properties was updated
     * @throws ApiError
     */
    public static putV1PolicyProperties({
        requestBody,
    }: {
        /**
         * Policy Properties object to update
         */
        requestBody: PolicyPropertiesV1,
    }): CancelablePromise<PolicyPropertiesV1> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/policy-properties',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
