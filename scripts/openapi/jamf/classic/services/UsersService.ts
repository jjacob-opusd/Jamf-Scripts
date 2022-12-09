/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class UsersService {

    /**
     * Finds all users
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUsers(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }

    /**
     * Finds users by email address
     * Because email addresses may not be unique, this operation returns a list of users.  You cannot PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUsersByEmailAddress({
        email,
    }: {
        /**
         * Email address to filter by
         */
        email: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/email/{email}',
            path: {
                'email': email,
            },
        });
    }

    /**
     * Deletes a user by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteUserById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds users by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUsersById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new user by id
     * POST cannot be used to add computers, mobile devices, peripherals, vpp assignments to a user.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createUserById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing user by id
     * PUT cannot be used to add computers, mobile devices, peripherals, vpp assignments to a user.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateUserById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds users by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUsersByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
