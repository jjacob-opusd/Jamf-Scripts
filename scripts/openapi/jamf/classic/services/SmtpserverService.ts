/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SmtpserverService {

    /**
     * Finds the Jamf Pro smtp server information
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findSmtpServer(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/smtpserver',
        });
    }

    /**
     * Updates the Jamf Pro smtp server information
     * Password can be changed via the <password> element. Password should be clear text and sent over SSL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateSmtpServer(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/smtpserver',
        });
    }

}
