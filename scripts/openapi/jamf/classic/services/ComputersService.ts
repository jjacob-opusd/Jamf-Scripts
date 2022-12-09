/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputersService {

    /**
     * Finds all computers
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputers(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computers',
        });
    }

    /**
     * Deletes data collected by an extension attribute
     * @returns any No response was specified
     * @throws ApiError
     */
    public static flushComputerExtensionAttributeData({
        id,
    }: {
        /**
         * ID of the computer extension attribute data to be deleted
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/computers/extensionattributedataflush/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Deletes a computer by id
     * You can DELETE using the resource URLs with parameters of {name}, {udid}, {serial number}, or {macaddress}.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteComputerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/computers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds computers by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputersById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a computer by specifying an id of 0
     * You can POST using the resource URLs with parameters of {name}, {udid}, {serial number}, or {macaddress}. Certificates and mdm_capable are ignored in a POST.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createComputerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/computers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing computer by id
     * You can PUT using the resource URLs with parameters of {name}, {udid}, {serial number}, or {macaddress}.  Certificates and mdm_capable are ignored in a PUT.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateComputerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/computers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a computer
     * Displays information specified with the {subset} parameter for a computer specified with the {id} parameter. Lookup by name, UDID, serial number, or mac address are also supported.  For example, /computers/id/3/subset/General&Location&Purchasing or /computers/name/MyComputer/subset/General.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputersByIdSubset({
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
            url: '/computers/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds computers by mac address
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputersByMacAddress({
        macaddress,
    }: {
        /**
         * Mac address to filter by
         */
        macaddress: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computers/macaddress/{macaddress}',
            path: {
                'macaddress': macaddress,
            },
        });
    }

    /**
     * Searches for computers that match the provided name parameter
     * For example, /computers/match/name/Fred.   A larger set of identifying information can be shown by requesting the basic subset, for example /computers/match/name/Fred/subset/basic
     * @returns any No response was specified
     * @throws ApiError
     */
    public static matchComputersNames({
        matchname,
    }: {
        /**
         * Name to filter by.
         */
        matchname: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computers/match/name/{matchname}',
            path: {
                'matchname': matchname,
            },
        });
    }

    /**
     * Searches for computers that match the provided parameter
     * GET computers with a value equal to the {match} parameter.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static matchComputers({
        match,
    }: {
        /**
         * Name, mac address, etc. to filter by.  Match uses the same format as the general search in Jamf Pro.  For instance, admin* can be used to match computer names that begin with admin
         */
        match: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computers/match/{match}',
            path: {
                'match': match,
            },
        });
    }

    /**
     * Finds the first computer with the given name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputersByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computers/name/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Finds computers by serial number
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputersBySerialNumber({
        serialnumber,
    }: {
        /**
         * Serial number to filter by
         */
        serialnumber: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computers/serialnumber/{serialnumber}',
            path: {
                'serialnumber': serialnumber,
            },
        });
    }

    /**
     * Finds all computers
     * returns a larger set of information about the computers in Jamf Pro.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputersBasic(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computers/subset/basic',
        });
    }

    /**
     * Finds computers by UDID
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputersByUdid({
        udid,
    }: {
        /**
         * UDID to filter by
         */
        udid: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computers/udid/{udid}',
            path: {
                'udid': udid,
            },
        });
    }

}
