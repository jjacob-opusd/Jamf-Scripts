/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MobiledeviceinvitationsService {

    /**
     * Finds all mobile device invitations
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceInvitations(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceinvitations',
        });
    }

    /**
     * Deletes a mobile device invitation by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteMobileDeviceInvitationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mobiledeviceinvitations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device invitations by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceInvitationsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceinvitations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new mobile device invitation by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createMobileDeviceInvitationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mobiledeviceinvitations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds mobile device invitations by invitation
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findMobileDeviceInvitationsByInvitation({
        invitation,
    }: {
        /**
         * Invitation to filter by
         */
        invitation: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mobiledeviceinvitations/invitation/{invitation}',
            path: {
                'invitation': invitation,
            },
        });
    }

}
