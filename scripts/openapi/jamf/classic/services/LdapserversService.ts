/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class LdapserversService {

    /**
     * Finds all ldapservers
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findLdapServers(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ldapservers',
        });
    }

    /**
     * Deletes a ldap server by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteLdapServerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ldapservers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds ldap servers by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findLdapServersById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ldapservers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new ldap server by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createLdapServerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ldapservers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing ldap server by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateLdapServerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ldapservers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display information for matching groups for an ldap server
     * Displays information about matching groups for an ldap server specified with the {id} parameter. Server lookup by name is also supported.  For example, /ldapservers/id/3/group/Staff or /ldapservers/name/ADServer/group/ITStaff.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findLdapServerGroup({
        id,
        group,
    }: {
        /**
         * Server Id to filter by
         */
        id: string,
        /**
         * Group to filter by
         */
        group: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ldapservers/id/{id}/group/{group}',
            path: {
                'id': id,
                'group': group,
            },
        });
    }

    /**
     * Display information about user membership in a group for an ldap server
     * Displays information about user membership in a group for an ldap server specified with the {id} parameter. Exact matches are used for group and user. Multiple users separated by a comma are allowed.  Server lookup by name is also supported.  For example, /ldapservers/id/3/group/staff/user/Fred, /ldapservers/name/ADServer/group/staff/user/Sam or /ldapservers/name/ADServer/group/staff/user/Fred,Sam.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findLdapServerGroupUser({
        id,
        group,
        user,
    }: {
        /**
         * Server Id to filter by
         */
        id: string,
        /**
         * Group to filter by
         */
        group: string,
        /**
         * User to filter by
         */
        user: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ldapservers/id/{id}/group/{group}/user/{user}',
            path: {
                'id': id,
                'group': group,
                'user': user,
            },
        });
    }

    /**
     * Display information for matching users for an ldap server
     * Displays information about matching users for an ldap server specified with the {id} parameter. Server lookup by name is also supported.  For example, /ldapservers/id/3/user/Fred or /ldapservers/name/ADServer/user/Sam.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findLdapServerUser({
        id,
        user,
    }: {
        /**
         * Server Id to filter by
         */
        id: string,
        /**
         * User to filter by
         */
        user: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ldapservers/id/{id}/user/{user}',
            path: {
                'id': id,
                'user': user,
            },
        });
    }

    /**
     * Finds ldap servers by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findLdapServersByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ldapservers/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
