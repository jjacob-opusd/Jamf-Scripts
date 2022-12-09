/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * object representation of Self Service settings regarding login
 *
 */
export type SelfServiceLoginSettings = {
    /**
     * login setting to tell clients how to let users log in
     *
     */
    userLoginLevel: 'NotRequired' | 'Anonymous' | 'Required';
    /**
     * true if remember me functionality is allowed, false if not
     *
     */
    allowRememberMe?: boolean;
    /**
     * login type to be used when asking users to log in
     *
     */
    authType: 'Basic' | 'Saml';
};

