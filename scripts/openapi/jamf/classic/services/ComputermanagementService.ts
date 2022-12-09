/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputermanagementService {

    /**
     * Finds computer management information by id
     * Computer command information is available in computerhistory.   FileVault 2 information is not available.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerManagementById({
        id,
    }: {
        /**
         * Computer Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computermanagement/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display patch management information for a computer and filter
     * Displays information for a computer specified with the {id} and {filter} parameters. Lookup by name, UDID, serial number, or mac address are also supported.   For example, /computermanagement/id/3/patchfilter/Chrome. Only patch information is shown.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerManagementByIdPatchFilter({
        id,
        filter = 'Chrome',
    }: {
        /**
         * Computer Id to filter by
         */
        id: string,
        /**
         * filter to filter by
         */
        filter?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computermanagement/id/{id}/patchfilter/{filter}',
            path: {
                'id': id,
                'filter': filter,
            },
        });
    }

    /**
     * Display subsets of management information for a computer
     * Displays information specified with the {subset} parameter for a computer specified with the {id} parameter. Lookup by name, UDID, serial number, or mac address are also supported.   For example, /computermanagement/id/3/subset/General&Policies&Restricted_Software or /computermanagement/id/3/subset/General&EBooks or /computermanagement/name/MyComputer/subset/General. Computer command information is available in computerhistory.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerManagementByIdSubset({
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
            url: '/computermanagement/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Display management information for a computer and username
     * Displays information for a computer specified with the {id} and {username} parameters. Lookup by name, UDID, serial number, or mac address are also supported.   For example, /computermanagement/id/3/username/Sally. Computer command information is available in computerhistory.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerManagementByIdUsername({
        id,
        username = 'Sally',
    }: {
        /**
         * Computer Id to filter by
         */
        id: string,
        /**
         * Username to filter by
         */
        username?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computermanagement/id/{id}/username/{username}',
            path: {
                'id': id,
                'username': username,
            },
        });
    }

    /**
     * Display subsets of management information for a computer and username
     * Displays information specified with the {subset} parameter for a computer specified with the {id} and {username} parameters. Lookup by name, UDID, serial number, or mac address are also supported.   For example, /computermanagement/id/3/username/fred/subset/General&Policies&Restricted_Software or /computermanagement/id/3/username/Sally/subset/General&EBooks. Computer command information is available in computerhistory.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerManagementByIdUsernameSubset({
        id,
        username,
        subset = 'General',
    }: {
        /**
         * Computer Id to filter by
         */
        id: string,
        /**
         * Username to filter by
         */
        username: string,
        /**
         * Subset to filter by
         */
        subset?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computermanagement/id/{id}/username/{username}/subset/{subset}',
            path: {
                'id': id,
                'username': username,
                'subset': subset,
            },
        });
    }

    /**
     * Finds computer management information by mac address
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerManagementByMacAddress({
        macaddress,
    }: {
        /**
         * Computer Mac Address to filter by
         */
        macaddress: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computermanagement/macaddress/{macaddress}',
            path: {
                'macaddress': macaddress,
            },
        });
    }

    /**
     * Finds computer management information by name
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerManagementByName({
        name,
    }: {
        /**
         * Computer Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computermanagement/name/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Finds computer management information by serial number
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerManagementBySerialNumber({
        serialnumber,
    }: {
        /**
         * Computer Serial Number to filter by
         */
        serialnumber: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computermanagement/serialnumber/{serialnumber}',
            path: {
                'serialnumber': serialnumber,
            },
        });
    }

    /**
     * Finds computer management information by UDID
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerManagementByUdid({
        udid,
    }: {
        /**
         * Computer UDID to filter by
         */
        udid: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computermanagement/udid/{udid}',
            path: {
                'udid': udid,
            },
        });
    }

}
