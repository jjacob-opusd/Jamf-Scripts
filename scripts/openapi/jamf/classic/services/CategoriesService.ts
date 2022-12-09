/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CategoriesService {

    /**
     * Finds all categories
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findCategories(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories',
        });
    }

    /**
     * Deletes a category by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteCategoryById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/categories/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds categories by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findCategoriesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new category by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createCategoryById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/categories/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing category by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateCategoryById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/categories/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds categories by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findCategoriesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
