/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplianceVendorDeviceInformation } from './ComplianceVendorDeviceInformation.ts';

/**
 * Device compliance information record
 */
export type DeviceComplianceInformation = {
    /**
     * ID of the device
     */
    deviceId?: string;
    /**
     * If device is applicable for compliance calculation
     */
    applicable?: boolean;
    /**
     * Device compliance state. Possible values are:
     * * `UNKNOWN` for unknow compliance state, this usually means that the compliance state is being calculated,
     * * `NON_COMPLIANT` for non compliant state,
     * * `COMPLIANT` for compliant state
     *
     */
    complianceState?: 'UNKNOWN' | 'NON_COMPLIANT' | 'COMPLIANT';
    /**
     * Name of the compliance vendor
     */
    complianceVendor?: string;
    complianceVendorDeviceInformation?: ComplianceVendorDeviceInformation;
};

