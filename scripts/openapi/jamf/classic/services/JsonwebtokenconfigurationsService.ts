/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JsonwebtokenconfigurationsService {

    /**
     * Finds all JSON Web Token configurations
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findJsonWebTokenConfigurations(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jsonwebtokenconfigurations',
        });
    }

    /**
     * Deletes a JSON Web Token configuration by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteJsonWebTokenConfigurationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/jsonwebtokenconfigurations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Find JSON Web Token configuration by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findJsonWebTokenConfigurationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jsonwebtokenconfigurations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new JSON Web Token configuration by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createJsonWebTokenConfigurationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/jsonwebtokenconfigurations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing JSON Web Token configuration by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateJsonWebTokenConfigurationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/jsonwebtokenconfigurations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

}
