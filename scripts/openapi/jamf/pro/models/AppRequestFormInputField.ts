/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppRequestFormInputField = {
    readonly id?: number;
    title: string;
    description?: string | null;
    /**
     * Highest priority is 1, lowest is 255
     */
    priority: number;
};

