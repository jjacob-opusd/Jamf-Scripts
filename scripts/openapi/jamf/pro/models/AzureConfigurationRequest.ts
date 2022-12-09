/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AzureServerConfigurationRequest } from './AzureServerConfigurationRequest.ts';
import type { CloudIdPCommonRequest } from './CloudIdPCommonRequest.ts';

/**
 * A Cloud Identity Provider Azure configuration for responses
 */
export type AzureConfigurationRequest = {
    cloudIdPCommon: CloudIdPCommonRequest;
    server: AzureServerConfigurationRequest;
};

