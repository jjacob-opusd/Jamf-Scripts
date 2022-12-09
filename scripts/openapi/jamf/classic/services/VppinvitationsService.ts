/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class VppinvitationsService {

    /**
     * Finds all VPP Invitations
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findVppAdminInvitation(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vppinvitations',
        });
    }

    /**
     * Deletes a vpp invitation by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteInvitationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vppinvitations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds VPP Invitation by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findInvitationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vppinvitations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new vpp invitation by id
     * Name, account, distribution_method required.  Email fields required if 'Send Emails' distribution method specified.  Usages are ignored in POST.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createInvitationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vppinvitations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates a vpp invitation by id
     * Name, account, distribution_method required.  Email fields required if 'Send Emails' distribution method specified.  Usages are ignored in a PUT.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateInvitationById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/vppinvitations/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a VPP invitation
     * Displays information specified with the {subset} parameter for a VPP invitation specified with the {id} parameter. For example, /vppinvitations/id/3/subset/General&Scope&Usages or /vppinvitations/id/3/subset/Usages.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findInvitationsByIdSubset({
        id,
        subset = 'General',
    }: {
        /**
         * Id to filter by
         */
        id: string,
        /**
         * Subset to filter by
         */
        subset?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vppinvitations/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

}
