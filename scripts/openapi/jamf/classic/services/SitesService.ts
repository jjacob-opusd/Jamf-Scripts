/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SitesService {

    /**
     * Finds all sites
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findSites(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sites',
        });
    }

    /**
     * Deletes a site by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteSiteById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sites/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds sites by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findSitesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sites/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new site by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createSiteById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sites/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing site by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateSiteById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sites/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds sites by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findSitesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sites/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
