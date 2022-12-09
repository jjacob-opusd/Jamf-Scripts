/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class BuildingsService {

    /**
     * Finds all buildings
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findBuildings(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/buildings',
        });
    }

    /**
     * Deletes a building by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteBuildingById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/buildings/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds buildings by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findBuildingsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/buildings/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new building by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createBuildingById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/buildings/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing building by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateBuildingById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/buildings/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds buildings by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findBuildingsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/buildings/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
