/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupMappings } from './GroupMappings.ts';
import type { MembershipMappings } from './MembershipMappings.ts';
import type { UserMappings } from './UserMappings.ts';

/**
 * Mappings configurations request for Ldap Cloud Identity Provider configuration
 */
export type CloudLdapMappingsRequest = {
    userMappings: UserMappings;
    groupMappings: GroupMappings;
    membershipMappings: MembershipMappings;
};

