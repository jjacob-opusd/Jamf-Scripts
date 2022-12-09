/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PeripheraltypesService {

    /**
     * Finds all peripheral types
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPeripheralTypes(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/peripheraltypes',
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
            url: '/peripheraltypes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds peripheral types by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPeripheralTypesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/peripheraltypes/id/{id}',
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
            url: '/peripheraltypes/id/{id}',
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
            url: '/peripheraltypes/id/{id}',
            path: {
                'id': id,
            },
        });
    }

}
