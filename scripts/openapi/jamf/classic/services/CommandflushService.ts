/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CommandflushService {

    /**
     * Flushes commands based on information specified in an XML file.
     * Status and devices specified in an XML file. Id lists may be specified for <computers>, <computer_groups>, <mobile_devices>, <mobile_device_groups>. Sample file: <commandflush><status>Pending+Failed</status><mobile_devices><mobile_device><id>1</id></mobile_device><mobile_device><id>2</id></mobile_device></mobile_devices></commandflush>
     * @returns any No response was specified
     * @throws ApiError
     */
    public static commandFlush(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/commandflush',
        });
    }

    /**
     * Flushes commands for computers, computergroups, mobiledevices, or mobiledevicegroups.
     * Status may be Pending, Failed, or Pending+Failed. idtype may be specified as computers, computergroups, mobiledevices, or mobiledevicegroups. Multiple devices may be specified by separating identifiers with commas. For example /computers/id/1,2,3/status/Pending+Failed
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createCommandFlushWithIdAndStatus({
        idtype,
        id,
        status,
    }: {
        /**
         * Type of device to be flushed.
         */
        idtype: string,
        /**
         * Id of device to be flushed.
         */
        id: string,
        /**
         * Status to be flushed.
         */
        status: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/commandflush/{idtype}/id/{id}/status/{status}',
            path: {
                'idtype': idtype,
                'id': id,
                'status': status,
            },
        });
    }

}
