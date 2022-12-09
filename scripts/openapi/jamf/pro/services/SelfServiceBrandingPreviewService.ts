/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrandingImageUrl } from '../models/BrandingImageUrl.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SelfServiceBrandingPreviewService {

    /**
     * Upload an image
     *
     * Uploads an image
     * @returns BrandingImageUrl Image successfully uploaded
     * @throws ApiError
     */
    public static postSelfServiceBrandingImages({
        formData,
    }: {
        formData: {
            /**
             * The file to upload
             */
            file: Blob;
        },
    }): CancelablePromise<BrandingImageUrl> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/self-service/branding/images',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
