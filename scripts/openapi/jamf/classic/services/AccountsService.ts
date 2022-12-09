/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AccountsService {

    /**
     * Finds all accounts
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAccounts(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts',
        });
    }

    /**
     * Deletes a group by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteGroupById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/groupid/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds groups by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findGroupsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/groupid/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new group by id
     * You cannot create an LDAP group with a POST.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createGroupById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/groupid/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing group by id
     * You cannot change information for an LDAP group with a PUT.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateGroupById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/groupid/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds groups by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findGroupsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/groupname/{name}',
            path: {
                'name': name,
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
            url: '/accounts/userid/{id}',
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
            url: '/accounts/userid/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new user by id
     * You cannot create an LDAP account or assign a password with a POST.
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
            url: '/accounts/userid/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing user by id
     * You cannot change information in an LDAP account or change a password with a PUT.
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
            url: '/accounts/userid/{id}',
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
            url: '/accounts/username/{name}',
            path: {
                'name': name,
            },
        });
    }

}
