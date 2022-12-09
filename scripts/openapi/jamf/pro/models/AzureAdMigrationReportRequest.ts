/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AzureMappings } from './AzureMappings.ts';
import type { ExtensionAttributeMigrationMappingChange } from './ExtensionAttributeMigrationMappingChange.ts';

/**
 * Request that start report generation
 */
export type AzureAdMigrationReportRequest = {
    ldapServerId: number;
    azureServerId: number;
    azureMappings: AzureMappings;
    extensionAttributeMappingChanges?: Array<ExtensionAttributeMigrationMappingChange>;
};

