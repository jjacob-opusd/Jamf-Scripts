/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Filter = {
    field?: string;
    operator?: 'EQUALS' | 'NOT_EQUALS' | 'GREATER_THAN' | 'LESS_THAN' | 'GREATER_THAN_EQUAL' | 'LESS_THAN_EQUAL';
    value?: string;
};

