/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AllowedfileextensionsService {

    /**
     * Finds the allowed file extension
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAllowedFileExtension(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/allowedfileextensions',
        });
    }

    /**
     * Finds an allowed file extension value by name
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAllowedFileExtensionByName({
        extension,
    }: {
        /**
         * String value of extension
         */
        extension: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/allowedfileextensions/extension/{extension}',
            path: {
                'extension': extension,
            },
        });
    }

    /**
     * Deletes an allowed file extension value by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteAllowedFileExtensionById({
        id,
    }: {
        /**
         * Database id of the extension
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/allowedfileextensions/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds an allowed file extension value by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAllowedFileExtensionById({
        id,
    }: {
        /**
         * Database id of the extension
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/allowedfileextensions/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new allowed file extension value by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createAllowedFileExtensionById({
        id,
    }: {
        /**
         * Database id of the extension
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/allowedfileextensions/id/{id}',
            path: {
                'id': id,
            },
        });
    }

}
