/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppRequestSettings = {
    isEnabled?: boolean;
    /**
     * Can be any of the country codes from /v1/app-store-country-codes or "deviceLocale" to use each individual device's locale
     */
    appStoreLocale?: string;
    requesterUserGroupId?: number;
    approverEmails?: Array<string>;
};

