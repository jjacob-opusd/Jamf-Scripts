/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * object representation of Self Service settings regarding user interaction
 *
 */
export type SelfServiceInteractionSettings = {
    /**
     * global Self Service setting for if notifications are on or off
     *
     */
    notificationsEnabled?: boolean;
    /**
     * whether users should be notified they need to approve organization's MDM profile
     *
     */
    alertUserApprovedMdm?: boolean;
    /**
     * the default landing page in Self Service
     *
     */
    defaultLandingPage?: 'HOME' | 'BROWSE' | 'HISTORY' | 'NOTIFICATIONS';
    /**
     * id for the default home category in Self Service
     *
     */
    defaultHomeCategoryId?: number;
    /**
     * renamed string for bookmarks if the admin wishes
     *
     */
    bookmarksName: string;
};

