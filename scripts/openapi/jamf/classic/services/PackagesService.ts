/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PackagesService {

    /**
     * Finds all packages
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPackages(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/packages',
        });
    }

    /**
     * Deletes a package by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deletePackageById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/packages/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds packages by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPackagesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/packages/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new package by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createPackageById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/packages/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing package by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updatePackageById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/packages/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds packages by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPackagesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/packages/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
