/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IconResponse } from '../models/IconResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class IconService {

    /**
     * Upload an icon
     *
     * Uploads an icon
     * @returns IconResponse Icon successfully uploaded
     * @throws ApiError
     */
    public static postV1Icon({
        formData,
    }: {
        formData: {
            /**
             * The file to upload
             */
            file: Blob;
        },
    }): CancelablePromise<IconResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/icon',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Failure, field required: "file".`,
                500: `Upload Failed.`,
            },
        });
    }

    /**
     * Get an icon
     *
     * Get an icon
     * @returns IconResponse Succesful response
     * @throws ApiError
     */
    public static getV1Icon({
        id,
    }: {
        /**
         * id of the icon
         */
        id: string,
    }): CancelablePromise<IconResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/icon/{id}',
            path: {
                'id': id,
            },
        });
    }

}
