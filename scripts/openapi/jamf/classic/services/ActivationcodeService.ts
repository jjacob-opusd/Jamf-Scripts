/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ActivationcodeService {

    /**
     * Finds the Jamf Pro activation code
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findactivationcode(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activationcode',
        });
    }

    /**
     * Updates the Jamf Pro activation code
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateActivationCode(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/activationcode',
        });
    }

}
