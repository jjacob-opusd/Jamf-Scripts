/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PatchsoftwaretitlesService {

    /**
     * Finds all patch software titles
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchSoftwareTitles(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchsoftwaretitles',
        });
    }

    /**
     * Deletes a patch software title by id
     * You can DELETE using the resource URLs with parameters of {name}.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deletePatchSoftwareTitlesById({
        id,
    }: {
        /**
         * id value to update by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/patchsoftwaretitles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds patch software titles by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findPatchSoftwareTitlesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/patchsoftwaretitles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates new patch software title by id
     * While doing a POST the patch source <source_id> and patch software title <name_id> nodes are required.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createPatchSoftwareTitleById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/patchsoftwaretitles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates a patch software title by id
     * You can PUT using the resource URLs with parameters of {id}.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updatePatchSoftwareTitlesById({
        id,
    }: {
        /**
         * Id value to update by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/patchsoftwaretitles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

}
