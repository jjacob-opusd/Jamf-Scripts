/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LdapGroupSearchResults } from '../models/LdapGroupSearchResults.ts';
import type { LdapServer } from '../models/LdapServer.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class LdapService {

    /**
     * Retrieve the configured access groups that contain the text in the search param
     *
     * Retrieves the configured access groups that contain the text in the searchParam.
     * @returns LdapGroupSearchResults Successful search.
     * @throws ApiError
     */
    public static getLdapGroups({
        q = 'null',
    }: {
        /**
         * Will perform a "contains" search on the names of access groups
         */
        q?: string,
    }): CancelablePromise<LdapGroupSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ldap/groups',
            query: {
                'q': q,
            },
        });
    }

    /**
     * Retrieve all Servers including LDAP and Cloud Identity Providers.
     *
     * Retrieve all Servers including LDAP and Cloud Identity Providers.
     * @returns LdapServer Successfully completed.
     * @throws ApiError
     */
    public static getLdapServers(): CancelablePromise<Array<LdapServer>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ldap/servers',
        });
    }

    /**
     * Retrieve the configured access groups that contain the text in the search param
     *
     * Retrieves the configured access groups that contain the text in the searchParam.
     * @returns LdapGroupSearchResults Successful search.
     * @throws ApiError
     */
    public static getV1LdapGroups({
        q = 'null',
    }: {
        /**
         * Will perform a "contains" search on the names of access groups
         */
        q?: string,
    }): CancelablePromise<LdapGroupSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/ldap/groups',
            query: {
                'q': q,
            },
        });
    }

    /**
     * Retrieve all LDAP Servers.
     *
     * Retrieves all not migrated, LDAP Servers.
     * @returns LdapServer Successfully completed.
     * @throws ApiError
     */
    public static getV1LdapLdapServers(): CancelablePromise<Array<LdapServer>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/ldap/ldap-servers',
        });
    }

    /**
     * Retrieve all Servers including LDAP and Cloud Identity Providers.
     *
     * Retrieve all active Servers including LDAP and Cloud Identity Providers.
     * @returns LdapServer Successfully completed.
     * @throws ApiError
     */
    public static getV1LdapServers(): CancelablePromise<Array<LdapServer>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/ldap/servers',
        });
    }

}
