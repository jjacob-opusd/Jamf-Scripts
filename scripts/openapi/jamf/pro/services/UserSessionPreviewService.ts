/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account.ts';
import type { Session } from '../models/Session.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class UserSessionPreviewService {

    /**
     * Return all Jamf Pro user acounts
     *
     * Return all Jamf Pro user acounts.
     *
     * @returns Account List of all Jamf Pro user acounts.
     * @throws ApiError
     */
    public static getUser(): CancelablePromise<Array<Account>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
        });
    }

    /**
     * Update values in the User's current session
     *
     * Updates values in the user's current session.
     *
     * @returns Session The user's current session has been sucessfully updated.
     * @throws ApiError
     */
    public static postUserUpdateSession({
        requestBody,
    }: {
        /**
         * Values to update in user's current session.
         */
        requestBody?: Session,
    }): CancelablePromise<Session> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/updateSession',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
