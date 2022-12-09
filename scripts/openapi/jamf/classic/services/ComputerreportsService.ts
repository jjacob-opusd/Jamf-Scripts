/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerreportsService {

    /**
     * Finds all computer reports
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerReports(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerreports',
        });
    }

    /**
     * Finds computer reports by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputeReportsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerreports/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds computer reports by name
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputeReportsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerreports/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
