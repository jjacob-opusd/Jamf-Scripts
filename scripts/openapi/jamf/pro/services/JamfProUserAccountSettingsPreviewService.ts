/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPreferencesJson } from '../models/UserPreferencesJson.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfProUserAccountSettingsPreviewService {

    /**
     * @deprecated
     * Get the user setting for the authenticated user and key
     *
     * Gets the user setting for the authenticated user and key.
     *
     * @returns UserPreferencesJson Successful response
     * @throws ApiError
     */
    public static getUserObjPreference({
        key,
    }: {
        /**
         * user setting to be retrieved
         */
        key: string,
    }): CancelablePromise<UserPreferencesJson> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/obj/preference/{key}',
            path: {
                'key': key,
            },
            errors: {
                404: `setting not found`,
            },
        });
    }

    /**
     * @deprecated
     * Persist the user setting
     *
     * Persists the user setting
     *
     * @returns UserPreferencesJson setting sucessfully updated
     * @throws ApiError
     */
    public static putUserObjPreference({
        key,
        requestBody,
    }: {
        /**
         * key of user setting to be persisted
         */
        key: string,
        /**
         * user setting value to be persisted
         */
        requestBody?: string,
    }): CancelablePromise<UserPreferencesJson> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/obj/preference/{key}',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Remove specified setting for authenticated user
     *
     * Remove specified setting for authenticated user
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteUserObjPreference({
        key,
    }: {
        /**
         * key of user setting to be persisted
         */
        key: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/obj/preference/{key}',
            path: {
                'key': key,
            },
            errors: {
                404: `setting not found`,
            },
        });
    }

}
