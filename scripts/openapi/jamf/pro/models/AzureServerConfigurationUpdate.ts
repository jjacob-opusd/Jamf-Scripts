/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AzureMappings } from './AzureMappings.ts';

/**
 * Azure Cloud Identity Provider configuration update
 */
export type AzureServerConfigurationUpdate = {
    id: string;
    enabled: boolean;
    mappings: AzureMappings;
    searchTimeout: number;
    /**
     * Use this field to enable transitive membership lookup with Single Sign On
     */
    transitiveMembershipEnabled: boolean;
    /**
     * Use this field to set user field mapping for transitive membership lookup with Single Sign On
     */
    transitiveMembershipUserField: string;
    /**
     * Use this field to enable transitive membership lookup. This setting would not apply to Single Sign On
     */
    transitiveDirectoryMembershipEnabled: boolean;
};

