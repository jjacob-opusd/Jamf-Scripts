/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobiledeviceenrollmentprofilesService {

    /**
     * Finds all mobile device enrollment profiles
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceEnrollmentProfiles(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceenrollmentprofiles',
        });
    }

    /**
     * Deletes a mobile device enrollment profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteMobileDeviceEnrollmentProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mobiledeviceenrollmentprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device enrollment profiles by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceEnrollmentProfilesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceenrollmentprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new mobile device enrollment profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceEnrollmentProfilesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledeviceenrollmentprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing mobile device enrollment profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateMobileDeviceEnrollmentProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mobiledeviceenrollmentprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for an enrollment profile
     * Displays information specified with the {subset} parameter for an enrollment profile specified with the {id} parameter. Lookup by name and invitation are also supported.  For example, /mobiledeviceenrollmentprofiles/id/3/subset/General&Scope or /mobiledeviceenrollmentprofiles/name/myProfile/subset/Scope.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceEnrollmentProfilesByIdSubset({
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
            url: '/mobiledeviceenrollmentprofiles/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds mobile device enrollment profiles by invitation
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceEnrollmentProfilesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceenrollmentprofiles/invitation/{invitation}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Finds mobile device enrollment profiles by invitation
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceEnrollmentProfilesByInvitation({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceenrollmentprofiles/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
