/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class TomcatSettingsPreviewService {

    /**
     * Generate a SSL Certificate using Jamf Certificate Authority
     *
     * generate a SSL Certificate using Jamf Certificate Authority
     * @returns void
     * @throws ApiError
     */
    public static postSettingsIssueTomcatSslCertificate(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/issueTomcatSslCertificate',
        });
    }

}
