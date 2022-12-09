/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Notification } from '../models/Notification.ts';
import type { NotificationType } from '../models/NotificationType.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfProNotificationsPreviewService {

    /**
     * @deprecated
     * Get Notifications for user and site
     *
     * Gets notifications for user and site
     *
     * @returns Notification Successful response
     * @throws ApiError
     */
    public static getNotificationsAlerts(): CancelablePromise<Array<Notification>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/alerts',
        });
    }

    /**
     * @deprecated
     * DEPRECATED - USE "alerts/{type}/{id}" INSTEAD. Deletes only Patch Management notifications.
     *
     * DEPRECATED - USE "alerts/{type}/{id}" INSTEAD. Deletes only Patch Management notifications.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteNotificationsAlerts({
        id,
    }: {
        /**
         * instance ID of the notification
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications/alerts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Delete Notifications
     *
     * Deletes notifications. Option for 'type' is 'PATCH_UPDATE'.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteNotificationsAlerts1({
        id,
        type,
    }: {
        /**
         * instance ID of the notification
         */
        id: number,
        /**
         * type of the notification
         */
        type: NotificationType,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications/alerts/{type}/{id}',
            path: {
                'id': id,
                'type': type,
            },
        });
    }

}
