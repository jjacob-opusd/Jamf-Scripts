/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class IbeaconsService {

    /**
     * Finds all iBeacon regions
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findIBeacons(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ibeacons',
        });
    }

    /**
     * Deletes an iBeacon region by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteIBeaconById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ibeacons/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds iBeacon regions by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findIBeaconsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ibeacons/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new iBeacon region by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createIBeaconById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ibeacons/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing iBeacon region by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateIBeaconById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ibeacons/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds iBeacon regions by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findIBeaconsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ibeacons/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
