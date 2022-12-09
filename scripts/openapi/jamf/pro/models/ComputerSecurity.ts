/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ComputerSecurity = {
    sipStatus?: 'NOT_COLLECTED' | 'NOT_AVAILABLE' | 'DISABLED' | 'ENABLED';
    gatekeeperStatus?: 'NOT_COLLECTED' | 'DISABLED' | 'APP_STORE_AND_IDENTIFIED_DEVELOPERS' | 'APP_STORE';
    xprotectVersion?: string;
    autoLoginDisabled?: boolean;
    /**
     * Collected for macOS 10.14.4 or later
     */
    remoteDesktopEnabled?: boolean;
    /**
     * Collected for macOS 10.15.0 or later
     */
    activationLockEnabled?: boolean;
    recoveryLockEnabled?: boolean;
    firewallEnabled?: boolean;
    /**
     * Collected for macOS 10.15.0 or later
     */
    secureBootLevel?: 'NO_SECURITY' | 'MEDIUM_SECURITY' | 'FULL_SECURITY' | 'NOT_SUPPORTED' | 'UNKNOWN';
    /**
     * Collected for macOS 10.15.0 or later
     */
    externalBootLevel?: 'ALLOW_BOOTING_FROM_EXTERNAL_MEDIA' | 'DISALLOW_BOOTING_FROM_EXTERNAL_MEDIA' | 'NOT_SUPPORTED' | 'UNKNOWN';
    /**
     * Collected for macOS 11 or later
     */
    bootstrapTokenAllowed?: boolean;
};

