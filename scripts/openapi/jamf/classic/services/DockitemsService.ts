/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class DockitemsService {

    /**
     * Finds all dock items
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDockItems(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dockitems',
        });
    }

    /**
     * Deletes a dock item by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteDockItemById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dockitems/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds dock items by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDockItemsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dockitems/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new dock item by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createDockItemById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dockitems/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing dock item by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateDockItemById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dockitems/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds dock items by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findDockItemsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dockitems/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
