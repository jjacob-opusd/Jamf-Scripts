/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SsoKeystoreDetails } from './SsoKeystoreDetails.ts';
import type { SsoKeystoreResponse } from './SsoKeystoreResponse.ts';

export type SsoKeystoreResponseWithDetails = {
    keystore?: SsoKeystoreResponse;
    keystoreDetails?: SsoKeystoreDetails;
};

