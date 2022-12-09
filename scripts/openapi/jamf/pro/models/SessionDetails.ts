/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Session details
 */
export type SessionDetails = {
    /**
     * Session identifier
     */
    id?: string;
    /**
     * Sessions code
     */
    code?: string;
    /**
     * Session description. To be used for additional context on the reason of the session
     */
    description?: string;
    /**
     * Supporter session URL
     */
    supporterLink?: string;
    /**
     * End user session URL
     */
    endUserLink?: string;
    /**
     * Device identifier
     */
    deviceId?: string;
    /**
     * Device name if found - null otherwise
     */
    deviceName?: string;
    /**
     * Device type
     */
    deviceType?: 'COMPUTER';
    /**
     * Session state
     */
    state?: 'OPEN' | 'CLOSED' | 'UNKNOWN';
    /**
     * ID of session creator if session created by Jamf Pro local user, null otherwise
     */
    creatorId?: string;
    /**
     * Username of the session creator
     */
    creatorName?: string;
    /**
     * Session creation time
     */
    createdAt?: string;
};

