/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ComputerLocalUserAccount = {
    uid?: string;
    username?: string;
    fullName?: string;
    admin?: boolean;
    homeDirectory?: string;
    /**
     * Home directory size in MB.
     */
    readonly homeDirectorySizeMb?: number;
    fileVault2Enabled?: boolean;
    userAccountType?: 'LOCAL' | 'MOBILE' | 'UNKNOWN';
    passwordMinLength?: number;
    passwordMaxAge?: number;
    passwordMinComplexCharacters?: number;
    passwordHistoryDepth?: number;
    passwordRequireAlphanumeric?: boolean;
    computerAzureActiveDirectoryId?: string;
    userAzureActiveDirectoryId?: string;
    azureActiveDirectoryId?: 'ACTIVATED' | 'DEACTIVATED' | 'UNRESPONSIVE' | 'UNKNOWN';
};

