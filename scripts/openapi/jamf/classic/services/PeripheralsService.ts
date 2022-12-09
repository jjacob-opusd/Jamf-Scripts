/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PeripheralsService {

    /**
     * Finds all peripherals
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPeripherals(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/peripherals',
        });
    }

    /**
     * Deletes a peripheral by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deletePeripheralById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/peripherals/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds peripherals by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPeripheralsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/peripherals/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new peripheral by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createPeripheralById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/peripherals/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing peripheral by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updatePeripheralById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/peripherals/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a peripheral
     * Displays information specified with the {subset} parameter for a peripheral specified with the {id} parameter. For example, /peripheral/id/3/subset/General&Location&Purchasing.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPeripheralsByIdSubset({
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
            url: '/peripherals/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

}
