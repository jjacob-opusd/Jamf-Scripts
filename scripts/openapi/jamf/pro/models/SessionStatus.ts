/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Session status
 */
export type SessionStatus = {
    /**
     * Session state
     */
    sessionState?: 'OPEN' | 'CLOSED' | 'UNKNOWN';
    /**
     * Defines if the end user is online
     */
    online?: boolean;
};

