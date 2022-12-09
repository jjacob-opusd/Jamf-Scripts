/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { VolumePurchasingSubscription } from '../models/VolumePurchasingSubscription.ts';
import type { VolumePurchasingSubscriptionBase } from '../models/VolumePurchasingSubscriptionBase.ts';
import type { VolumePurchasingSubscriptions } from '../models/VolumePurchasingSubscriptions.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class VolumePurchasingSubscriptionsService {

    /**
     * Retrieve Volume Purchasing Subscriptions
     * Retrieves Volume Purchasing Subscriptions
     * @returns VolumePurchasingSubscriptions Success
     * @throws ApiError
     */
    public static getV1VolumePurchasingSubscriptions({
        page,
        pageSize = 100,
        sort,
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: property:asc/desc. Default sort is id:asc. Multiple sort criteria are supported and must be separated with a comma. Allowable properties are id, name, and enabled.
         */
        sort?: Array<string>,
    }): CancelablePromise<VolumePurchasingSubscriptions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/volume-purchasing-subscriptions',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
            },
        });
    }

    /**
     * Create a Volume Purchasing Subscription
     * Creates a Volume Purchasing Subscription
     * @returns HrefResponse Volume Purchasing Subscription was created
     * @throws ApiError
     */
    public static postV1VolumePurchasingSubscriptions({
        requestBody,
    }: {
        /**
         * Volume Purchasing Subscription to create
         */
        requestBody: VolumePurchasingSubscriptionBase,
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/volume-purchasing-subscriptions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Failed to create volume purchasing subscription`,
            },
        });
    }

    /**
     * Retrieve a Volume Purchasing Subscription with the supplied id
     * Retrieves a Volume Purchasing Subscription with the supplied id
     * @returns VolumePurchasingSubscription Success
     * @throws ApiError
     */
    public static getV1VolumePurchasingSubscriptions1({
        id,
    }: {
        /**
         * Volume Purchasing Subscription identifier
         */
        id: string,
    }): CancelablePromise<VolumePurchasingSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/volume-purchasing-subscriptions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Volume Purchasing Subscription with that id does not exist`,
            },
        });
    }

    /**
     * Update a Volume Purchasing Subscription
     * Updates a Volume Purchasing Subscription
     * @returns VolumePurchasingSubscription Success
     * @throws ApiError
     */
    public static putV1VolumePurchasingSubscriptions({
        id,
        requestBody,
    }: {
        /**
         * Volume Purchasing Subscription identifier
         */
        id: string,
        /**
         * Volume Purchasing Subscription to update
         */
        requestBody: VolumePurchasingSubscriptionBase,
    }): CancelablePromise<VolumePurchasingSubscription> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/volume-purchasing-subscriptions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Volume Purchasing Subscription with that id does not exist`,
                500: `Failed to update volume purchasing subscription`,
            },
        });
    }

    /**
     * Delete a Volume Purchasing Subscription with the supplied id
     * Deletes a Volume Purchasing Subscription with the supplied id
     * @returns void
     * @throws ApiError
     */
    public static deleteV1VolumePurchasingSubscriptions({
        id,
    }: {
        /**
         * Volume Purchasing Subscription identifier
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/volume-purchasing-subscriptions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `VPP Subscription with that id does not exist`,
            },
        });
    }

}
