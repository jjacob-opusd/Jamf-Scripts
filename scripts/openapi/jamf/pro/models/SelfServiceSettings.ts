/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SelfServiceInstallSettings } from './SelfServiceInstallSettings.ts';
import type { SelfServiceInteractionSettings } from './SelfServiceInteractionSettings.ts';
import type { SelfServiceLoginSettings } from './SelfServiceLoginSettings.ts';

/**
 * object representation of Self Service settings
 *
 */
export type SelfServiceSettings = {
    installSettings?: SelfServiceInstallSettings;
    loginSettings?: SelfServiceLoginSettings;
    configurationSettings?: SelfServiceInteractionSettings;
};

