/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Field to be included in the export operation.
 */
export type ExportField = {
    /**
     * English name of the field to be exported.
     */
    fieldName?: string;
    /**
     * Name which should be used for the label in the response - can be in any language. When null the fieldName itself will be used as the label.
     */
    fieldLabelOverride?: string | null;
};

