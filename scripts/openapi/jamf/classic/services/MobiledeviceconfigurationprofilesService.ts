/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobiledeviceconfigurationprofilesService {

    /**
     * Finds all mobile device configuration profiles
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceConfigurationProfiles(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceconfigurationprofiles',
        });
    }

    /**
     * Deletes a mobile device configuration profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteMobileDeviceConfigurationProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mobiledeviceconfigurationprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device configuration profiles by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceConfigurationProfilesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceconfigurationprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new mobile device configuration profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceConfigurationProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledeviceconfigurationprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing mobile device configuration profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateMobileDeviceConfigurationProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mobiledeviceconfigurationprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a mobile device configuration profile
     * Displays information specified with the {subset} parameter for a mobile device configuration specified with the {id} parameter. Lookup by name is also supported.  For example, /mobiledeviceconfigurationprofiles/id/3/subset/General&Scope or /mobiledeviceconfigurationprofiles/name/MyCP/subset/Scope.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceConfigurationProfilesByIdSubset({
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
            url: '/mobiledeviceconfigurationprofiles/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds mobile device configuration profiles by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceConfigurationProfilesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceconfigurationprofiles/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
