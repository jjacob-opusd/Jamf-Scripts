/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SavedsearchesService {

    /**
     * Finds all saved searches (deprecated).  advancedcomputersearches and advancedmobiledevicesearches should be used instead of savedsearches.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findSavedSearches(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/savedsearches',
        });
    }

    /**
     * Finds saved searches by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findSavedSearchesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/savedsearches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds saved searches by name
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findSavedSearchesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/savedsearches/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
