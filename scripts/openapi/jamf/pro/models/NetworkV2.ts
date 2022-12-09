/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NetworkV2 = {
    cellularTechnology?: string;
    voiceRoamingEnabled?: boolean;
    imei?: string;
    iccid?: string;
    meid?: string;
    /**
     * EID or "embedded identity document" is a number associated with the eSIM on a device
     */
    readonly eid?: string;
    carrierSettingsVersion?: string;
    currentCarrierNetwork?: string;
    currentMobileCountryCode?: string;
    currentMobileNetworkCode?: string;
    homeCarrierNetwork?: string;
    homeMobileCountryCode?: string;
    homeMobileNetworkCode?: string;
    dataRoamingEnabled?: boolean;
    roaming?: boolean;
    personalHotspotEnabled?: boolean;
    phoneNumber?: string;
};

