/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class DistributionpointsService {

    /**
     * Finds all distribution points
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDistributionPoints(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/distributionpoints',
        });
    }

    /**
     * Deletes a distribution point by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteDistributionPointById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/distributionpoints/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds distribution points by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDistributionPointsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/distributionpoints/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new distribution point by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createDistributionPointById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/distributionpoints/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing distribution point by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateDistributionPointById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/distributionpoints/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds distribution points by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDistributionPointsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/distributionpoints/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
