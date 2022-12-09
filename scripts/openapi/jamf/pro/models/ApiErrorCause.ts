/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApiErrorCause = {
    /**
     * Error-specific code that can be used to identify localization string, etc.
     */
    code?: string;
    /**
     * Name of the field that caused the error.
     */
    field: string;
    /**
     * A general description of error for troubleshooting/debugging. Generally this text should not be displayed to a user; instead refer to errorCode and it's localized text
     */
    description?: string;
    /**
     * id of object with error. Optional.
     */
    id?: string;
};

