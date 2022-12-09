/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobiledevicesService {

    /**
     * Finds all mobile devices
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDevices(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevices',
        });
    }

    /**
     * Deletes a mobile device by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteMobileDeviceById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mobiledevices/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile devices by id
     * Includes a subset for Android devices if applicable.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDevicesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevices/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new mobile device by id
     * To distinguish between mobile device types (e.g., iPad, iPhone, or Apple TV), use the <model_identifier> field.  Default mobile device type is 'Unknown'.  Can include a subset for Android devices if applicable.  <os_name> in <android> is derived from the API level and cannot be set.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledevices/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing mobile device by id
     * Can include a subset for Android devices if applicable.   <os_name> in <android> is derived from the api level and cannot be set.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateMobileDeviceById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/mobiledevices/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a mobile device
     * Displays information specified with the {subset} parameter for a mobile device specified with the {id} parameter. Lookup by name, UDID, serial number, or mac address are also supported.   For example, /mobiledevices/id/3/subset/General&Location&Purchasing or /mobiledevices/id/3/subset/General&Android or /mobiledevices/name/MyIPad/subset/General.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDevicesByIdSubset({
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
            url: '/mobiledevices/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds mobile devices by wifi mac address
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDevicesByMacAddress({
        macaddress,
    }: {
        /**
         * Mac address to filter by
         */
        macaddress: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevices/macaddress/{macaddress}',
            path: {
                'macaddress': macaddress,
            },
        });
    }

    /**
     * Searches for mobile devices that match the provided parameter
     * GET mobile devices with a value equal to the {match} parameter.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static matchMobileDevices({
        match,
    }: {
        /**
         * Name, mac address, etc. to filter by.  Match uses the same format as the general search in Jamf Pro.  For instance, admin* can be used to match mobile device names that begin with admin
         */
        match: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevices/match/{match}',
            path: {
                'match': match,
            },
        });
    }

    /**
     * Finds mobile devices by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDevicesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevices/name/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Finds mobile devices by serial number
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDevicesBySerialNumber({
        serialnumber,
    }: {
        /**
         * Serial number to filter by
         */
        serialnumber: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevices/serialnumber/{serialnumber}',
            path: {
                'serialnumber': serialnumber,
            },
        });
    }

    /**
     * Finds mobile devices by UDID
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDevicesByUdid({
        udid,
    }: {
        /**
         * UDID to filter by
         */
        udid: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevices/udid/{udid}',
            path: {
                'udid': udid,
            },
        });
    }

}
