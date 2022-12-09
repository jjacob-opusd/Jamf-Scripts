/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Cloud Identity Provider user mappings configuration
 */
export type UserMappings = {
    objectClassLimitation: 'ANY_OBJECT_CLASSES' | 'ALL_OBJECT_CLASSES';
    objectClasses: string;
    searchBase: string;
    searchScope: 'ALL_SUBTREES' | 'FIRST_LEVEL_ONLY';
    additionalSearchBase?: string;
    userID: string;
    username: string;
    realName: string;
    emailAddress: string;
    department: string;
    building: string;
    room: string;
    phone: string;
    position: string;
    userUuid: string;
};

