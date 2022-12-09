/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Initial Jamf Pro setup data
 */
export type InitializeV1 = {
    activationCode: string;
    institutionName: string;
    eulaAccepted: boolean;
    username: string;
    password: string;
    email?: string;
    jssUrl: string;
};

