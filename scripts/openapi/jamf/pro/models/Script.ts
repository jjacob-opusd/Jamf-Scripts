/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Script = {
    readonly id?: string;
    name: string;
    info?: string;
    notes?: string;
    priority?: 'BEFORE' | 'AFTER' | 'AT_REBOOT';
    categoryId?: string;
    categoryName?: string;
    parameter4?: string;
    parameter5?: string;
    parameter6?: string;
    parameter7?: string;
    parameter8?: string;
    parameter9?: string;
    parameter10?: string;
    parameter11?: string;
    osRequirements?: string;
    scriptContents?: string;
};

