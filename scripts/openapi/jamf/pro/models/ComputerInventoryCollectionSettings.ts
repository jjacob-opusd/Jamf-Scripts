/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppPath } from './AppPath.ts';
import type { ComputerInventoryCollectionPreferences } from './ComputerInventoryCollectionPreferences.ts';
import type { FontPath } from './FontPath.ts';
import type { PluginPath } from './PluginPath.ts';

export type ComputerInventoryCollectionSettings = {
    computerInventoryCollectionPreferences?: ComputerInventoryCollectionPreferences;
    applicationPaths?: Array<AppPath>;
    fontPaths?: Array<FontPath>;
    pluginPaths?: Array<PluginPath>;
};

