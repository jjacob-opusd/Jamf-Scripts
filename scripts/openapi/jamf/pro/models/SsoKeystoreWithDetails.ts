/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SsoKeystore } from './SsoKeystore.ts';
import type { SsoKeystoreDetails } from './SsoKeystoreDetails.ts';

export type SsoKeystoreWithDetails = {
    keystore?: SsoKeystore;
    keystoreDetails?: SsoKeystoreDetails;
};

