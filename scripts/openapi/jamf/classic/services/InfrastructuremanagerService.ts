/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class InfrastructuremanagerService {

    /**
     * Find all Infrastructure Managers
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findInfrastructureManager(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/infrastructuremanager',
        });
    }

    /**
     * Finds infrastructure manager by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findInfrastructureManagerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/infrastructuremanager/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing infrastructure manager by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateInfrastructureManagerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/infrastructuremanager/id/{id}',
            path: {
                'id': id,
            },
        });
    }

}
