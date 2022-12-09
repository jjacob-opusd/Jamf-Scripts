/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerextensionattributesService {

    /**
     * Finds all computer extension attributes
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerextensionattributes(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerextensionattributes',
        });
    }

    /**
     * Deletes a computer extension attribute by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteComputerextensionattributeById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/computerextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds computer extension attributes by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerextensionattributesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new computer extension attribute by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createComputerextensionattributeById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/computerextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing computer extension attribute by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateComputerextensionattributeById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/computerextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds computer extension attributes by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerextensionattributesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerextensionattributes/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
