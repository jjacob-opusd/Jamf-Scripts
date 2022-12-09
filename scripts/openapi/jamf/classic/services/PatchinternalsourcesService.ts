/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchinternalsourcesService {

    /**
     * Finds all patch internal sources
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchInternalSources(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchinternalsources',
        });
    }

    /**
     * Finds a patch internal source by ID
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchInternalSourcesById({
        id,
    }: {
        /**
         * ID value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchinternalsources/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds the first patch internal source with the name provided
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchInternalSourcesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchinternalsources/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
