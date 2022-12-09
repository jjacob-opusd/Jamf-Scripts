/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AdvancedcomputersearchesService {

    /**
     * Finds all advanced computer searches
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAdvancedComputerSearches(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/advancedcomputersearches',
        });
    }

    /**
     * Deletes a computer search by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteAdvancedComputerSearchById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/advancedcomputersearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds computer searches by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAdvancedComputerSearchesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/advancedcomputersearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new advanced computer search by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createAdvancedComputerSearchgById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/advancedcomputersearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing advanced computer search by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateAdvancedComputerSearchById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/advancedcomputersearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds computer searches by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerSearchesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/advancedcomputersearches/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
