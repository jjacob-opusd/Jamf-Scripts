/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerhardwaresoftwarereportsService {

    /**
     * Finds hardware/software reports by computer id
     * Displays hardware/software reports for the date range specified for a computer specified with the {id} parameter.  Date range must be specified in format yyyy-mm-dd.  For example, ../JSSResource/computerhardwaresoftwarereports/id/33/2016-01-01_2016-12-31
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHardwareSoftwareReportsById({
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
         * End date
         */
        endDate?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhardwaresoftwarereports/id/{id}/{start_date}_{end_date}',
            path: {
                'id': id,
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

    /**
     * Display subsets of information for computer hardware/software history
     * Displays information specified with the {subset} parameter for a computer specified with the {id} parameter. Lookup by name, UDID, serial number, or mac address are also supported.  Start and end date are required.  For example, /computerhardwaresoftwarereports/id/3/2016-01-01_2016-12-31/subset/Software or /computerhardwaresoftwarereports/id/3/2016-01-01_2016-12-31/subset/Fonts&Plugins.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHistoryByIdSubset({
        id,
        startDate = '2016-01-01',
        endDate = '2016-12-31',
        subset = 'Hardware',
    }: {
        /**
         * Computer Id to filter by
         */
        id: string,
        /**
         * Start date
         */
        startDate?: string,
        /**
         * End date
         */
        endDate?: string,
        /**
         * Subset to filter by
         */
        subset?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhardwaresoftwarereports/id/{id}/{start_date}_{end_date}/subset/{subset}',
            path: {
                'id': id,
                'start_date': startDate,
                'end_date': endDate,
                'subset': subset,
            },
        });
    }

    /**
     * Finds hardware/software reports by computer mac address
     * Displays hardware/software reports for the date range specified for a computer specified with the {macaddress} parameter.  Date range must be specified in format yyyy-mm-dd.  For example, ../JSSResource/computerhardwaresoftwarereports/macaddress/14:14:14:14:14:14/2016-01-01_2016-12-31
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHardwareSoftwareReportsByMacAddress({
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
         * End date
         */
        endDate?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhardwaresoftwarereports/macaddress/{macaddress}/{start_date}_{end_date}',
            path: {
                'macaddress': macaddress,
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

    /**
     * Finds hardware/software reports by computer name
     * Displays hardware/software reports for the date range specified for a computer specified with the {name} parameter.  Date range must be specified in format yyyy-mm-dd.  For example, ../JSSResource/computerhardwaresoftwarereports/name/XYZ123/2016-01-01_2016-12-31
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHardwareSoftwareReportsByName({
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
         * End date
         */
        endDate?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhardwaresoftwarereports/name/{name}/{start_date}_{end_date}',
            path: {
                'name': name,
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

    /**
     * Finds hardware/software reports by computer serial number
     * Displays hardware/software reports for the date range specified for a computer specified with the {serialnumber} parameter.  Date range must be specified in format yyyy-mm-dd.  For example, ../JSSResource/computerhardwaresoftwarereports/serialnumber/C0Q10E7KDKQ1/2016-01-01_2016-12-31
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHardwareSoftwareReportsBySerial({
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
         * End date
         */
        endDate?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhardwaresoftwarereports/serialnumber/{serialnumber}/{start_date}_{end_date}',
            path: {
                'serialnumber': serialnumber,
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

    /**
     * Finds hardware/software reports by computer UDID
     * Displays hardware/software reports for the date range specified for a computer specified with the {udid} parameter.  Date range must be specified in format yyyy-mm-dd.  For example, ../JSSResource/computerhardwaresoftwarereports/udid/ABC1FE75-144A-5F66-944B-8D37B6CFABCD/2016-01-01_2016-12-31
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerHardwareSoftwareReportsByUdid({
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
         * End date
         */
        endDate?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerhardwaresoftwarereports/udid/{udid}/{start_date}_{end_date}',
            path: {
                'udid': udid,
                'start_date': startDate,
                'end_date': endDate,
            },
        });
    }

}
