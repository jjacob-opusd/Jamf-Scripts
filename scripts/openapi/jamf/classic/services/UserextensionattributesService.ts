/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class UserextensionattributesService {

    /**
     * Finds all user extension attributes
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUserextensionattributes(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/userextensionattributes',
        });
    }

    /**
     * Deletes a user extension attribute by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteUserextensionattributeById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/userextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds user extension attributes by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUserextensionattributesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/userextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new user extension attribute by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createUserextensionattributeById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/userextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing user extension attribute by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateUserextensionattributeById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/userextensionattributes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds user extension attributes by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUserextensionattributesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/userextensionattributes/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
