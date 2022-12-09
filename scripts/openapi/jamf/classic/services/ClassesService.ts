/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ClassesService {

    /**
     * Finds all classes
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findClasses(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/classes',
        });
    }

    /**
     * Deletes a class by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteClassById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/classes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds classes by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findClassesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/classes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new class by id.  The mobile device list is not used in the POST, the mobile device group is used instead.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createClassById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/classes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing class by id.  The mobile device list is not used in the POST, the mobile device group is used instead.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateClassById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/classes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds classes by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findClassesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/classes/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
