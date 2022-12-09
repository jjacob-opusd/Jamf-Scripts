/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ScriptsService {

    /**
     * Finds all scripts
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findScripts(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/scripts',
        });
    }

    /**
     * Deletes a script by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteScriptById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/scripts/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds scripts by id
     * script_contents_encoded is the equivalent of script_contents, but it has been Base 64 encoded.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findScriptsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/scripts/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new script by id
     * Generally only one of script_contents_encoded and script_contents should be submitted.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createScriptById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/scripts/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing script by id
     * Generally only one of script_contents_encoded and script_contents should be submitted.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateScriptById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/scripts/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds scripts by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findScriptsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/scripts/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
