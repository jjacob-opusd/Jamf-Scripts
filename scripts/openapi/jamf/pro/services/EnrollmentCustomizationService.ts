/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrandingImageUrl } from '../models/BrandingImageUrl.ts';
import type { EnrollmentCustomization } from '../models/EnrollmentCustomization.ts';
import type { EnrollmentCustomizationSearchResults } from '../models/EnrollmentCustomizationSearchResults.ts';
import type { EnrollmentCustomizationSearchResultsV2 } from '../models/EnrollmentCustomizationSearchResultsV2.ts';
import type { EnrollmentCustomizationV2 } from '../models/EnrollmentCustomizationV2.ts';
import type { GetEnrollmentCustomization } from '../models/GetEnrollmentCustomization.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { PrestageDependencies } from '../models/PrestageDependencies.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class EnrollmentCustomizationService {

    /**
     * @deprecated
     * Retrieve sorted and paged Enrollment Customizations
     *
     * Retrieves sorted and paged Enrollment Customizations
     * @returns EnrollmentCustomizationSearchResults Success
     * @throws ApiError
     */
    public static getV1EnrollmentCustomization({
        page,
        size = 100,
        pagesize = 100,
        pageSize = 100,
        sort = 'id:asc',
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
         * Sorting criteria in the format: property:asc/desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: string,
    }): CancelablePromise<EnrollmentCustomizationSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/enrollment-customization',
            query: {
                'page': page,
                'size': size,
                'pagesize': pagesize,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * @deprecated
     * Create an Enrollment Customization
     *
     * Create an enrollment customization
     * @returns GetEnrollmentCustomization Enrollment customization was created
     * @throws ApiError
     */
    public static postV1EnrollmentCustomization({
        requestBody,
    }: {
        /**
         * Enrollment customization to create.
         */
        requestBody: EnrollmentCustomization,
    }): CancelablePromise<GetEnrollmentCustomization> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/enrollment-customization',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Upload an image
     * Uploads an image
     * @returns BrandingImageUrl Image successfully uploaded
     * @throws ApiError
     */
    public static postV1EnrollmentCustomizationImages({
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
            url: '/v1/enrollment-customization/images',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @deprecated
     * Retrieve an Enrollment Customization with the supplied id
     *
     * Retrieves an Enrollment Customization with the supplied id
     * @returns GetEnrollmentCustomization Success
     * @throws ApiError
     */
    public static getV1EnrollmentCustomization1({
        id,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
    }): CancelablePromise<GetEnrollmentCustomization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/enrollment-customization/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Enrollment Customization with that id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Update an Enrollment Customization
     *
     * Updates an Enrollment Customization
     * @returns GetEnrollmentCustomization Success
     * @throws ApiError
     */
    public static putV1EnrollmentCustomization({
        id,
        requestBody,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Enrollment Customization to update
         */
        requestBody: EnrollmentCustomization,
    }): CancelablePromise<GetEnrollmentCustomization> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/enrollment-customization/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Enrollment Customization with that id does not exist`,
            },
        });
    }

    /**
     * @deprecated
     * Delete an Enrollment Customization with the supplied id
     *
     * Deletes an Enrollment Customization with the supplied id
     * @returns void
     * @throws ApiError
     */
    public static deleteV1EnrollmentCustomization({
        id,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/enrollment-customization/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Get sorted and paged Enrollment Customization history objects
     *
     * Gets sorted and paged enrollment customization history objects
     * @returns HistorySearchResults Details of enrollment customization history were found
     * @throws ApiError
     */
    public static getV1EnrollmentCustomizationHistory({
        id,
        page,
        size = 100,
        pagesize = 100,
        pageSize = 100,
        sort,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
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
         * Sorting criteria in the format: property,asc/desc. Default sort order is descending. Multiple sort criteria are supported and must be entered on separate lines in Swagger UI. In the URI the 'sort' query param is duplicated for each sort criterion, e.g., ...&sort=name%2Casc&sort=date%2Cdesc
         */
        sort?: Array<string>,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/enrollment-customization/{id}/history',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'size': size,
                'pagesize': pagesize,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * @deprecated
     * Add Enrollment Customization history object notes
     *
     * Adds enrollment customization history object notes
     * @returns ObjectHistory Notes of enrollment customization history were added
     * @throws ApiError
     */
    public static postV1EnrollmentCustomizationHistory({
        id,
        requestBody,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * History notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/enrollment-customization/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Enrollment customization history can not be saved`,
            },
        });
    }

    /**
     * @deprecated
     * Retrieve the list of Prestages using this Enrollment Customization
     *
     * Retrieves the list of Prestages using this Enrollment Customization
     * @returns PrestageDependencies Success
     * @throws ApiError
     */
    public static getV1EnrollmentCustomizationPrestages({
        id,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
    }): CancelablePromise<PrestageDependencies> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/enrollment-customization/{id}/prestages',
            path: {
                'id': id,
            },
            errors: {
                404: `Enrollment Customization with that id does not exist`,
            },
        });
    }

    /**
     * Retrieve sorted and paged Enrollment Customizations
     *
     * Retrieves sorted and paged Enrollment Customizations
     * @returns EnrollmentCustomizationSearchResultsV2 Success
     * @throws ApiError
     */
    public static getV2EnrollmentCustomizations({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
    }): CancelablePromise<EnrollmentCustomizationSearchResultsV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment-customizations',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Create an Enrollment Customization
     *
     * Create an enrollment customization
     * @returns HrefResponse Enrollment customization was created
     * @throws ApiError
     */
    public static postV2EnrollmentCustomizations({
        requestBody,
    }: {
        /**
         * Enrollment customization to create.
         */
        requestBody: EnrollmentCustomizationV2,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/enrollment-customizations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Upload an image
     * Uploads an image
     * @returns BrandingImageUrl Image successfully uploaded
     * @throws ApiError
     */
    public static postV2EnrollmentCustomizationsImages({
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
            url: '/v2/enrollment-customizations/images',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Retrieve an Enrollment Customization with the supplied id
     *
     * Retrieves an Enrollment Customization with the supplied id
     * @returns EnrollmentCustomizationV2 Success
     * @throws ApiError
     */
    public static getV2EnrollmentCustomizations1({
        id,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: string,
    }): CancelablePromise<EnrollmentCustomizationV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment-customizations/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Enrollment Customization with that id does not exist`,
            },
        });
    }

    /**
     * Update an Enrollment Customization
     *
     * Updates an Enrollment Customization
     * @returns EnrollmentCustomizationV2 Success
     * @throws ApiError
     */
    public static putV2EnrollmentCustomizations({
        id,
        requestBody,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: string,
        /**
         * Enrollment Customization to update
         */
        requestBody: EnrollmentCustomizationV2,
    }): CancelablePromise<EnrollmentCustomizationV2> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/enrollment-customizations/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Enrollment Customization with that id does not exist`,
            },
        });
    }

    /**
     * Delete an Enrollment Customization with the supplied id
     *
     * Deletes an Enrollment Customization with the supplied id
     * @returns void
     * @throws ApiError
     */
    public static deleteV2EnrollmentCustomizations({
        id,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/enrollment-customizations/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get sorted and paged Enrollment Customization history objects
     *
     * Gets sorted and paged enrollment customization history objects
     * @returns HistorySearchResults Details of enrollment customization history were found
     * @throws ApiError
     */
    public static getV2EnrollmentCustomizationsHistory({
        id,
        page,
        pageSize = 100,
        sort,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: string,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property,asc/desc. Default sort order is descending. Multiple sort criteria are supported and must be entered on separate lines in Swagger UI. In the URI the 'sort' query param is duplicated for each sort criterion, e.g., ...&sort=name%2Casc&sort=date%2Cdesc
         */
        sort?: Array<string>,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment-customizations/{id}/history',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Add Enrollment Customization history object notes
     *
     * Adds enrollment customization history object notes
     * @returns ObjectHistory Notes of enrollment customization history were added
     * @throws ApiError
     */
    public static postV2EnrollmentCustomizationsHistory({
        id,
        requestBody,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: string,
        /**
         * History notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/enrollment-customizations/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Enrollment customization history can not be saved`,
            },
        });
    }

    /**
     * Retrieve the list of Prestages using this Enrollment Customization
     *
     * Retrieves the list of Prestages using this Enrollment Customization
     * @returns PrestageDependencies Success
     * @throws ApiError
     */
    public static getV2EnrollmentCustomizationsPrestages({
        id,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: string,
    }): CancelablePromise<PrestageDependencies> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment-customizations/{id}/prestages',
            path: {
                'id': id,
            },
            errors: {
                404: `Enrollment Customization with that id does not exist`,
            },
        });
    }

}
