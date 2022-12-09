/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerinvitationsService {

    /**
     * Finds all computer invitations
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerInvitations(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerinvitations',
        });
    }

    /**
     * Deletes a computer invitation by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteComputerInvitationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/computerinvitations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds computer invitations by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerInvitationsById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerinvitations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new computer invitation by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createComputerInvitationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/computerinvitations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds computer invitations by invitation
     * You can POST and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerInvitationsByInvitation({
        invitation,
    }: {
        /**
         * Invitation to filter by
         */
        invitation: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerinvitations/invitation/{invitation}',
            path: {
                'invitation': invitation,
            },
        });
    }

    /**
     * Finds computer invitations by name
     * You can POST and DELETE using this resource URL. Name is assumed to be the invitation identifier.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerInvitationsByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerinvitations/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
