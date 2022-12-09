/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationType } from '../models/NotificationType.ts';
import type { NotificationV1 } from '../models/NotificationV1.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JamfProNotificationsService {

    /**
     * Get Notifications for user and site
     *
     * Gets notifications for user and site
     *
     * @returns NotificationV1 Successful response
     * @throws ApiError
     */
    public static getV1Notifications(): CancelablePromise<Array<NotificationV1>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications',
        });
    }

    /**
     * Delete Notifications
     *
     * Deletes notifications with given type and id.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteV1Notifications({
        id,
        type,
    }: {
        /**
         * instance ID of the notification
         */
        id: string,
        /**
         * type of the notification
         */
        type: NotificationType,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/notifications/{type}/{id}',
            path: {
                'id': id,
                'type': type,
            },
        });
    }

}
