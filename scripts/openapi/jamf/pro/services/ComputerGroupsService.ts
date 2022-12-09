/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComputerGroup } from '../models/ComputerGroup.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerGroupsService {

    /**
     * Returns the list of all computer groups
     *
     * Use it to get the list of all computer groups.
     *
     * @returns ComputerGroup Success
     * @throws ApiError
     */
    public static getV1ComputerGroups(): CancelablePromise<Array<ComputerGroup>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computer-groups',
        });
    }

}
