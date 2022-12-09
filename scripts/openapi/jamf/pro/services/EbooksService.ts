/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Ebook } from '../models/Ebook.ts';
import type { EbookScope } from '../models/EbookScope.ts';
import type { EbookSearchResults } from '../models/EbookSearchResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class EbooksService {

    /**
     * Get Ebook object
     *
     * Gets ebook object
     * @returns EbookSearchResults Successful response
     * @throws ApiError
     */
    public static getV1Ebooks({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is name:asc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
    }): CancelablePromise<EbookSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/ebooks',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Get specified Ebook object
     *
     * Gets specified Ebook object
     *
     * @returns Ebook Details about ebook were found for given id
     * @throws ApiError
     */
    public static getV1Ebooks1({
        id,
    }: {
        /**
         * instance id of ebook record
         */
        id: string,
    }): CancelablePromise<Ebook> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/ebooks/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified ebook object does not exist.`,
            },
        });
    }

    /**
     * Get specified scope of Ebook object
     *
     * Gets specified scope of Ebook object
     *
     * @returns EbookScope Details of scope for ebook were found
     * @throws ApiError
     */
    public static getV1EbooksScope({
        id,
    }: {
        /**
         * instance id of ebook record
         */
        id: string,
    }): CancelablePromise<EbookScope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/ebooks/{id}/scope',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified scope for ebook object does not exist.`,
            },
        });
    }

}
