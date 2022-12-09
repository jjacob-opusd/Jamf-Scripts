/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class DiskencryptionconfigurationsService {

    /**
     * Finds all disk encryption configurations
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDiskEncryptionConfigurations(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/diskencryptionconfigurations',
        });
    }

    /**
     * Deletes a disk encryption configuration by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteDiskEncryptionConfigurationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/diskencryptionconfigurations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds disk encryption configurations by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDiskEncryptionConfigurationsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/diskencryptionconfigurations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new disk encryption configuration by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createDiskEncryptionConfigurationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/diskencryptionconfigurations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing disk encryption configuration by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateDiskEncryptionConfigurationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/diskencryptionconfigurations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds disk encryption configurations by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDiskEncryptionConfigurationsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/diskencryptionconfigurations/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
