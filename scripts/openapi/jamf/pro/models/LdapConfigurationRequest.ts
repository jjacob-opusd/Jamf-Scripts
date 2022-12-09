/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CloudIdPCommonRequest } from './CloudIdPCommonRequest.ts';
import type { CloudLdapMappingsRequest } from './CloudLdapMappingsRequest.ts';
import type { CloudLdapServerRequest } from './CloudLdapServerRequest.ts';

/**
 * A Cloud Identity Provider LDAP configuration for requests
 */
export type LdapConfigurationRequest = {
    cloudIdPCommon: CloudIdPCommonRequest;
    server: CloudLdapServerRequest;
    mappings?: CloudLdapMappingsRequest;
};

