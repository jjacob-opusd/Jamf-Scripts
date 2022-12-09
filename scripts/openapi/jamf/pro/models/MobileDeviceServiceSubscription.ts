/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MobileDeviceServiceSubscription = {
    carrierSettingsVersion?: string;
    currentCarrierNetwork?: string;
    currentMobileCountryCode?: string;
    currentMobileNetworkCode?: string;
    eid?: string;
    iccid?: string;
    imei?: string;
    dataPreferred?: boolean;
    roaming?: boolean;
    voicePreferred?: boolean;
    label?: string;
    /**
     * The unique identifier for this subscription.
     */
    labelId?: string;
    meid?: string;
    phoneNumber?: string;
    /**
     * The description of the slot that contains the SIM representing this subscription.
     */
    slot?: string;
};

