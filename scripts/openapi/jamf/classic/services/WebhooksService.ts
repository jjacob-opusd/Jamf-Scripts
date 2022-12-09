/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class WebhooksService {

    /**
     * Finds all webhooks
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findWebhooks(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhooks',
        });
    }

    /**
     * Deletes a webhook by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteWebhookById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/webhooks/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds webhooks by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findWebhooksById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhooks/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new webhook by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createWebhookById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/webhooks/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing webhook by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateWebhookById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/webhooks/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds webhooks by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findWebhooksByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhooks/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
