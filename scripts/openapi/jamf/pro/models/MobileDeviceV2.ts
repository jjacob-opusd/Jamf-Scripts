/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MobileDeviceV2 = {
    readonly id?: string;
    name?: string;
    serialNumber?: string;
    wifiMacAddress?: string;
    udid?: string;
    phoneNumber?: string;
    model?: string;
    modelIdentifier?: string;
    username?: string;
    type?: 'ios' | 'tvos' | 'unknown';
    readonly managementId?: string;
    softwareUpdateDeviceId?: string;
};

