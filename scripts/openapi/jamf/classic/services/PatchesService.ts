/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchesService {

    /**
     * Finds all patches (Deprecated)
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatches(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patches',
        });
    }

    /**
     * Deletes a Patch Software Title by ID (Deprecated)
     * You can DELETE using the resource URLs with parameters of {name}.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteSoftwareTitlesById({
        id,
    }: {
        /**
         * Id value to update by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/patches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds patches by ID (Deprecated)
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchesById({
        id,
    }: {
        /**
         * ID value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates new patches by ID (Deprecated)
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createPatchesById({
        id,
    }: {
        /**
         * ID value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates a Patch Software Title by ID (Deprecated)
     * You can PUT using the resource URLs with parameters of {id}.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateSoftwareTitlesById({
        id,
    }: {
        /**
         * Id value to update by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/patches/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display computers on a specific version (Deprecated)
     * Displays information specified with the {version} parameter for a patch specified with the {id} parameter. Lookup by name is also supported.  For example, /patches/id/3/version/45.0.2 or /patches/name/Mozilla Firefox/version/45.0.2. A version number of 'Latest' and 'Unknown' will also work.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputersByTitleVersion({
        id,
        version = 'Latest',
    }: {
        /**
         * Id to filter by
         */
        id: string,
        /**
         * Version number to filter by
         */
        version?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patches/id/{id}/version/{version}',
            path: {
                'id': id,
                'version': version,
            },
        });
    }

    /**
     * Finds the first patch with the name provided (Deprecated)
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patches/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
