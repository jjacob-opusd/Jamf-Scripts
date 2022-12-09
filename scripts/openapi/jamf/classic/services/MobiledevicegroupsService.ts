/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobiledevicegroupsService {

    /**
     * Finds all mobile device groups
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceGroups(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicegroups',
        });
    }

    /**
     * Deletes a mobile device group by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteMobileDeviceGroupById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mobiledevicegroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device groups by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceGroupsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicegroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new mobile device group by id
     * POST also works with a name, but generally id is used.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceGroupById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledevicegroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing mobile device group by id
     * PUT also works with a name.    One or more mobile devices can be added by using <mobile_device_additions> instead of <mobile_devices>.  One or more computers can be deleted by using <mobile_device_deletions> instead of <mobile_devices>
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateMobileDeviceGroupById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mobiledevicegroups/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device groups by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceGroupsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicegroups/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
