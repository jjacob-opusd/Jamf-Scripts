/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComputersSearchResults } from '../models/ComputersSearchResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputersPreviewService {

    /**
     * Return a list of Computers
     *
     * Returns a list of computers.
     * @returns ComputersSearchResults OK
     * @throws ApiError
     */
    public static getPreviewComputers({
        page,
        size = 100,
        pagesize = 100,
        pageSize = 100,
        sort = 'name:asc',
    }: {
        page?: number,
        /**
         * @deprecated
         */
        size?: number,
        /**
         * @deprecated
         */
        pagesize?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is name:asc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: string,
    }): CancelablePromise<ComputersSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/preview/computers',
            query: {
                'page': page,
                'size': size,
                'pagesize': pagesize,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

}
