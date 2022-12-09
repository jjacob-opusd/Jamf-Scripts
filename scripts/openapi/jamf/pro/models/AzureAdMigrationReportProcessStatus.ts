/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Request that start report generation
 */
export type AzureAdMigrationReportProcessStatus = {
    reportId: number;
    migrationReportStatus: 'PENDING' | 'ABORTED' | 'FAILED' | 'FINISHED';
    migrationReportStartedEpoch: number;
    migrationReportFinishedEpoch: number;
};

