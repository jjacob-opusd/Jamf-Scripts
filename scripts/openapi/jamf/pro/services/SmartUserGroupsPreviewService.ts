/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecalculationResults } from '../models/RecalculationResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SmartUserGroupsPreviewService {

    /**
     * Recalculate the smart group for the given id and then return the ids for the users in the smart group
     *
     * Recalculates the smart group for the given id and then
     * returns the ids for the users in the smart group
     *
     * @returns RecalculationResults Successful response
     * @throws ApiError
     */
    public static postV1SmartUserGroupsRecalculate({
        id,
    }: {
        /**
         * instance id of smart group
         */
        id: number,
    }): CancelablePromise<RecalculationResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/smart-user-groups/{id}/recalculate',
            path: {
                'id': id,
            },
            errors: {
                400: `smart group not found`,
            },
        });
    }

    /**
     * Recalculate a smart group for the given user id and then return the count of smart groups the user falls into
     *
     * Recalculates a smart group for the given user id and then
     * returns the count of smart groups the user falls into
     *
     * @returns RecalculationResults Successful response
     * @throws ApiError
     */
    public static postV1UsersRecalculateSmartGroups({
        id,
    }: {
        /**
         * id of user
         */
        id: number,
    }): CancelablePromise<RecalculationResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/users/{id}/recalculate-smart-groups',
            path: {
                'id': id,
            },
            errors: {
                400: `smart group not found`,
            },
        });
    }

}
