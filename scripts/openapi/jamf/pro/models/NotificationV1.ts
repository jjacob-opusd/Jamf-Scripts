/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationType } from './NotificationType.ts';

/**
 * Jamf Pro notification used for important alerts.
 */
export type NotificationV1 = {
    type?: NotificationType;
    id?: string;
    params?: Record<string, any>;
};

