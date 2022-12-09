/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExportField } from './ExportField.ts';

export type ExportParameters = {
    page?: number | null;
    pageSize?: number | null;
    /**
     * Sorting criteria in the format: [<property>[:asc/desc]. Default direction when not stated is ascending.
     */
    sort?: Array<string> | null;
    filter?: string | null;
    /**
     * Used to change default order or ignore some of the fields. When null or empty array, all fields will be exported.
     */
    fields?: Array<ExportField> | null;
};

