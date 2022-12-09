/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComputerInventory } from '../models/ComputerInventory.ts';
import type { ComputerInventoryRecoveryLockPasswordResponse } from '../models/ComputerInventoryRecoveryLockPasswordResponse.ts';
import type { ComputerInventorySearchResults } from '../models/ComputerInventorySearchResults.ts';
import type { ComputerInventoryUpdateRequest } from '../models/ComputerInventoryUpdateRequest.ts';
import type { ComputerSection } from '../models/ComputerSection.ts';
import type { HrefResponse } from '../models/HrefResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerInventoryService {

    /**
     * Return paginated Computer Inventory records
     * Return paginated Computer Inventory records
     * @returns ComputerInventorySearchResults Successful response
     * @throws ApiError
     */
    public static getV1ComputersInventory({
        section,
        page,
        pageSize = 100,
        sort,
        filter = '',
    }: {
        /**
         * section of computer details, if not specified, General section data is returned. Multiple section parameters are supported, e.g. section=GENERAL&section=HARDWARE
         */
        section?: Array<ComputerSection>,
        page?: number,
        pageSize?: number,
        /**
         * Sorting criteria in the format: `property:asc/desc`. Default sort
         * is `general.name:asc`. Multiple sort criteria are supported and must be separated with
         * a comma.
         *
         * Fields allowed in the sort: `general.name`, `udid`, `id`, `general.assetTag`,
         * `general.jamfBinaryVersion`, `general.lastContactTime`, `general.lastEnrolledDate`, `general.lastCloudBackupDate`,
         * `general.reportDate`, `general.remoteManagement.managementUsername`,
         * `general.mdmCertificateExpiration`, `general.platform`,
         * `hardware.make`, `hardware.model`,
         * `operatingSystem.build`, `operatingSystem.name`, `operatingSystem.version`,
         * `userAndLocation.realname`,
         * `purchasing.lifeExpectancy`, `purchasing.warrantyDate`
         *
         * Example: `sort=udid:desc,general.name:asc`.
         *
         */
        sort?: Array<string>,
        /**
         * Query in the RSQL format, allowing to filter computer inventory collection.
         * Default filter is empty query - returning all results for the requested page.
         *
         * Fields allowed in the query: `general.name`, `udid`, `id`, `general.assetTag`, `general.barcode1`, `general.barcode2`,
         * `general.enrolledViaAutomatedDeviceEnrollment`, `general.lastIpAddress`, `general.itunesStoreAccountActive`,
         * `general.jamfBinaryVersion`, `general.lastContactTime`, `general.lastEnrolledDate`, `general.lastCloudBackupDate`,
         * `general.reportDate`, `general.lastReportedIp`, `general.remoteManagement.managed`, `general.remoteManagement.managementUsername`,
         * `general.mdmCapable.capable`, `general.mdmCertificateExpiration`, `general.platform`, `general.supervised`, `general.userApprovedMdm`, `general.declarativeDeviceManagementEnabled`,
         * `hardware.bleCapable`, `hardware.macAddress`, `hardware.make`, `hardware.model`, `hardware.modelIdentifier`, `hardware.serialNumber`,
         * `hardware.supportsIosAppInstalls`,`hardware.isAppleSilicon`, `operatingSystem.activeDirectoryStatus`, `operatingSystem.fileVault2Status`,
         * `operatingSystem.build`, `operatingSystem.name`, `operatingSystem.version`, `operatingSystem.softwareUpdateDeviceId`, `security.activationLockEnabled`,
         * `security.recoveryLockEnabled`,`security.firewallEnabled`,`userAndLocation.buildingId`, `userAndLocation.departmentId`, `userAndLocation.email`, `userAndLocation.realname`,
         * `userAndLocation.phone`, `userAndLocation.position`,`userAndLocation.room`, `userAndLocation.username`,
         * `purchasing.appleCareId`, `purchasing.lifeExpectancy`, `purchasing.purchased`, `purchasing.leased`, `purchasing.vendor`, `purchasing.warrantyDate`,
         *
         * This param can be combined with paging and sorting.
         * Example: `filter=general.name=="Orchard"`
         *
         */
        filter?: string,
    }): CancelablePromise<ComputerInventorySearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computers-inventory',
            query: {
                'section': section,
                'page': page,
                'page-size': pageSize,
                'sort': sort,
                'filter': filter,
            },
        });
    }

    /**
     * Return all sections of a computer
     * Return all sections of a computer
     * @returns ComputerInventory Details of computer were found
     * @throws ApiError
     */
    public static getV1ComputersInventoryDetail({
        id,
    }: {
        /**
         * instance id of computer record
         */
        id: string,
    }): CancelablePromise<ComputerInventory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computers-inventory-detail/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified computer object does not exist.`,
            },
        });
    }

    /**
     * Update specific fields on a computer
     * Update specific fields on a computer, then return the updated computer object.
     * @returns ComputerInventory Details of computer were found
     * @throws ApiError
     */
    public static patchV1ComputersInventoryDetail({
        id,
        requestBody,
    }: {
        /**
         * instance id of computer record
         */
        id: string,
        requestBody: ComputerInventoryUpdateRequest,
    }): CancelablePromise<ComputerInventory> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/computers-inventory-detail/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Specified computer object does not exist.`,
            },
        });
    }

    /**
     * Return General section of a Computer
     * Return General section of a Computer
     * @returns ComputerInventory Details of computer were found
     * @throws ApiError
     */
    public static getV1ComputersInventory1({
        id,
        section,
    }: {
        /**
         * instance id of computer record
         */
        id: string,
        /**
         * section of computer details, if not specified, General section data is returned. Multiple section parameters are supported, e.g. section=general&section=hardware
         */
        section?: Array<ComputerSection>,
    }): CancelablePromise<ComputerInventory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computers-inventory/{id}',
            path: {
                'id': id,
            },
            query: {
                'section': section,
            },
            errors: {
                404: `Specified computer object does not exist.`,
            },
        });
    }

    /**
     * Remove specified Computer record
     * Remove specified Computer record
     * @returns void
     * @throws ApiError
     */
    public static deleteV1ComputersInventory({
        id,
    }: {
        /**
         * instance id of computer record
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/computers-inventory/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified computer object id does not exist.`,
            },
        });
    }

    /**
     * Upload attachment and assign to computer
     * Upload attachment and assign to computer
     * @returns HrefResponse Successfully uploaded attachment
     * @throws ApiError
     */
    public static postV1ComputersInventoryAttachments({
        id,
        formData,
    }: {
        /**
         * instance id of computer record
         */
        id: string,
        formData: {
            /**
             * The file to upload
             */
            file: Blob;
        },
    }): CancelablePromise<HrefResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/computers-inventory/{id}/attachments',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Specified computer object does not exist.`,
            },
        });
    }

    /**
     * Download attachment file
     * Download attachment file
     * @returns binary Attachment successfully downloaded
     * @throws ApiError
     */
    public static getV1ComputersInventoryAttachments({
        id,
        attachmentId,
    }: {
        /**
         * instance id of computer record
         */
        id: string,
        /**
         * instance id of attachment object
         */
        attachmentId: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computers-inventory/{id}/attachments/{attachmentId}',
            path: {
                'id': id,
                'attachmentId': attachmentId,
            },
            errors: {
                404: `Specified computer object or attachment does not exist.`,
            },
        });
    }

    /**
     * Remove attachment
     * Remove attachment
     * @returns void
     * @throws ApiError
     */
    public static deleteV1ComputersInventoryAttachments({
        id,
        attachmentId,
    }: {
        /**
         * instance id of computer record
         */
        id: string,
        /**
         * instance id of attachment object
         */
        attachmentId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/computers-inventory/{id}/attachments/{attachmentId}',
            path: {
                'id': id,
                'attachmentId': attachmentId,
            },
            errors: {
                404: `Specified computer object or attachment does not exist.`,
            },
        });
    }

    /**
     * Return a Computers Recovery Lock Password
     * Return a Computers Recovery Lock Password
     * @returns ComputerInventoryRecoveryLockPasswordResponse Recovery Lock Password
     * @throws ApiError
     */
    public static getV1ComputersInventoryViewRecoveryLockPassword({
        id,
    }: {
        /**
         * instance id of computer record
         */
        id: string,
    }): CancelablePromise<ComputerInventoryRecoveryLockPasswordResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/computers-inventory/{id}/view-recovery-lock-password',
            path: {
                'id': id,
            },
            errors: {
                404: `Specified computer object does not exist.`,
            },
        });
    }

}
