/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputergroupsService {

    /**
     * Finds all computer groups
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerGroups(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computergroups',
        });
    }

    /**
     * Deletes a computer group by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteComputerGroupById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/computergroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds computer groups by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerGroupsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computergroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new computer group by id
     * POST also works with a name, but generally id is used.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createComputerGroupById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/computergroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing computer group by id
     * PUT also works with a name. One or more computers can be added by using <computer_additions> instead of <computers>.  One or more computers can be deleted by using <computer_deletions> instead of <computers>
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateComputerGroupById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/computergroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds computer groups by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerGroupsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computergroups/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
