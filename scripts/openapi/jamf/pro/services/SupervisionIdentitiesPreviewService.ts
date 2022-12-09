/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SupervisionIdentity } from '../models/SupervisionIdentity.ts';
import type { SupervisionIdentityCertificateUpload } from '../models/SupervisionIdentityCertificateUpload.ts';
import type { SupervisionIdentityCreate } from '../models/SupervisionIdentityCreate.ts';
import type { SupervisionIdentitySearchResults } from '../models/SupervisionIdentitySearchResults.ts';
import type { SupervisionIdentityUpdate } from '../models/SupervisionIdentityUpdate.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SupervisionIdentitiesPreviewService {

    /**
     * Search for sorted and paged Supervision Identities
     *
     * Search for sorted and paged supervision identities
     * @returns SupervisionIdentitySearchResults Successful response
     * @throws ApiError
     */
    public static getV1SupervisionIdentities({
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
    }): CancelablePromise<SupervisionIdentitySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/supervision-identities',
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
     * Create a Supervision Identity for the supplied information
     *
     * Creates a Supervision Identity for the supplied information
     * @returns SupervisionIdentity Success
     * @throws ApiError
     */
    public static postV1SupervisionIdentities({
        requestBody,
    }: {
        requestBody: SupervisionIdentityCreate,
    }): CancelablePromise<SupervisionIdentity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/supervision-identities',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Something went wrong`,
            },
        });
    }

    /**
     * Upload the Supervision Identity .p12 file
     *
     * Uploads the Supervision Identity .p12 file
     * @returns SupervisionIdentity Success
     * @throws ApiError
     */
    public static postV1SupervisionIdentitiesUpload({
        requestBody,
    }: {
        /**
         * The base 64 encoded .p12 file alone with other needed information
         */
        requestBody: SupervisionIdentityCertificateUpload,
    }): CancelablePromise<SupervisionIdentity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/supervision-identities/upload',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Something went wrong`,
            },
        });
    }

    /**
     * Retrieve a Supervision Identity with the supplied id
     *
     * Retrieves a Supervision Identity with the supplied id
     * @returns SupervisionIdentity Success
     * @throws ApiError
     */
    public static getV1SupervisionIdentities1({
        id,
    }: {
        /**
         * Supervision Identity identifier
         */
        id: number,
    }): CancelablePromise<SupervisionIdentity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/supervision-identities/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Supervision Identity with that id does not exist`,
            },
        });
    }

    /**
     * Update a Supervision Identity with the supplied information
     *
     * Updates a Supervision Identity with the supplied information
     * @returns SupervisionIdentity Success
     * @throws ApiError
     */
    public static putV1SupervisionIdentities({
        id,
        requestBody,
    }: {
        /**
         * Supervision Identity identifier
         */
        id: number,
        requestBody: SupervisionIdentityUpdate,
    }): CancelablePromise<SupervisionIdentity> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/supervision-identities/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Supervision Identity with that id does not exist`,
                500: `Something went wrong`,
            },
        });
    }

    /**
     * Delete a Supervision Identity with the supplied id
     *
     * Deletes a Supervision Identity with the supplied id
     * @returns void
     * @throws ApiError
     */
    public static deleteV1SupervisionIdentities({
        id,
    }: {
        /**
         * Supervision Identity identifier
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/supervision-identities/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Supervision Identity with that id does not exist`,
            },
        });
    }

    /**
     * Download the Supervision Identity .p12 file
     *
     * Download the Supervision Identity .p12 file
     * @returns binary Success
     * @throws ApiError
     */
    public static getV1SupervisionIdentitiesDownload({
        id,
    }: {
        /**
         * Supervision Identity identifier
         */
        id: number,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/supervision-identities/{id}/download',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

}
