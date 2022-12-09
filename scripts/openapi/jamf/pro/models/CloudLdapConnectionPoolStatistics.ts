/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Ldap Cloud Identity Provider conection pool statistics
 */
export type CloudLdapConnectionPoolStatistics = {
    numConnectionsClosedDefunct?: number;
    numConnectionsClosedExpired?: number;
    numConnectionsClosedUnneeded?: number;
    numFailedCheckouts?: number;
    numFailedConnectionAttempts?: number;
    numReleasedValid?: number;
    numSuccessfulCheckouts?: number;
    numSuccessfulCheckoutsNewConnection?: number;
    numSuccessfulConnectionAttempts?: number;
    maximumAvailableConnections?: number;
    numSuccessfulCheckoutsWithoutWaiting?: number;
    numSuccessfulCheckoutsAfterWaiting?: number;
    numAvailableConnections?: number;
};

