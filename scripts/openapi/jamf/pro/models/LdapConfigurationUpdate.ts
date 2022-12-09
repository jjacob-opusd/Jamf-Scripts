/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CloudIdPCommon } from './CloudIdPCommon.ts';
import type { CloudLdapMappingsRequest } from './CloudLdapMappingsRequest.ts';
import type { CloudLdapServerUpdate } from './CloudLdapServerUpdate.ts';

/**
 * A Cloud Identity Provider LDAP configuration for updates
 */
export type LdapConfigurationUpdate = {
    cloudIdPCommon: CloudIdPCommon;
    server: CloudLdapServerUpdate;
    mappings?: CloudLdapMappingsRequest;
};

