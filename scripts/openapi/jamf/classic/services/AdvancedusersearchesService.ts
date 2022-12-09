/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AdvancedusersearchesService {

    /**
     * Finds all advanced user searches
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAdvancedUserSearches(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/advancedusersearches',
        });
    }

    /**
     * Deletes a user search by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteAdvancedUserSearchById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/advancedusersearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds user searches by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAdvancedUserSearchesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/advancedusersearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new advanced user search by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createAdvancedUserSearchgById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/advancedusersearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing advanced user search by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateAdvancedUserSearchById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/advancedusersearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds user searches by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUserSearchesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/advancedusersearches/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
