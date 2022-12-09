/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VppTokenSubscription } from '../models/VppTokenSubscription.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class VppSubscriptionsPreviewService {

    /**
     * @deprecated
     * Found all VPP - subscriptions
     *
     * Found all vpp - subscriptions.
     *
     * @returns VppTokenSubscription Successful response
     * @throws ApiError
     */
    public static getVppSubscriptions(): CancelablePromise<Array<VppTokenSubscription>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vpp/subscriptions',
        });
    }

    /**
     * @deprecated
     * Found VPP subscription by id
     *
     * Found vpp subscription by id.
     *
     * @returns VppTokenSubscription Successful response
     * @throws ApiError
     */
    public static getVppSubscriptions1({
        id,
    }: {
        /**
         * id of vpp subscription to be retrieved
         */
        id: number,
    }): CancelablePromise<VppTokenSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vpp/subscriptions/{id}',
            path: {
                'id': id,
            },
        });
    }

}
