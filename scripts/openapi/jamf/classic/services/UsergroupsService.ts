/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class UsergroupsService {

    /**
     * Finds all user groups
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUserGroups(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/usergroups',
        });
    }

    /**
     * Deletes user groups by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteUserGroupsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/usergroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds user groups by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUserGroupsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/usergroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates user groups by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createUserGroupsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/usergroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates user groups by id
     * PUT also works with a name. One or more users can be added by using <user_additions> instead of <users>.  One or more users can be deleted by using <user_deletions> instead of <users>
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateUserGroupsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/usergroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds user groups by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findUserGroupsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/usergroups/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
