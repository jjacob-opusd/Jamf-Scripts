/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MacOsManagedSoftwareUpdate = {
    deviceIds?: Array<string>;
    groupId?: string;
    /**
     * Allow users to defer the update the provided number of times before macOS forces the update. If a value is provided, the Software Update will use the InstallLater install action.
     */
    maxDeferrals?: number;
    /**
     * If no value is provided, the version will default to latest version based on device eligibility.
     */
    version?: string;
    /**
     * If no value is provided, the skipVersionVerification will default to false. If a value is provided, the specified version will be forced to complete DownloadAndInstall install action.
     */
    skipVersionVerification?: boolean;
    /**
     * ApplyMajorUpdate setting is available only when updating to the latest version based on device eligibility. If no value is provided, the calculated latest version will only include minor version updates. If a value is provided, the calculated latest version will include minor and major version updates.
     */
    applyMajorUpdate?: boolean;
    /**
     * MaxDeferral is ignored if using the DownloadOnly install action.
     */
    updateAction?: 'DOWNLOAD_AND_INSTALL' | 'DOWNLOAD_ONLY';
    /**
     * If not set, forceRestart will default to false. Can only be true if using the DownloadAndInstall install action and the devices the command is sent to are on macOs 11 or higher. If true, the DownloadAndInstall action is performed, a restart will be forced. MaxDeferral will be ignored if defined.
     */
    forceRestart?: boolean;
    /**
     * Priority can only be configured on macOS 12.3 and above, for minor updates only. Any version below 12.3 is always Low and cannot be changed until prerequisites are met. When qualified, if not explicitly set, priority will default to High
     */
    priority?: 'HIGH' | 'LOW';
};

