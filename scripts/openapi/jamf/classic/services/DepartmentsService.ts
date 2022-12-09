/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class DepartmentsService {

    /**
     * Finds all departments
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDepartments(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/departments',
        });
    }

    /**
     * Deletes a department by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteDepartmentById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/departments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds departments by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDepartmentsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/departments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new department by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createDepartmentById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/departments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing department by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateDepartmentById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/departments/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds departments by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDepartmentsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/departments/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
