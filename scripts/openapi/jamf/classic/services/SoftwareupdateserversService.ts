/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SoftwareupdateserversService {

    /**
     * Finds all software update servers
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findSoftwareUpdateServers(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/softwareupdateservers',
        });
    }

    /**
     * Deletes a software update server by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteSoftwareUpdateServerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/softwareupdateservers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds software update servers by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findSoftwareUpdateServersById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/softwareupdateservers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new software update server by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createSoftwareUpdateServerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/softwareupdateservers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing software update server by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateSoftwareUpdateServerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/softwareupdateservers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds software update servers by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findSoftwareUpdateServersByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/softwareupdateservers/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
