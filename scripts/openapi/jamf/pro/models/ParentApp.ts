/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SafelistedApp } from './SafelistedApp.ts';
import type { TimeFrame } from './TimeFrame.ts';

export type ParentApp = {
    timezoneId: string;
    restrictedTimes: Record<string, TimeFrame>;
    deviceGroupId: number;
    isEnabled: boolean;
    allowTemplates?: boolean;
    disassociateOnWipeAndReEnroll?: boolean;
    allowClearPasscode?: boolean;
    safelistedApps?: Array<SafelistedApp>;
};

