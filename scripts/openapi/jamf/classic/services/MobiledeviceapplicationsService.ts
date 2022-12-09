/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobiledeviceapplicationsService {

    /**
     * Finds all mobile device applications
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceApplications(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceapplications',
        });
    }

    /**
     * Finds mobile device applications by bundle ID
     * You can also PUT and DELETE using this resource URL. If multiple applications match, no application is returned.  You may specify both bundle id and version to uniquely identify a mobile device application.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceApplicationsByBundleId({
        bundleid,
    }: {
        /**
         * Bundle ID to filter by
         */
        bundleid: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceapplications/bundleid/{bundleid}',
            path: {
                'bundleid': bundleid,
            },
        });
    }

    /**
     * Finds mobile device applications by bundle ID and version
     * You can also PUT and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceApplicationsByBundleIDandVersion({
        bundleid,
        version,
    }: {
        /**
         * Bundle ID to filter by
         */
        bundleid: string,
        /**
         * Version to filter by
         */
        version: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceapplications/bundleid/{bundleid}/version/{version}',
            path: {
                'bundleid': bundleid,
                'version': version,
            },
        });
    }

    /**
     * Deletes a mobile device application by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteMobileDeviceApplicationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mobiledeviceapplications/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device applications by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceApplicationsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceapplications/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new mobile device application by id
     * <keep_description_and_icon_up_to_date> refers to the option to automatically update app information.  App configuration preferences should be listed using character entities, e.g. <preferences>&lt;dict&gt;&lt;key&gt;JSS_ID&lt;/key&gt;&lt;string&gt;313&lt;/string&gt;&lt;/dict&gt;</preferences>
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceApplicationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledeviceapplications/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing mobile device application by id
     * <keep_description_and_icon_up_to_date> and <automatically_update_app> are redundant.  App configuration preferences should be listed using character entities, e.g. <preferences>&lt;dict&gt;&lt;key&gt;abc&lt;/key&gt;&lt;string&gt;xyz&lt;/string&gt;&lt;/dict&gt;</preferences>
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateMobileDeviceApplicationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mobiledeviceapplications/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a mobile device application
     * Displays information specified with the {subset} parameter for a mobile device application specified with the {id} parameter. Lookup by name or bundle id is also supported.  For example, /mobiledeviceapplications/id/3/subset/General or /mobiledeviceapplications/name/MyApp/subset/General&SelfService.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceAppsByIdSubset({
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
            url: '/mobiledeviceapplications/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds mobile device applications by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceApplicationsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceapplications/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
