/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtensionAttributeV2 = {
    readonly id?: string;
    name?: string;
    type?: 'STRING' | 'INTEGER' | 'DATE';
    value?: Array<string>;
    extensionAttributeCollectionAllowed?: boolean;
};

