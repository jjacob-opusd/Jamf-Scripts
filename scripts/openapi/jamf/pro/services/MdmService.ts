/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HrefResponse } from '../models/HrefResponse.ts';
import type { InstallPackage } from '../models/InstallPackage.ts';
import type { MdmCommand } from '../models/MdmCommand.ts';
import type { MdmCommandRequest } from '../models/MdmCommandRequest.ts';
import type { MdmCommandResults } from '../models/MdmCommandResults.ts';
import type { RenewMdmProfileResponse } from '../models/RenewMdmProfileResponse.ts';
import type { Udids } from '../models/Udids.ts';
import type { VerbosePackageDeploymentResponse } from '../models/VerbosePackageDeploymentResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MdmService {

    /**
     * Post a command for creation and queuing
     *
     * Provided an MDM command type and appropriate information, will create and then queue said command.
     * @returns HrefResponse Success
     * @throws ApiError
     */
    public static postPreviewMdmCommands({
        requestBody,
    }: {
        /**
         * The mdm command object to create and queue
         */
        requestBody?: MdmCommandRequest,
    }): CancelablePromise<Array<HrefResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/preview/mdm/commands',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failure, unable to queue command.`,
            },
        });
    }

    /**
     * Deploy packages using MDM
     * Deploys packages to macOS devices using the InstallEnterpriseApplication MDM command.
     * @returns VerbosePackageDeploymentResponse Package deployment was successfully processed. See response body for further information.
     * @returns any Package deployment was queued up
     * @throws ApiError
     */
    public static postV1DeployPackage({
        requestBody,
        verbose = false,
    }: {
        requestBody: InstallPackage,
        /**
         * Enables the 'verbose' response, which includes information about the commands queued as well as information about commands that failed to queue.
         */
        verbose?: boolean,
    }): CancelablePromise<VerbosePackageDeploymentResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/deploy-package',
            query: {
                'verbose': verbose,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Insufficient privileges to perform this action or Package Deployment is not enabled.`,
            },
        });
    }

    /**
     * Get information about mdm commands made by Jamf Pro.
     *
     * Get information about mdm commands made by Jamf Pro.
     * @returns MdmCommand Success
     * @throws ApiError
     */
    public static getV1MdmCommands({
        uuids,
        clientManagementId,
    }: {
        /**
         * A list of the UUIDs of the commands being searched for.  Limited to 40 UUIDs in length. Choose one of two parameters, but not both.
         */
        uuids?: Array<string>,
        /**
         * The client management id used to search for a list of commands. Choose one of two parameters, but not both.
         */
        clientManagementId?: string,
    }): CancelablePromise<Array<MdmCommand>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/mdm/commands',
            query: {
                'uuids': uuids,
                'client-management-id': clientManagementId,
            },
            errors: {
                414: `Too many UUIDs were provided in the path. The limit is set at a strict 40 UUIDs.`,
                500: `Failure, unable to complete lookup.`,
            },
        });
    }

    /**
     * Renew MDM Profile
     *
     * Renews the device's MDM Profile, including the device identity certificate within the MDM Profile.
     *
     * @returns RenewMdmProfileResponse The Renew MDM Profile action was queued with APNs for submitted devices. Any device udids returned were unknown and not submitted.
     *
     * @throws ApiError
     */
    public static postV1MdmRenewProfile({
        requestBody,
    }: {
        /**
         * List of devices' UDIDs to perform MDM profile renewal
         */
        requestBody: Udids,
    }): CancelablePromise<RenewMdmProfileResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/mdm/renew-profile',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Insufficient privileges to perform this action or Renew MDM Profile is not enabled.`,
            },
        });
    }

    /**
     * Get information about mdm commands made by Jamf Pro.
     *
     * Get information about mdm commands made by Jamf Pro.
     * @returns MdmCommandResults Success
     * @throws ApiError
     */
    public static getV2MdmCommands({
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        page?: number,
        pageSize?: number,
        /**
         * Default sort is dateSent:asc. Multiple sort criteria are supported and must be separated with a comma.
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter, for a list of commands. All url must contain minimum one filter field. Fields allowed in the query: uuid, clientManagementId, command, status, clientType, dateSent, validAfter, dateCompleted, profileIdentifier, and active. This param can be combined with paging. Please note that any date filters must be used with gt, lt, ge, le Example: clientManagementId==fb511aae-c557-474f-a9c1-5dc845b90d0f;status==Pending;command==INSTALL_PROFILE;uuid==9e18f849-e689-4f2d-b616-a99d3da7db42;clientType==COMPUTER_USER;profileIdentifier==18cc61c2-01fc-11ed-b939-0242ac120002;dateCompleted=ge=2021-08-04T14:25:18.26Z;dateCompleted=le=2021-08-04T14:25:18.26Z;validAfter=ge=2021-08-05T14:25:18.26Z;active==true
         */
        filter?: string,
    }): CancelablePromise<MdmCommandResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/mdm/commands',
            query: {
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
            errors: {
                500: `Failure, unable to complete lookup.`,
            },
        });
    }

}
