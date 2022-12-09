/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecalculationResults } from '../models/RecalculationResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SmartComputerGroupsPreviewService {

    /**
     * Recalculate a smart group for the given id
     *
     * Recalculates a smart group for the given id and then
     * returns the count of smart groups the computer falls into
     *
     * @returns RecalculationResults Successful response
     * @throws ApiError
     */
    public static postV1ComputersRecalculateSmartGroups({
        id,
    }: {
        /**
         * id of computer
         */
        id: number,
    }): CancelablePromise<RecalculationResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/computers/{id}/recalculate-smart-groups',
            path: {
                'id': id,
            },
            errors: {
                400: `smart group not found`,
            },
        });
    }

    /**
     * Recalculate the smart group for the given id
     *
     * Recalculates the smart group for the given id and then
     * returns the ids for the computers in the smart group
     *
     * @returns RecalculationResults Successful response
     * @throws ApiError
     */
    public static postV1SmartComputerGroupsRecalculate({
        id,
    }: {
        /**
         * instance id of smart group
         */
        id: number,
    }): CancelablePromise<RecalculationResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/smart-computer-groups/{id}/recalculate',
            path: {
                'id': id,
            },
            errors: {
                400: `smart group not found`,
            },
        });
    }

}
