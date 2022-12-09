/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalRecipient } from './ExternalRecipient.ts';
import type { InternalRecipient } from './InternalRecipient.ts';

export type VolumePurchasingSubscriptionBase = {
    name: string;
    enabled?: boolean;
    triggers?: Array<'NO_MORE_LICENSES' | 'REMOVED_FROM_APP_STORE'>;
    locationIds?: Array<string>;
    internalRecipients?: Array<InternalRecipient>;
    externalRecipients?: Array<ExternalRecipient>;
    siteId?: string;
};

