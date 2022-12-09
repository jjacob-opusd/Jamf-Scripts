/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnrollmentAccessGroupV2 = {
    /**
     * Group ID.
     */
    readonly id?: string;
    readonly ldapServerId?: string;
    name?: string;
    siteId?: string;
    enterpriseEnrollmentEnabled?: boolean;
    personalEnrollmentEnabled?: boolean;
    accountDrivenUserEnrollmentEnabled?: boolean;
    requireEula?: boolean;
};

