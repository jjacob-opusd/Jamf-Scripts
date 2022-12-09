/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPreferencesJson } from '../models/UserPreferencesJson.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfProUserAccountSettingsService {

    /**
     * Get the user setting for the authenticated user and key
     *
     * Gets the user setting for the authenticated user and key.
     *
     * @returns UserPreferencesJson Successful response
     * @throws ApiError
     */
    public static getV1UserPreferences({
        keyId,
    }: {
        /**
         * user setting to be retrieved
         */
        keyId: string,
    }): CancelablePromise<UserPreferencesJson> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/user/preferences/{keyId}',
            path: {
                'keyId': keyId,
            },
        });
    }

    /**
     * Persist the user setting
     *
     * Persists the user setting
     *
     * @returns UserPreferencesJson setting sucessfully updated
     * @throws ApiError
     */
    public static putV1UserPreferences({
        keyId,
        requestBody,
    }: {
        /**
         * unique key of user setting to be persisted
         */
        keyId: string,
        /**
         * user setting value to be persisted
         */
        requestBody?: any,
    }): CancelablePromise<UserPreferencesJson> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/user/preferences/{keyId}',
            path: {
                'keyId': keyId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove specified setting for authenticated user
     *
     * Remove specified setting for authenticated user
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1UserPreferences({
        keyId,
    }: {
        /**
         * unique key of user setting to be persisted
         */
        keyId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/user/preferences/{keyId}',
            path: {
                'keyId': keyId,
            },
        });
    }

}
