/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VolumePurchasingContent = {
    readonly name?: string;
    readonly licenseCountTotal?: number;
    readonly licenseCountInUse?: number;
    readonly licenseCountReported?: number;
    readonly iconUrl?: string;
    readonly deviceTypes?: Array<'IOS' | 'MACOS' | 'TVOS'>;
    readonly contentType?: 'IOS_APP' | 'MAC_APP' | 'BOOK';
    readonly pricingParam?: 'STDQ' | 'PLUS' | 'Unknown';
    readonly adamId?: string;
};

