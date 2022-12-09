/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class VppaccountsService {

    /**
     * Finds all VPP Accounts
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findVppAdminAccount(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vppaccounts',
        });
    }

    /**
     * Deletes a vpp account by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteAccountById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vppaccounts/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds VPP Account by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAccountById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vppaccounts/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new vpp account by id
     * service_token and name are required.  account_name and expiration_date are set from the service token
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createAccountById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vppaccounts/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates a vpp account by id
     * service_token may not match another vpp account.  account_name and expiration_date are set from the service token
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateAccountById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/vppaccounts/id/{id}',
            path: {
                'id': id,
            },
        });
    }

}
