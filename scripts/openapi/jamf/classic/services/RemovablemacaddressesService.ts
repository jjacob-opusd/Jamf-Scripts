/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class RemovablemacaddressesService {

    /**
     * Finds all removablemacaddresses
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findRemovableMacAddresses(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/removablemacaddresses',
        });
    }

    /**
     * Deletes a removableMacAddress by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteRemovableMacAddressById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/removablemacaddresses/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds removablemacaddresses by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findRemovableMacAddressesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/removablemacaddresses/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new removableMacAddress by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createRemovableMacAddressById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/removablemacaddresses/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing removableMacAddress by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateRemovableMacAddressById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/removablemacaddresses/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds removablemacaddresses by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findRemovableMacAddressesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/removablemacaddresses/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
