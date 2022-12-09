/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobiledevicehistoryService {

    /**
     * Finds mobile device history by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceHistoryById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicehistory/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a mobile device history
     * Displays information specified with the {subset} parameter for a mobile device specified with the {id} parameter. Lookup by name, UDID, serial number, or mac address are also supported.   For example, /mobiledevicehistory/id/3/subset/General&UserLocation&Applications or /mobiledevicehistory/id/3/subset/General&Audits or /mobiledevicehistory/name/MyIPad/subset/General.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceHistoryByIdSubset({
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
            url: '/mobiledevicehistory/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds mobile device history by wifi mac address
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceHistoryByMacAddress({
        macaddress,
    }: {
        /**
         * Mac address to filter by
         */
        macaddress: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicehistory/macaddress/{macaddress}',
            path: {
                'macaddress': macaddress,
            },
        });
    }

    /**
     * Finds mobile device history by name
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceHistoryByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicehistory/name/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Finds mobile device history by serial number
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceHistoryBySerialNumber({
        serialnumber,
    }: {
        /**
         * Serial number to filter by
         */
        serialnumber: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicehistory/serialnumber/{serialnumber}',
            path: {
                'serialnumber': serialnumber,
            },
        });
    }

    /**
     * Finds mobile device history by UDID
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceHistoryByUdid({
        udid,
    }: {
        /**
         * UDID to filter by
         */
        udid: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledevicehistory/udid/{udid}',
            path: {
                'udid': udid,
            },
        });
    }

}
