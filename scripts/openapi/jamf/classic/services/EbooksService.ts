/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class EbooksService {

    /**
     * Finds all ebooks
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findEBooks(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ebooks',
        });
    }

    /**
     * Deletes an ebook by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteEBookById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ebooks/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds ebooks by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findEBooksById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ebooks/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new ebook by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createEBookById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ebooks/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing ebook by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateEBookById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ebooks/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for an ebook
     * Displays information specified with the {subset} parameter for an ebook specified with the {id} parameter. Lookup by name is also supported.  For example, /ebooks/id/3/subset/General&Location&Purchasing or /ebooks/name/MyComputer/subset/Location&Purchasing.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findEbookssByIdSubset({
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
            url: '/ebooks/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds ebooks by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findEBooksByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ebooks/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
