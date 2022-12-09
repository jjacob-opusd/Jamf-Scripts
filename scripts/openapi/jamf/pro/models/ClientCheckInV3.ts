/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ClientCheckInV3 = {
    /**
     * Suggested values are 5, 15, 30, or 60. Web interface will not display correctly if not one of those. Minimim is 5, maximum is 60.
     */
    checkInFrequency?: number;
    createHooks?: boolean;
    hookLog?: boolean;
    hookPolicies?: boolean;
    createStartupScript?: boolean;
    startupLog?: boolean;
    startupPolicies?: boolean;
    startupSsh?: boolean;
    enableLocalConfigurationProfiles?: boolean;
};

