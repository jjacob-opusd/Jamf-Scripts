/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerapplicationusageService {

    /**
     * Finds computer application usage by computer id
     * Displays application usage information for the date range specified for a computer specified with the {id} parameter.  Date range must be specified in format yyyy-mm-dd.  For example, ../JSSResource/computerapplicationusage/id/33/2016-01-01_2016-12-31
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerApplicationUsageById({
        id,
        startDate = '2016-01-01',
        endDate = '2016-12-31',
    }: {
        /**
         * Id value to filter by
         */
        id: number,
        /**
         * Start date
         */
        startDate?: string,
        /**
         * End datey
         */
        endDate?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerapplicationusage/id/{id}/{start_date}_{end_date}',
            path: {
                'id': id,
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

    /**
     * Finds computer application usage by computer mac address
     * Displays application usage information for the date range specified for a computer specified with the {macaddress} parameter.  Date range must be specified in format yyyy-mm-dd.  For example, ../JSSResource/computerapplicationusage/macaddress/14:14:14:14:14:14/2016-01-01_2016-12-31
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerApplicationUsageByMacAddress({
        macaddress,
        startDate = '2016-01-01',
        endDate = '2016-12-31',
    }: {
        /**
         * mac address to filter by
         */
        macaddress: string,
        /**
         * Start date
         */
        startDate?: string,
        /**
         * End datey
         */
        endDate?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerapplicationusage/macaddress/{macaddress}/{start_date}_{end_date}',
            path: {
                'macaddress': macaddress,
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

    /**
     * Finds computer application usage by computer name
     * Displays application usage information for the date range specified for a computer specified with the {name} parameter.  Date range must be specified in format yyyy-mm-dd.  For example, ../JSSResource/computerapplicationusage/name/XYZ123/2016-01-01_2016-12-31
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerApplicationUsageByName({
        name,
        startDate = '2016-01-01',
        endDate = '2016-12-31',
    }: {
        /**
         * Name to filter by
         */
        name: string,
        /**
         * Start date
         */
        startDate?: string,
        /**
         * End datey
         */
        endDate?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerapplicationusage/name/{name}/{start_date}_{end_date}',
            path: {
                'name': name,
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

    /**
     * Finds computer application usage by computer serial number
     * Displays application usage information for the date range specified for a computer specified with the {serialnumber} parameter.  Date range must be specified in format yyyy-mm-dd.  For example, ../JSSResource/computerapplicationusage/serialnumber/C0Q10E7KDKQ1/2016-01-01_2016-12-31
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerApplicationUsageBySerial({
        serialnumber,
        startDate = '2016-01-01',
        endDate = '2016-12-31',
    }: {
        /**
         * Serial number to filter by
         */
        serialnumber: string,
        /**
         * Start date
         */
        startDate?: string,
        /**
         * End datey
         */
        endDate?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerapplicationusage/serialnumber/{serialnumber}/{start_date}_{end_date}',
            path: {
                'serialnumber': serialnumber,
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

    /**
     * Finds computer application usage by computer UDID
     * Displays application usage information for the date range specified for a computer specified with the {udid} parameter.  Date range must be specified in format yyyy-mm-dd.  For example, ../JSSResource/computerapplicationusage/udid/ABC1FE75-144A-5F66-944B-8D37B6CFABCD/2016-01-01_2016-12-31
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerApplicationUsageByUdid({
        udid,
        startDate = '2016-01-01',
        endDate = '2016-12-31',
    }: {
        /**
         * UDID to filter by
         */
        udid: string,
        /**
         * Start date
         */
        startDate?: string,
        /**
         * End datey
         */
        endDate?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerapplicationusage/udid/{udid}/{start_date}_{end_date}',
            path: {
                'udid': udid,
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

}
