/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VenafiCaRecord = {
    readonly id?: number;
    name: string;
    username?: string;
    password?: string;
    readonly passwordConfigured?: boolean;
    proxyAddress?: string;
    revocationEnabled?: boolean;
    clientId?: string;
    refreshToken?: string;
    readonly refreshTokenConfigured?: boolean;
};

