/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeviceEnrollmentToken = {
    /**
     * Optional name of the token to be saved, if no name is provided one will be auto-generated
     */
    tokenFileName?: string;
    /**
     * The base 64 encoded token
     */
    encodedToken?: string;
};

