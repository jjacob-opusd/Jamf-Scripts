/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Request to crate new remote session. Ultimately this allows connection between an admin and an end-user
 */
export type SessionCandidateRequest = {
    /**
     * Device identifier
     */
    deviceId: string;
    /**
     * Device type
     */
    deviceType: 'COMPUTER';
    /**
     * Session description. To be used for additional context on the reason of the session
     */
    description: string;
};

