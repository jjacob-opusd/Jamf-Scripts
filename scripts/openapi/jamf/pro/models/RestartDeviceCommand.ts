/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RestartDeviceCommand = {
    rebuildKernelCache?: boolean;
    /**
     * Only used if RebuildKernelCache is true
     */
    kextPaths?: Array<string>;
    notifyUser?: boolean;
};

