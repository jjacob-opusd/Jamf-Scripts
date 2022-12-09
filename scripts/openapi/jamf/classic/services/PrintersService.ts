/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PrintersService {

    /**
     * Finds all printers
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPrinters(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/printers',
        });
    }

    /**
     * Deletes a printer by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deletePrinterById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/printers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds printers by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPrintersById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/printers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new printer by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createPrinterById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/printers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing printer by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updatePrinterById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/printers/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds printers by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPrintersByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/printers/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
