/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeviceCommunicationSettings = {
    autoRenewMobileDeviceMdmProfileWhenCaRenewed?: boolean;
    autoRenewMobileDeviceMdmProfileWhenDeviceIdentityCertExpiring?: boolean;
    autoRenewComputerMdmProfileWhenCaRenewed?: boolean;
    autoRenewComputerMdmProfileWhenDeviceIdentityCertExpiring?: boolean;
    mdmProfileMobileDeviceExpirationLimitInDays?: 90 | 120 | 180;
    mdmProfileComputerExpirationLimitInDays?: 90 | 120 | 180;
};

