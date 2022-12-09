/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Reenrollment = {
    isFlushPolicyHistoryEnabled?: boolean;
    isFlushLocationInformationEnabled?: boolean;
    isFlushLocationInformationHistoryEnabled?: boolean;
    isFlushExtensionAttributesEnabled?: boolean;
    flushMDMQueue: 'DELETE_NOTHING' | 'DELETE_ERRORS' | 'DELETE_EVERYTHING_EXCEPT_ACKNOWLEDGED' | 'DELETE_EVERYTHING';
};

