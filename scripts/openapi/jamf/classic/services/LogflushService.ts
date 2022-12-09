/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class LogflushService {

    /**
     * Flushes a log specified in an XML file.
     * log, log_id, interval, and devices specified in an XML file. Sample file: <logflush><log>policy</log><log_id>2</log_id><interval>THREE MONTHS</interval><computers><computer><id>1</id></computer><computer><id>2</id></computer></computers></logflush>
     * @returns any No response was specified
     * @throws ApiError
     */
    public static logFlush(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/logflush',
        });
    }

    /**
     * Flushes a log for a policy for a given interval listed in the URL.
     * Interval is a combination of Zero, One, Two, Three, Six, and Day, Week, Month, Year.  For example, JSSResource/logflush/policies/interval/Three+Months
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createLogFlushWithIdAndInterval({
        id,
    }: {
        /**
         * Id of policy whose log will be flushed, such as id/7.
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/logflush/{log}/id/{id}/interval/{interval}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Flushes a log for all policies for a given interval listed in the URL.
     * Interval is a combination of Zero, One, Two, Three, Six, and Day, Week, Month, Year.  For example, JSSResource/logflush/policies/interval/Three+Months
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createLogFlushForInterval({
        interval,
    }: {
        /**
         * Interval to be flushed.
         */
        interval: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/logflush/{log}/interval/{interval}',
            path: {
                'interval': interval,
            },
        });
    }

}
