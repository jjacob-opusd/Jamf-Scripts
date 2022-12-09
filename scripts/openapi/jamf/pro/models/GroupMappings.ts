/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Cloud Identity Provider user group mappings configuration
 */
export type GroupMappings = {
    objectClassLimitation: 'ANY_OBJECT_CLASSES' | 'ALL_OBJECT_CLASSES';
    objectClasses: string;
    searchBase: string;
    searchScope: 'ALL_SUBTREES' | 'FIRST_LEVEL_ONLY';
    groupID: string;
    groupName: string;
    groupUuid: string;
};

