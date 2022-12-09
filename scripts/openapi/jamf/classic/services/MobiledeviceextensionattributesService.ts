/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobiledeviceextensionattributesService {

    /**
     * Finds all mobile device extension attributes
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobiledeviceextensionattributes(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceextensionattributes',
        });
    }

    /**
     * Deletes a mobile device extension attribute by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteMobiledeviceextensionattributeById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mobiledeviceextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device extension attributes by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobiledeviceextensionattributesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new mobile device extension attribute by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobiledeviceextensionattributeById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledeviceextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing mobile device extension attribute by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateMobiledeviceextensionattributeById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mobiledeviceextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobiledeviceextensionattributes by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobiledeviceextensionattributesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceextensionattributes/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
