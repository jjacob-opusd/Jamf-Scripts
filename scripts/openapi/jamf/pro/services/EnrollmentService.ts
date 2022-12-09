/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessGroupsPreviewSearchResults } from '../models/AccessGroupsPreviewSearchResults.ts';
import type { AccessGroupsV2SearchResults } from '../models/AccessGroupsV2SearchResults.ts';
import type { AccountDrivenUserEnrollmentSessionTokenSettings } from '../models/AccountDrivenUserEnrollmentSessionTokenSettings.ts';
import type { EnrollmentAccessGroupPreview } from '../models/EnrollmentAccessGroupPreview.ts';
import type { EnrollmentAccessGroupV2 } from '../models/EnrollmentAccessGroupV2.ts';
import type { EnrollmentProcessTextObject } from '../models/EnrollmentProcessTextObject.ts';
import type { EnrollmentSettingsV2 } from '../models/EnrollmentSettingsV2.ts';
import type { ExportParameters } from '../models/ExportParameters.ts';
import type { HistorySearchResults } from '../models/HistorySearchResults.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { Ids } from '../models/Ids.ts';
import type { LanguageCode } from '../models/LanguageCode.ts';
import type { ObjectHistoryNote } from '../models/ObjectHistoryNote.ts';
import type { ProcessTextsSearchResults } from '../models/ProcessTextsSearchResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class EnrollmentService {

    /**
     * Retrieve the Account Driven User Enrollment Session Token Settings
     *
     * Retrieve the Account Driven User Enrollment Session Token Settings
     *
     * @returns AccountDrivenUserEnrollmentSessionTokenSettings Successful response
     * @throws ApiError
     */
    public static getV1AdueSessionTokenSettings(): CancelablePromise<AccountDrivenUserEnrollmentSessionTokenSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/adue-session-token-settings',
        });
    }

    /**
     * Update Account Driven User Enrollment Session Token Settings.
     *
     * Update the Account Driven User Enrollment Session Token Settings object.
     *
     * @returns AccountDrivenUserEnrollmentSessionTokenSettings Successfully updated Account Driven User Enrollment Session Token Settings object
     * @throws ApiError
     */
    public static putV1AdueSessionTokenSettings({
        requestBody,
    }: {
        /**
         * Update Account Driven User Enrollment Session Token Settings.
         */
        requestBody: AccountDrivenUserEnrollmentSessionTokenSettings,
    }): CancelablePromise<AccountDrivenUserEnrollmentSessionTokenSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/adue-session-token-settings',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data response`,
            },
        });
    }

    /**
     * Get Enrollment object and Re-enrollment settings
     *
     * Gets Enrollment object and re-enrollment settings. The settings can be altered without providing the existing management password by providing the following value for `managementPassword`:
     * `\uffff\uffff\uffff\uffff\uffff\uffff\uffff\uffff\uffff\uffff\uffff\uffff\uffff\uffff\uffff`.
     *
     * @returns EnrollmentSettingsV2 Successful response
     * @throws ApiError
     */
    public static getV2Enrollment(): CancelablePromise<EnrollmentSettingsV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment',
        });
    }

    /**
     * Update Enrollment object
     *
     * Update enrollment object. Regarding the `developerCertificateIdentity`,
     * if this object is omitted, the certificate will not be deleted from Jamf Pro.
     * The `identityKeystore` is the entire cert file as a base64 encoded string. The
     * `md5Sum` field is not required in the PUT request, but is calculated and returned
     * in the response.
     *
     * @returns EnrollmentSettingsV2 Successfully updated enrollment object
     * @throws ApiError
     */
    public static putV2Enrollment({
        requestBody,
    }: {
        /**
         * Update enrollment
         */
        requestBody: EnrollmentSettingsV2,
    }): CancelablePromise<EnrollmentSettingsV2> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/enrollment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * @deprecated
     * Retrieve the configured LDAP groups configured for User-Initiated Enrollment
     *
     * Retrieves the configured LDAP groups configured for User-Initiated Enrollment.
     * @returns AccessGroupsV2SearchResults Found access groups matching search params.
     * @throws ApiError
     */
    public static getV2EnrollmentAccessGroups({
        page,
        pageSize = 100,
        sort,
        allUsersOptionFirst = false,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: `property:asc/desc`. Default sort
         * is `name:asc`. Multiple sort criteria are supported and must be separated
         * with a comma. Example: `sort=date:desc,name:asc`.
         *
         */
        sort?: Array<string>,
        /**
         * Return "All LDAP Users" option on the first position if it is present in the current page
         */
        allUsersOptionFirst?: boolean,
    }): CancelablePromise<AccessGroupsV2SearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment/access-groups',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'all-users-option-first': allUsersOptionFirst,
            },
        });
    }

    /**
     * @deprecated
     * Add the configured LDAP group for User-Initiated Enrollment.
     *
     * Add the configured LDAP group for User-Initiated Enrollment.
     *
     * @returns HrefResponse Configured LDAP group record was created.
     * @throws ApiError
     */
    public static postV2EnrollmentAccessGroups({
        requestBody,
    }: {
        /**
         * Configured LDAP group to create.
         */
        requestBody: EnrollmentAccessGroupV2,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/enrollment/access-groups',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `A record with given ldapServerId and name already exists.`,
            },
        });
    }

    /**
     * @deprecated
     * Retrieve the configured LDAP groups configured for User-Initiated Enrollment
     *
     * Retrieves the configured LDAP groups configured for User-Initiated Enrollment.
     * @returns EnrollmentAccessGroupV2 Successful query
     * @throws ApiError
     */
    public static getV2EnrollmentAccessGroups1({
        serverId,
        groupId,
    }: {
        /**
         * LDAP server id.
         */
        serverId: string,
        /**
         * LDAP group id.
         */
        groupId: string,
    }): CancelablePromise<EnrollmentAccessGroupV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment/access-groups/{serverId}/{groupId}',
            path: {
                'serverId': serverId,
                'groupId': groupId,
            },
            errors: {
                404: `Group not found`,
            },
        });
    }

    /**
     * @deprecated
     * Modify the configured LDAP groups configured for User-Initiated Enrollment
     *
     * Modifies the configured LDAP groups configured for User-Initiated Enrollment.
     * @returns EnrollmentAccessGroupV2 Successful query
     * @throws ApiError
     */
    public static putV2EnrollmentAccessGroups({
        serverId,
        groupId,
        requestBody,
    }: {
        /**
         * LDAP server id.
         */
        serverId: string,
        /**
         * LDAP group id.
         */
        groupId: string,
        requestBody?: EnrollmentAccessGroupV2,
    }): CancelablePromise<EnrollmentAccessGroupV2> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/enrollment/access-groups/{serverId}/{groupId}',
            path: {
                'serverId': serverId,
                'groupId': groupId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * @deprecated
     * Delete an LDAP group's access to user initiated Enrollment
     *
     * Deletes an LDAP group's access to user initiated enrollment. The group "All LDAP Users" cannot be deleted, but it can be modified to disallow User-Initiated Enrollment.
     * @returns void
     * @throws ApiError
     */
    public static deleteV2EnrollmentAccessGroups({
        serverId,
        groupId,
    }: {
        /**
         * LDAP server id
         */
        serverId: string,
        /**
         * LDAP group id.
         */
        groupId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/enrollment/access-groups/{serverId}/{groupId}',
            path: {
                'serverId': serverId,
                'groupId': groupId,
            },
            errors: {
                400: `Group not found`,
            },
        });
    }

    /**
     * @deprecated
     * Retrieve the list of languages and corresponding ISO 639-1 Codes but only those not already added to Enrollment
     *
     * Retrieves the list of languages and corresponding ISO 639-1 Codes, but only those not already added to Enrollment.
     * @returns LanguageCode Retrieves the list of languages and corresponding ISO 639-1 Codes, but only those not already added to Enrollment.
     * @throws ApiError
     */
    public static getV2EnrollmentFilteredLanguageCodes(): CancelablePromise<Array<LanguageCode>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment/filtered-language-codes',
        });
    }

    /**
     * Get sorted and paged Enrollment history object
     *
     * Gets sorted and paged Enrollment history object
     *
     * @returns HistorySearchResults Details of enrollment history were found
     * @throws ApiError
     */
    public static getV2EnrollmentHistory({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: `property:asc/desc`. Default sort
         * is `date:desc`. Multiple sort criteria are supported and must be separated
         * with a comma. Example: `sort=date:desc,name:asc`.
         *
         */
        sort?: Array<string>,
    }): CancelablePromise<HistorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment/history',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Add Enrollment history object notes
     *
     * Adds Enrollment history object notes
     *
     * @returns HrefResponse Notes of enrollment history were added
     * @throws ApiError
     */
    public static postV2EnrollmentHistory({
        requestBody,
    }: {
        /**
         * history notes to create
         */
        requestBody: ObjectHistoryNote,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/enrollment/history',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                503: `Enrollment history can not be saved`,
            },
        });
    }

    /**
     * Export enrollment history collection
     *
     * Export enrollment history collection
     *
     * @returns any Export successful
     * @throws ApiError
     */
    public static postV2EnrollmentHistoryExport({
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
         * Sorting criteria in the format: property:asc/desc. Default sort is id:desc. Multiple sort criteria are supported and must be separated with a comma. Example: sort=id:desc,name:asc
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter history notes collection. Default filter is empty query - returning all results for the requested page. Fields allowed in the query: id, name. This param can be combined with paging and sorting. Example: name=="*script*"
         */
        filter?: string,
        /**
         * Optional. Override query parameters since they can make URI exceed 2,000 character limit.
         */
        requestBody?: ExportParameters,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/enrollment/history/export',
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
                400: `Export fields specified incorrectly - non-existing column or duplicate in the list.
                Supported columns: id,name,categoryName,categoryId,priority.
                `,
                503: `Export currently unavailable, all export-related resources are in use. Try again later.`,
            },
        });
    }

    /**
     * @deprecated
     * Retrieve the list of languages and corresponding ISO 639-1 Codes
     *
     * Retrieves the list of languages and corresponding ISO 639-1 Codes.
     * @returns LanguageCode List of languages and corresponding ISO 639-1 Codes.
     * @throws ApiError
     */
    public static getV2EnrollmentLanguageCodes(): CancelablePromise<Array<LanguageCode>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment/language-codes',
        });
    }

    /**
     * @deprecated
     * Get an array of the language codes that have Enrollment messaging
     *
     * Returns an array of the language codes that have enrollment messaging currently configured.
     * @returns ProcessTextsSearchResults Found languages matching search params.
     * @throws ApiError
     */
    public static getV2EnrollmentLanguages({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort
         * is `languageCode:asc`. Multiple sort criteria are supported and must be separated
         * with a comma. Example: `sort=date:desc,name:asc`.
         *
         */
        sort?: Array<string>,
    }): CancelablePromise<ProcessTextsSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment/languages',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * @deprecated
     * Delete multiple configured languages from User-Initiated Enrollment settings
     *
     * Delete multiple configured languages from User-Initiated Enrollment settings
     * @returns void
     * @throws ApiError
     */
    public static postV2EnrollmentLanguagesDeleteMultiple({
        requestBody,
    }: {
        /**
         * ids of each language to delete
         */
        requestBody: Ids,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/enrollment/languages/delete-multiple',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request processed.  Returns ids and error codes of any language unable to be deleted.  Expected error codes: INVALID_ID - id does not exist SYSTEM_EXCEPTION - a system exception occurred trying to delete the language.`,
            },
        });
    }

    /**
     * @deprecated
     * Retrieve the Enrollment messaging for a language
     *
     * Retrieves the enrollment messaging for a language.
     * @returns EnrollmentProcessTextObject Successful response
     * @throws ApiError
     */
    public static getV2EnrollmentLanguages1({
        languageId,
    }: {
        /**
         * Two letter ISO 639-1 Language Code
         */
        languageId: string,
    }): CancelablePromise<EnrollmentProcessTextObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enrollment/languages/{languageId}',
            path: {
                'languageId': languageId,
            },
            errors: {
                404: `Language not found`,
            },
        });
    }

    /**
     * @deprecated
     * Edit Enrollment messaging for a language
     *
     * Edit enrollment messaging for a language.
     * @returns EnrollmentProcessTextObject Successful response
     * @throws ApiError
     */
    public static putV2EnrollmentLanguages({
        languageId,
        requestBody,
    }: {
        /**
         * Two letter ISO 639-1 Language Code
         */
        languageId: string,
        requestBody?: EnrollmentProcessTextObject,
    }): CancelablePromise<EnrollmentProcessTextObject> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/enrollment/languages/{languageId}',
            path: {
                'languageId': languageId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * @deprecated
     * Delete the Enrollment messaging for a language
     *
     * Delete the enrollment messaging for a language.
     * @returns void
     * @throws ApiError
     */
    public static deleteV2EnrollmentLanguages({
        languageId,
    }: {
        /**
         * Two letter ISO 639-1 Language Code
         */
        languageId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/enrollment/languages/{languageId}',
            path: {
                'languageId': languageId,
            },
            errors: {
                404: `Language not found`,
            },
        });
    }

    /**
     * Retrieve the configured LDAP groups configured for User-Initiated Enrollment.
     *
     * Retrieves the configured LDAP groups configured for User-Initiated Enrollment.
     *
     * @returns AccessGroupsPreviewSearchResults Found access groups matching search params.
     * @throws ApiError
     */
    public static getV3EnrollmentAccessGroups({
        page,
        pageSize = 100,
        sort,
        allUsersOptionFirst = false,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: `property:asc/desc`. Default sort
         * is `name:asc`. Multiple sort criteria are supported and must be separated
         * with a comma. Example: `sort=date:desc,name:asc`.
         *
         */
        sort?: Array<string>,
        /**
         * Return "All LDAP Users" option on the first position if it is present in the current page
         */
        allUsersOptionFirst?: boolean,
    }): CancelablePromise<AccessGroupsPreviewSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/enrollment/access-groups',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'all-users-option-first': allUsersOptionFirst,
            },
        });
    }

    /**
     * Add the configured LDAP group for User-Initiated Enrollment.
     *
     * Add the configured LDAP group for User-Initiated Enrollment.
     *
     * @returns HrefResponse Configured LDAP group record was created.
     * @throws ApiError
     */
    public static postV3EnrollmentAccessGroups({
        requestBody,
    }: {
        /**
         * Configured LDAP group to create.
         */
        requestBody: EnrollmentAccessGroupPreview,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/enrollment/access-groups',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `A record with given ldapServerId and name already exists.`,
            },
        });
    }

    /**
     * Retrieve the configured LDAP groups configured for User-Initiated Enrollment
     *
     * Retrieves the configured LDAP groups configured for User-Initiated Enrollment.
     * @returns EnrollmentAccessGroupPreview Successful query
     * @throws ApiError
     */
    public static getV3EnrollmentAccessGroups1({
        id,
    }: {
        /**
         * Autogenerated Access Group ID.
         */
        id: string,
    }): CancelablePromise<EnrollmentAccessGroupPreview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/enrollment/access-groups/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Group not found`,
            },
        });
    }

    /**
     * Modify the configured LDAP groups configured for User-Initiated Enrollment. Only exiting Access Groups can be updated.
     *
     * Modify the configured LDAP groups configured for User-Initiated Enrollment. Only exiting Access Groups can be updated.
     *
     * @returns EnrollmentAccessGroupPreview Successful update
     * @throws ApiError
     */
    public static putV3EnrollmentAccessGroups({
        id,
        requestBody,
    }: {
        /**
         * Autogenerated Access Group ID.
         */
        id: string,
        requestBody: EnrollmentAccessGroupPreview,
    }): CancelablePromise<EnrollmentAccessGroupPreview> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v3/enrollment/access-groups/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Delete an LDAP group's access to user initiated Enrollment.
     *
     * Deletes an LDAP group's access to user initiated enrollment. The group "All LDAP Users" cannot be deleted, but it can be modified to disallow User-Initiated Enrollment.
     * @returns void
     * @throws ApiError
     */
    public static deleteV3EnrollmentAccessGroups({
        id,
    }: {
        /**
         * Autogenerated Access Group ID.
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/enrollment/access-groups/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `"All LDAP Users" cannot be deleted.
                `,
                404: `Group not found`,
            },
        });
    }

    /**
     * Retrieve the list of languages and corresponding ISO 639-1 Codes but only those not already added to Enrollment
     *
     * Retrieves the list of languages and corresponding ISO 639-1 Codes, but only those not already added to Enrollment.
     * @returns LanguageCode Retrieves the list of languages and corresponding ISO 639-1 Codes, but only those not already added to Enrollment.
     * @throws ApiError
     */
    public static getV3EnrollmentFilteredLanguageCodes(): CancelablePromise<Array<LanguageCode>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/enrollment/filtered-language-codes',
        });
    }

    /**
     * Retrieve the list of languages and corresponding ISO 639-1 Codes
     *
     * Retrieves the list of languages and corresponding ISO 639-1 Codes.
     * @returns LanguageCode List of languages and corresponding ISO 639-1 Codes.
     * @throws ApiError
     */
    public static getV3EnrollmentLanguageCodes(): CancelablePromise<Array<LanguageCode>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/enrollment/language-codes',
        });
    }

    /**
     * Get an array of the language codes that have Enrollment messaging
     *
     * Returns an array of the language codes that have enrollment messaging currently configured.
     * @returns ProcessTextsSearchResults Found languages matching search params.
     * @throws ApiError
     */
    public static getV3EnrollmentLanguages({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort
         * is `languageCode:asc`. Multiple sort criteria are supported and must be separated
         * with a comma. Example: `sort=date:desc,name:asc`.
         *
         */
        sort?: Array<string>,
    }): CancelablePromise<ProcessTextsSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/enrollment/languages',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Delete multiple configured languages from User-Initiated Enrollment settings
     *
     * Delete multiple configured languages from User-Initiated Enrollment settings
     * @returns void
     * @throws ApiError
     */
    public static postV3EnrollmentLanguagesDeleteMultiple({
        requestBody,
    }: {
        /**
         * ids of each language to delete
         */
        requestBody: Ids,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/enrollment/languages/delete-multiple',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request processed.  Returns ids and error codes of any language unable to be deleted.  Expected error codes: INVALID_ID - id does not exist SYSTEM_EXCEPTION - a system exception occurred trying to delete the language.`,
            },
        });
    }

    /**
     * Retrieve the Enrollment messaging for a language
     *
     * Retrieves the enrollment messaging for a language.
     * @returns EnrollmentProcessTextObject Successful response
     * @throws ApiError
     */
    public static getV3EnrollmentLanguages1({
        languageId,
    }: {
        /**
         * Two letter ISO 639-1 Language Code
         */
        languageId: string,
    }): CancelablePromise<EnrollmentProcessTextObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/enrollment/languages/{languageId}',
            path: {
                'languageId': languageId,
            },
            errors: {
                404: `Language not found`,
            },
        });
    }

    /**
     * Edit Enrollment messaging for a language
     *
     * Edit enrollment messaging for a language.
     * @returns EnrollmentProcessTextObject Successful response
     * @throws ApiError
     */
    public static putV3EnrollmentLanguages({
        languageId,
        requestBody,
    }: {
        /**
         * Two letter ISO 639-1 Language Code
         */
        languageId: string,
        requestBody?: EnrollmentProcessTextObject,
    }): CancelablePromise<EnrollmentProcessTextObject> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v3/enrollment/languages/{languageId}',
            path: {
                'languageId': languageId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * Delete the Enrollment messaging for a language
     *
     * Delete the enrollment messaging for a language.
     * @returns void
     * @throws ApiError
     */
    public static deleteV3EnrollmentLanguages({
        languageId,
    }: {
        /**
         * Two letter ISO 639-1 Language Code
         */
        languageId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/enrollment/languages/{languageId}',
            path: {
                'languageId': languageId,
            },
            errors: {
                404: `Language not found`,
            },
        });
    }

}
