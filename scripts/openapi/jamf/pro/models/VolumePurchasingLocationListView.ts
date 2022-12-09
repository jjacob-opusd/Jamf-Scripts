/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VolumePurchasingLocationListView = {
    name?: string;
    readonly totalPurchasedLicenses?: number;
    readonly totalUsedLicenses?: number;
    readonly id?: string;
    readonly appleId?: string;
    readonly organizationName?: string;
    readonly tokenExpiration?: string;
    /**
     * The two-letter ISO 3166-1 code that designates the country where the Volume Purchasing account is located.
     */
    readonly countryCode?: string;
    readonly locationName?: string;
    /**
     * If this is "true", the clientContext used by this server does not match the clientContext returned by the Volume Purchasing API.
     */
    readonly clientContextMismatch?: boolean;
    automaticallyPopulatePurchasedContent?: boolean;
    sendNotificationWhenNoLongerAssigned?: boolean;
    autoRegisterManagedUsers?: boolean;
    siteId?: string;
};

