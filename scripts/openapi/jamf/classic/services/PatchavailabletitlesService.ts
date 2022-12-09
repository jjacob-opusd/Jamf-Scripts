/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchavailabletitlesService {

    /**
     * Finds all available title from a source by Id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findAvailableTitlesBySourceId({
        id,
    }: {
        /**
         * ID value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchavailabletitles/sourceid/{id}',
            path: {
                'id': id,
            },
        });
    }

}
