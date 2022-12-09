/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppRequestFormInputField } from '../models/AppRequestFormInputField.ts';
import type { AppRequestFormInputFieldSearchResults } from '../models/AppRequestFormInputFieldSearchResults.ts';
import type { AppRequestSettings } from '../models/AppRequestSettings.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AppRequestPreviewService {

    /**
     * Search for Form Input Fields
     *
     * Search for form input fields
     * @returns AppRequestFormInputFieldSearchResults Successful response
     * @throws ApiError
     */
    public static getV1AppRequestFormInputFields(): CancelablePromise<AppRequestFormInputFieldSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/app-request/form-input-fields',
        });
    }

    /**
     * Replace all Form Input Fields
     *
     * Replace all form input fields. Will delete, update, and create all input fields accordingly.
     *
     * @returns AppRequestFormInputField form input fields were replaced
     * @throws ApiError
     */
    public static putV1AppRequestFormInputFields({
        requestBody,
    }: {
        /**
         * list of form input fields to replace all existing fields. Will delete, update, and create all input fields accordingly.
         */
        requestBody: Array<AppRequestFormInputField>,
    }): CancelablePromise<Array<AppRequestFormInputField>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/app-request/form-input-fields',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data response`,
                404: `Specified form input field object does not exist.`,
            },
        });
    }

    /**
     * Create Form Input Field record
     *
     * Create form input field record
     *
     * @returns AppRequestFormInputField form input field record was created
     * @throws ApiError
     */
    public static postV1AppRequestFormInputFields({
        requestBody,
    }: {
        /**
         * form input field object to create. ids defined in this body will be ignored
         */
        requestBody: AppRequestFormInputField,
    }): CancelablePromise<AppRequestFormInputField> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/app-request/form-input-fields',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data response`,
            },
        });
    }

    /**
     * Get specified Form Input Field object
     *
     * Gets specified form input field object
     *
     * @returns AppRequestFormInputField Details of form input field were found
     * @throws ApiError
     */
    public static getV1AppRequestFormInputFields1({
        id,
    }: {
        /**
         * Instance id of form input field record
         */
        id: number,
    }): CancelablePromise<AppRequestFormInputField> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/app-request/form-input-fields/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified form input field object does not exist.`,
            },
        });
    }

    /**
     * Update specified Form Input Field object
     *
     * Update specified form input field object
     *
     * @returns AppRequestFormInputField form input field update
     * @throws ApiError
     */
    public static putV1AppRequestFormInputFields1({
        id,
        requestBody,
    }: {
        /**
         * Instance id of form input field record
         */
        id: number,
        /**
         * form input field object to create. ids defined in this body will be ignored
         */
        requestBody: AppRequestFormInputField,
    }): CancelablePromise<AppRequestFormInputField> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/app-request/form-input-fields/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data response`,
                404: `Specified form input field object does not exist.`,
            },
        });
    }

    /**
     * Remove specified Form Input Field record
     *
     * Removes specified form input field record
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1AppRequestFormInputFields({
        id,
    }: {
        /**
         * Instance id of form input field record
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/app-request/form-input-fields/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified form input field object does not exist.`,
            },
        });
    }

    /**
     * Get Applicastion Request Settings
     *
     * Get app request settings
     *
     * @returns AppRequestSettings Successful response
     * @throws ApiError
     */
    public static getV1AppRequestSettings(): CancelablePromise<AppRequestSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/app-request/settings',
        });
    }

    /**
     * Update Application Request Settings
     *
     * Update app request settings
     *
     * @returns AppRequestSettings App request settings updated
     * @throws ApiError
     */
    public static putV1AppRequestSettings({
        requestBody,
    }: {
        /**
         * App request settings object
         */
        requestBody: AppRequestSettings,
    }): CancelablePromise<AppRequestSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/app-request/settings',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data response`,
            },
        });
    }

}
