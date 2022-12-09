/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Ebook = {
    id?: string;
    name?: string;
    kind?: 'UNKNOWN' | 'PDF' | 'EPUB' | 'IBOOKS';
    url?: string;
    free?: boolean;
    version?: string;
    author?: string;
    /**
     * If true, it will be automatically installed
     */
    deployAsManaged?: boolean;
    installAutomatically?: boolean;
    categoryId?: string;
    siteId?: string;
};

