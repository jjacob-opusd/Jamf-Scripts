/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class OsxconfigurationprofilesService {

    /**
     * Finds all OS X configuration profiles
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findOsxConfigurationProfiles(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/osxconfigurationprofiles',
        });
    }

    /**
     * Deletes a OS X configuration profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteOsxConfigurationProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/osxconfigurationprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds OS X configuration profiles by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findOsxConfigurationProfilesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/osxconfigurationprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new OS X configuration profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createOsxConfigurationProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/osxconfigurationprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing OS X configuration profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateOsxConfigurationProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/osxconfigurationprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for an OS X configuration profile
     * Displays information specified with the {subset} parameter for a configuration specified with the {id} parameter. Lookup by name is also supported.  For example, /osxconfigurationprofiles/id/3/subset/General&Scope or /osxconfigurationprofiles/name/MyCP/subset/General.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findOsxConfigurationProfilesByIdSubset({
        id,
        subset = 'General',
    }: {
        /**
         * Id to filter by
         */
        id: string,
        /**
         * Subset to filter by
         */
        subset?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/osxconfigurationprofiles/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds OS X configuration profiles by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findOsxConfigurationProfilesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/osxconfigurationprofiles/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
