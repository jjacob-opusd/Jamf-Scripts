/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputercheckinService {

    /**
     * Finds the Jamf Pro computer checkin information
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerCheckin(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computercheckin',
        });
    }

    /**
     * Updates the Jamf Pro computer checkin information
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateComputerCheckin(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/computercheckin',
        });
    }

}
