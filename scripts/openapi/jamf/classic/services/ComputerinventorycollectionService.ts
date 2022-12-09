/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerinventorycollectionService {

    /**
     * Finds the Jamf Pro computer inventory collection information
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findcomputerinventorycollection(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerinventorycollection',
        });
    }

    /**
     * Updates the Jamf Pro computer inventory collection information
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateActivationCode(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/computerinventorycollection',
        });
    }

}
