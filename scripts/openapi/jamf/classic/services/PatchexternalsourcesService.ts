/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchexternalsourcesService {

    /**
     * Finds all patch external sources
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchExternalSources(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchexternalsources',
        });
    }

    /**
     * Finds a patch external source by Id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchExternalSourcesById({
        id,
    }: {
        /**
         * ID value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchexternalsources/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create a new patch external source by Id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createPatchExternalSourcesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patchexternalsources/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates a patch external source by Id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updatePatchExternalSourcesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/patchexternalsources/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds the first patch external source with the name provided
     * You can PUT, POST using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchExternalSourcesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchexternalsources/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
