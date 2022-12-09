/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AdvancedmobiledevicesearchesService {

    /**
     * Finds all advanced mobile device searches
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAdvancedMobileDeviceSearches(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/advancedmobiledevicesearches',
        });
    }

    /**
     * Deletes a mobile device search by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteAdvancedMobileDeviceSearchById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/advancedmobiledevicesearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device searches by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAdvancedMobileDeviceSearchesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/advancedmobiledevicesearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new advanced mobile device search by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createAdvancedMobileDeviceSearchById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/advancedmobiledevicesearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing advanced mobile device search by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateAdvancedMobileDeviceSearchById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/advancedmobiledevicesearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device searches by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceSearchesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/advancedmobiledevicesearches/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
