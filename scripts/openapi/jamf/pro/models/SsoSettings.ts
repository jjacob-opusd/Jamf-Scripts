/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SsoSettings = {
    ssoForEnrollmentEnabled: boolean;
    ssoBypassAllowed: boolean;
    ssoEnabled: boolean;
    ssoForMacOsSelfServiceEnabled: boolean;
    tokenExpirationDisabled: boolean;
    userAttributeEnabled: boolean;
    userAttributeName?: string;
    userMapping: 'USERNAME' | 'EMAIL';
    groupEnrollmentAccessEnabled: boolean;
    groupAttributeName: string;
    groupRdnKey: string;
    groupEnrollmentAccessName?: string;
    idpProviderType: 'ADFS' | 'OKTA' | 'GOOGLE' | 'SHIBBOLETH' | 'ONELOGIN' | 'PING' | 'CENTRIFY' | 'AZURE' | 'OTHER';
    idpUrl?: string;
    entityId: string;
    metadataFileName?: string;
    otherProviderTypeName?: string;
    federationMetadataFile?: string;
    metadataSource: 'URL' | 'FILE' | 'UNKNOWN';
    sessionTimeout?: number;
};

