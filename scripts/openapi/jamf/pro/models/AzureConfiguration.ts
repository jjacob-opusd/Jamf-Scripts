/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AzureServerConfiguration } from './AzureServerConfiguration.ts';
import type { CloudIdPCommon } from './CloudIdPCommon.ts';

/**
 * A Cloud Identity Provider Azure configuration for responses
 */
export type AzureConfiguration = {
    cloudIdPCommon: CloudIdPCommon;
    server: AzureServerConfiguration;
};

