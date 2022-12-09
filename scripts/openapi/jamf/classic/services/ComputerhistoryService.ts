/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerhistoryService {

    /**
     * Finds computer history by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHistoryById({
        id,
    }: {
        /**
         * Computer Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhistory/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a computer history
     * Displays information specified with the {subset} parameter for a computer specified with the {id} parameter. Lookup by name, UDID, serial number, or mac address are also supported.   For example, /computerhistory/id/3/subset/General&UserLocation&Audits or /computerhistory/id/3/subset/General&Audits or /computerhistory/name/MyComputer/subset/General.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHistoryByIdSubset({
        id,
        subset = 'General',
    }: {
        /**
         * Computer Id to filter by
         */
        id: string,
        /**
         * Subset to filter by
         */
        subset?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhistory/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds computer history by mac address
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHistoryByMacAddress({
        macaddress,
    }: {
        /**
         * Computer Mac Address to filter by
         */
        macaddress: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhistory/macaddress/{macaddress}',
            path: {
                'macaddress': macaddress,
            },
        });
    }

    /**
     * Finds computer history by name
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHistoryByName({
        name,
    }: {
        /**
         * Computer Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhistory/name/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Finds computer history by serial number
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHistoryBySerialNumber({
        serialnumber,
    }: {
        /**
         * Computer Serial Number to filter by
         */
        serialnumber: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhistory/serialnumber/{serialnumber}',
            path: {
                'serialnumber': serialnumber,
            },
        });
    }

    /**
     * Finds computer history by UDID
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHistoryByUdid({
        udid,
    }: {
        /**
         * Computer UDID to filter by
         */
        udid: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhistory/udid/{udid}',
            path: {
                'udid': udid,
            },
        });
    }

}
