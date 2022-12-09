/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Settings for Account Driven User Enrollment. Only 1 of expirationIntervalDays or expirationIntervalSeconds can be supplied.
 */
export type AccountDrivenUserEnrollmentSessionTokenSettings = {
    enabled?: boolean;
    expirationIntervalDays?: number;
    expirationIntervalSeconds?: number;
};

