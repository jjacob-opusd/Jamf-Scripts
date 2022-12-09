/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class LicensedsoftwareService {

    /**
     * Finds all licensed software
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findLicensedSoftware(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/licensedsoftware',
        });
    }

    /**
     * Deletes a computer command by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteLicensedSoftwareById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/licensedsoftware/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds licensed software by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findLicensedSoftwareById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/licensedsoftware/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new computer command by id
     * Matching computers are derived, thus they cannot be set with POST.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createLicensedSoftwareById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/licensedsoftware/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing computer command by id
     * Matching computers are derived, thus they cannot be set with PUT.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateLicensedSoftwareById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/licensedsoftware/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds licensed software by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findLicensedSoftwareByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/licensedsoftware/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
