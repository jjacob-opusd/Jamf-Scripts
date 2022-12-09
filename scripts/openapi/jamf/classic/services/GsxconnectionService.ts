/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class GsxconnectionService {

    /**
     * Finds the Jamf Pro GSX connection information
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findGsxConnection(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gsxconnection',
        });
    }

    /**
     * Updates the Jamf Pro GSX connection information
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateGsxConnection(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/gsxconnection',
        });
    }

}
