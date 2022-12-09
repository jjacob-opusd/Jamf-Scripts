/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JssuserService {

    /**
     * Returns basic information about Jamf Pro, as well as privileges of the person requesting the resource.  Deprecated.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findjssuser(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jssuser',
        });
    }

}
