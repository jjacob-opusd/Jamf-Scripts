/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * object representation of Self Service settings regarding installation
 *
 */
export type SelfServiceInstallSettings = {
    /**
     * true if Self Service is insalled automatically, false if not
     *
     */
    installAutomatically?: boolean;
    /**
     * path at which Self Service is installed
     *
     */
    installLocation: string;
};

