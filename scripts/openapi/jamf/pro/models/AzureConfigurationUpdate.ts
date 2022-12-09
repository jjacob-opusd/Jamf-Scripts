/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AzureServerConfigurationUpdate } from './AzureServerConfigurationUpdate.ts';
import type { CloudIdPCommon } from './CloudIdPCommon.ts';

/**
 * A Cloud Identity Provider Azure configuration for update
 */
export type AzureConfigurationUpdate = {
    cloudIdPCommon: CloudIdPCommon;
    server: AzureServerConfigurationUpdate;
};

