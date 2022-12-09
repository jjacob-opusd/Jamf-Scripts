/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VppAdminAccount } from '../models/VppAdminAccount.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class VppAdminAccountsPreviewService {

    /**
     * @deprecated
     * Found all VPP Admin Accounts
     *
     * Found all vpp admin accounts.
     *
     * @returns VppAdminAccount Successful response
     * @throws ApiError
     */
    public static getVppAdminAccounts(): CancelablePromise<Array<VppAdminAccount>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vpp/admin-accounts',
        });
    }

}
