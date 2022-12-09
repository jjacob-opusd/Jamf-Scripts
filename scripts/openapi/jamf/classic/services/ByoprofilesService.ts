/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ByoprofilesService {

    /**
     * Finds all byoprofiles
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findByoProfiles(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/byoprofiles',
        });
    }

    /**
     * Finds personal device profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findByoProfilesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/byoprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing byoprofile by id
     * You cannot reassign the site since it is maintained by Jamf Pro.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateByoProfilesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/byoprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds the first byoprofile with the given name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findByoProfilesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/byoprofiles/name/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Finds byoprofiles by site id
     * You can PUT using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findByoProfilesBySiteId({
        siteId,
    }: {
        /**
         * Site id to filter by
         */
        siteId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/byoprofiles/site/id/{siteId}',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * Finds byoprofiles by site name
     * You can PUT using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findByoProfilesBySiteName({
        siteName,
    }: {
        /**
         * Site name to filter by
         */
        siteName: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/byoprofiles/site/name/{siteName}',
            path: {
                'siteName': siteName,
            },
        });
    }

}
