/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassicLdapMappings } from '../models/ClassicLdapMappings.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ClassicLdapService {

    /**
     * Get mappings for OnPrem Ldap configuration with given id.
     * Get mappings for OnPrem Ldap configuration with given id.
     * @returns ClassicLdapMappings OnPrem Ldap mappings returned.
     * @throws ApiError
     */
    public static getV1ClassicLdap({
        id,
    }: {
        /**
         * OnPrem Ldap identifier
         */
        id: string,
    }): CancelablePromise<ClassicLdapMappings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/classic-ldap/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Id can only be a number.`,
                404: `Specified OnPrem Ldap configuration does not exist.`,
            },
        });
    }

}
