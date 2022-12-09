/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CloudIdPCommon } from './CloudIdPCommon.ts';
import type { CloudLdapMappingsResponse } from './CloudLdapMappingsResponse.ts';
import type { CloudLdapServerResponse } from './CloudLdapServerResponse.ts';

/**
 * A Cloud Identity Provider LDAP configuration for responses
 */
export type LdapConfigurationResponse = {
    cloudIdPCommon: CloudIdPCommon;
    server: CloudLdapServerResponse;
    mappings?: CloudLdapMappingsResponse;
};

