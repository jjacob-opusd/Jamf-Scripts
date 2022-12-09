/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobiledeviceprovisioningprofilesService {

    /**
     * Finds all mobile device provisioning profiles
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceProvisioningProfiles(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceprovisioningprofiles',
        });
    }

    /**
     * Deletes a mobile device provisioning profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteMobileDeviceProvisioningProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mobiledeviceprovisioningprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device provisioning profiles by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceProvisioningProfilesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceprovisioningprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new mobile device provisioning profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceProvisioningProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledeviceprovisioningprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing mobile device provisioning profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateMobileDeviceProvisioningProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mobiledeviceprovisioningprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a mobile device provisioning profile
     * Displays information specified with the {subset} parameter for a mobile device provisioning profile specified with the {id} parameter. Lookup by name and UUID are also supported.  For example, /mobiledeviceprovisioningprofiles/id/3/subset/General.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceProvisioningProfileByIdSubset({
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
            url: '/mobiledeviceprovisioningprofiles/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds mobile device provisioning profiles by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceProvisioningProfilesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceprovisioningprofiles/name/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Finds mobile device provisioning profiles by uuid
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceProvisioningProfilesByUuid({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceprovisioningprofiles/uuid/{uuid}',
            path: {
                'name': name,
            },
        });
    }

}
