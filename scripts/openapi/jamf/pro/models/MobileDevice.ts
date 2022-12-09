/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MobileDevice = {
    id?: number;
    name?: string;
    serialNumber?: string;
    wifiMacAddress?: string;
    udid?: string;
    phoneNumber?: string;
    model?: string;
    modelIdentifier?: string;
    username?: string;
    type?: 'ios' | 'appleTv' | 'android' | 'unknown';
    softwareUpdateDeviceId?: string;
};

