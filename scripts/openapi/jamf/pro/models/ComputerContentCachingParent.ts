/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComputerContentCachingParentAlert } from './ComputerContentCachingParentAlert.ts';
import type { ComputerContentCachingParentDetails } from './ComputerContentCachingParentDetails.ts';

export type ComputerContentCachingParent = {
    readonly contentCachingParentId?: string;
    readonly address?: string;
    alerts?: ComputerContentCachingParentAlert;
    details?: ComputerContentCachingParentDetails;
    readonly guid?: string;
    readonly healthy?: boolean;
    readonly port?: number;
    readonly version?: string;
};

