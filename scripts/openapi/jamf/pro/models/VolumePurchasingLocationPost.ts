/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VolumePurchasingLocationPost = {
    /**
     * If no value is provided when creating a VolumePurchasingLocation object, the 'name' will default to the 'locationName' value
     */
    name?: string;
    automaticallyPopulatePurchasedContent?: boolean;
    sendNotificationWhenNoLongerAssigned?: boolean;
    autoRegisterManagedUsers?: boolean;
    siteId?: string;
    serviceToken: string;
};

