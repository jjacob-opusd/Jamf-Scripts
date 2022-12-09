/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppAnalyticsSetting } from './AppAnalyticsSetting.ts';
import type { ApplicationAttributes } from './ApplicationAttributes.ts';
import type { ApplicationConfiguration } from './ApplicationConfiguration.ts';
import type { DataRoamingSetting } from './DataRoamingSetting.ts';
import type { DiagnosticSubmissionSetting } from './DiagnosticSubmissionSetting.ts';
import type { PersonalHotspotSetting } from './PersonalHotspotSetting.ts';
import type { SharedDeviceConfiguration } from './SharedDeviceConfiguration.ts';
import type { SoftwareUpdateSettings } from './SoftwareUpdateSettings.ts';
import type { VoiceRoamingSetting } from './VoiceRoamingSetting.ts';

export type SettingsCommand = {
    bootstrapTokenAllowed?: boolean;
    bluetooth?: boolean;
    appAnalytics?: AppAnalyticsSetting;
    diagnosticSubmission?: DiagnosticSubmissionSetting;
    dataRoaming?: DataRoamingSetting;
    voiceRoaming?: VoiceRoamingSetting;
    personalHotspot?: PersonalHotspotSetting;
    maximumResidentUsers?: number;
    deviceName?: string;
    applicationAttributes?: ApplicationAttributes;
    sharedDeviceConfiguration?: SharedDeviceConfiguration;
    applicationConfiguration?: ApplicationConfiguration;
    timeZone?: string;
    softwareUpdateSettings?: SoftwareUpdateSettings;
    /**
     * The number of seconds before a locked screen requires the user to enter the device passcode to unlock it. (Shared iPad Only)
     */
    passcodeLockGracePeriod?: number;
};

