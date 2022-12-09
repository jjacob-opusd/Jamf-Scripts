/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class VppassignmentsService {

    /**
     * Finds all VPP Assignments
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findVppAdminAssignment(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vppassignments',
        });
    }

    /**
     * Deletes a vpp assignment by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteAssignmentById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vppassignments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds VPP Assignment by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAssignmentById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vppassignments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new vpp assignment by id
     * Name is required.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createAssignmentById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vppassignments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates a vpp assignment by id
     * Name is required.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateAssignmentById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/vppassignments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

}
