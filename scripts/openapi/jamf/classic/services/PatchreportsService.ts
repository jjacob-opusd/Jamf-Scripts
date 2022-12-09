/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchreportsService {

    /**
     * Finds patch reports by patch software title id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchReportsByPatchSoftwareTitleId({
        id,
    }: {
        /**
         * Patch software title id to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchreports/patchsoftwaretitleid/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display computers for a specific version of a patch report
     * Displays report information specified with the {version} parameter for a patch software title specified with the {id} parameter. Lookup by name is not support due to the ability for software titles from different sources to share a common name. For example, /patches/id/3/version/45.0.2. A version number of 'Latest' and 'Unknown' will also work.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputersByTitleVersion({
        id,
        version = 'Latest',
    }: {
        /**
         * Patch software title id to filter by
         */
        id: number,
        /**
         * Version number to filter by
         */
        version?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchreports/patchsoftwaretitleid/{id}/version/{version}',
            path: {
                'id': id,
                'version': version,
            },
        });
    }

}
