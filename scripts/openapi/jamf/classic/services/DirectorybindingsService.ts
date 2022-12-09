/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class DirectorybindingsService {

    /**
     * Finds all directory bindings
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDirectoryBindings(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/directorybindings',
        });
    }

    /**
     * Deletes a directory binding by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteDirectoryBindingById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/directorybindings/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds directory bindings by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDirectoryBindingsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/directorybindings/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new directory binding by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createDirectoryBindingById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/directorybindings/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing directory binding by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateDirectoryBindingById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/directorybindings/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds directory bindings by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDirectoryBindingsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/directorybindings/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
