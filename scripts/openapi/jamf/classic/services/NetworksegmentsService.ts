/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class NetworksegmentsService {

    /**
     * Finds all network segments
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findNetworkSegments(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/networksegments',
        });
    }

    /**
     * Deletes a network segment by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteNetworkSegmentById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/networksegments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds network segments by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findNetworkSegmentsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/networksegments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new network segment by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createNetworkSegmentById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/networksegments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing network segment by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateNetworkSegmentById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/networksegments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds network segments by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findNetworkSegmentsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/networksegments/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
