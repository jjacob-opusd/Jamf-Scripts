/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StaticUserGroup } from '../models/StaticUserGroup.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class StaticUserGroupsPreviewService {

    /**
     * Return a list of all Static User Groups
     *
     * Returns a list of all static user groups.
     *
     * @returns StaticUserGroup Success
     * @throws ApiError
     */
    public static getV1StaticUserGroups(): CancelablePromise<Array<StaticUserGroup>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/static-user-groups',
        });
    }

    /**
     * Return a specific Static User Group by id
     *
     * Returns a specific static user group by id.
     *
     * @returns StaticUserGroup Success
     * @throws ApiError
     */
    public static getV1StaticUserGroups1({
        id,
    }: {
        /**
         * Instance id of static user group record
         */
        id: number,
    }): CancelablePromise<StaticUserGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/static-user-groups/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified static user group object does not exist.`,
            },
        });
    }

}
