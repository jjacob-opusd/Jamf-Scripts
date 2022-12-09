/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloudIdPCommon } from '../models/CloudIdPCommon.ts';
import type { ConfigurationSearchResults } from '../models/ConfigurationSearchResults.ts';
import type { ExportParameters } from '../models/ExportParameters.ts';
import type { GroupTestSearchRequest } from '../models/GroupTestSearchRequest.ts';
import type { GroupTestSearchResponse } from '../models/GroupTestSearchResponse.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { MembershipTestSearchRequest } from '../models/MembershipTestSearchRequest.ts';
import type { MembershipTestSearchResponse } from '../models/MembershipTestSearchResponse.ts';
import type { ObjectHistory } from '../models/ObjectHistory.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { UserTestSearchRequest } from '../models/UserTestSearchRequest.ts';
import type { UserTestSearchResponse } from '../models/UserTestSearchResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CloudIdpService {

    /**
     * Get information about all Cloud Identity Providers configurations.
     * Returns basic informations about all configured Cloud Identity Provider.
     * @returns ConfigurationSearchResults Cloud Identity Provider configurations informations returned.
     * @throws ApiError
     */
    public static getV1CloudIdp({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is id:asc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
    }): CancelablePromise<ConfigurationSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/cloud-idp',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Export Cloud Identity Providers collection
     *
     * Export Cloud Identity Providers collection
     *
     * @returns any Export successful
     * @throws ApiError
     */
    public static postV1CloudIdpExport({
        exportFields,
        exportLabels,
        page,
        pageSize = 100,
        sort,
        filter = '',
        requestBody,
    }: {
        /**
         * Export fields parameter, used to change default order or ignore some of the response properties. Default is empty array, which means that all fields of the response entity will be serialized. Example: export-fields=id,username
         */
        exportFields?: Array<string>,
        /**
         * Export labels parameter, used to customize fieldnames/columns in the exported file. Default is empty array, which means that response properties names will be used. Number of the provided labels must match the number of export-fields Example: export-labels=identifier,name with matching: export-fields=id,username
         */
        exportLabels?: Array<string>,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is id:desc. Multiple sort criteria are supported and must be seperated with a comma. Example: sort=id:desc,name:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: id, name. This param can be combined with paging and sorting. Example: name=="*department*"
         */
        filter?: string,
        /**
         * Optional. Override query parameters since they can make URI exceed 2,000 character limit.
         */
        requestBody?: ExportParameters,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/cloud-idp/export',
            query: {
                'export-fields': exportFields,
                'export-labels': exportLabels,
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Export fields specified incorrectly - non-existing column or duplicate on the list.`,
                503: `Export currently unavailable, all export-related resources are in use. Try again later.`,
            },
        });
    }

    /**
     * Get Cloud Identity Provider configuration with given ID.
     * Get Cloud Identity Provider configuration with given ID.
     * @returns CloudIdPCommon Cloud Identity Provider configuration returned.
     * @throws ApiError
     */
    public static getV1CloudIdp1({
        id,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
    }): CancelablePromise<CloudIdPCommon> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/cloud-idp/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `ID can only be a number.`,
                404: `Specified Cloud Identity Provider configuration does not exist.`,
            },
        });
    }

    /**
     * Get Cloud Identity Provider history
     * Gets specified Cloud Identity Provider object history
     * @returns HistorySearchResults Details of Cloud Identity Provider history were found
     * @throws ApiError
     */
    public static getV1CloudIdpHistory({
        id,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is date:desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=date:desc,name:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: username, date, note, details. This param can be combined with paging and sorting. Example: filter=username!=admin and details==*disabled* and date<2019-12-15
         */
        filter?: string,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/cloud-idp/{id}/history',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
            errors: {
                400: `Id can only be a number.`,
                404: `Specified Cloud Identity Provider object does not exist.`,
            },
        });
    }

    /**
     * Add Cloud Identity Provider history note
     * Adds specified Cloud Identity Provider object history notes
     *
     * @returns ObjectHistory Notes of Cloud Identity Provider history were added
     * @throws ApiError
     */
    public static postV1CloudIdpHistory({
        id,
        requestBody,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<ObjectHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/cloud-idp/{id}/history',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Specified Cloud Identity Provider object does not exist.`,
                503: `Notes of Cloud Identity Provider can not be saved`,
            },
        });
    }

    /**
     * Get group test search
     * Do test search to ensure about configuration and mappings
     * @returns GroupTestSearchResponse Cloud Identity Provider test search result returned.
     * @throws ApiError
     */
    public static postV1CloudIdpTestGroup({
        id,
        requestBody,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
        /**
         * Search request
         */
        requestBody: GroupTestSearchRequest,
    }): CancelablePromise<GroupTestSearchResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/cloud-idp/{id}/test-group',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Cloud Identity Provider does not exist or is not active.`,
            },
        });
    }

    /**
     * Get user test search
     * Do test search to ensure about configuration and mappings
     * @returns UserTestSearchResponse Cloud Identity Provider test search result returned.
     * @throws ApiError
     */
    public static postV1CloudIdpTestUser({
        id,
        requestBody,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
        /**
         * Search request
         */
        requestBody: UserTestSearchRequest,
    }): CancelablePromise<UserTestSearchResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/cloud-idp/{id}/test-user',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Cloud Identity Provider does not exist or is not active.`,
            },
        });
    }

    /**
     * Get membership test search
     * Do test search to ensure about configuration and mappings
     * @returns MembershipTestSearchResponse Cloud Identity Provider test search result returned.
     * @throws ApiError
     */
    public static postV1CloudIdpTestUserMembership({
        id,
        requestBody,
    }: {
        /**
         * Cloud Identity Provider identifier
         */
        id: string,
        /**
         * Search request
         */
        requestBody: MembershipTestSearchRequest,
    }): CancelablePromise<MembershipTestSearchResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/cloud-idp/{id}/test-user-membership',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Cloud Identity Provider does not exist or is not active.`,
            },
        });
    }

}
