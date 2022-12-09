/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VolumePurchasingContent } from './VolumePurchasingContent.ts';
import type { VolumePurchasingLocationListView } from './VolumePurchasingLocationListView.ts';

export type VolumePurchasingLocation = (VolumePurchasingLocationListView & {
    readonly content?: Array<VolumePurchasingContent>;
});

