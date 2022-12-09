/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class RestrictedsoftwareService {

    /**
     * Finds all restricted software
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findRestrictedSoftware(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/restrictedsoftware',
        });
    }

    /**
     * Deletes a restricted software by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteRestrictedSoftwareById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/restrictedsoftware/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds restricted software by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findRestrictedSoftwareById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/restrictedsoftware/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new restricted software by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createRestrictedSoftwareById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/restrictedsoftware/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing restricted software by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateRestrictedSoftwareById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/restrictedsoftware/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds restricted software by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findRestrictedSoftwareByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/restrictedsoftware/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
