/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupMappings } from './GroupMappings.ts';
import type { MembershipMappings } from './MembershipMappings.ts';
import type { UserMappings } from './UserMappings.ts';

/**
 * Mappings configuration response for Ldap Cloud Identity Provider configuration
 */
export type CloudLdapMappingsResponse = {
    userMappings?: UserMappings;
    groupMappings?: GroupMappings;
    membershipMappings?: MembershipMappings;
};

