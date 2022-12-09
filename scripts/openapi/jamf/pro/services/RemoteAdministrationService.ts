/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RemoteAdministrationSearchResults } from '../models/RemoteAdministrationSearchResults.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class RemoteAdministrationService {

    /**
     * Get information about all remote administration configurations.
     * Remote administration feature creates a secure screen-sharing experience between Jamf Pro administrators and their end-users.
     * @returns RemoteAdministrationSearchResults Remote administration configurations returned.
     * @throws ApiError
     */
    public static getPreviewRemoteAdministrationConfigurations({
        page,
        pageSize = 100,
    }: {
        page?: number,
        pageSize?: number,
    }): CancelablePromise<RemoteAdministrationSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/preview/remote-administration-configurations',
            query: {
                'page': page,
                'page-size': pageSize,
            },
            errors: {
                404: `Remote Administration feature is not available.`,
            },
        });
    }

}
