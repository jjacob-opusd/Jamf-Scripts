/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class HealthcarelistenerruleService {

    /**
     * Find all Healthcare Listener rules
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findHealthcareListenerRule(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/healthcarelistenerrule',
        });
    }

    /**
     * Finds Healthcare Listener rules by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findHealthcareListenerRulesById({
        id,
        deviceInventoryField,
        operatingSystem,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
        /**
         * -1 represents the location field 'Room'; any other number is a mobile device extension attribute ID.
         */
        deviceInventoryField: number,
        /**
         * Accepted values are 'iPhone' or 'TV', indicating iOS and tvOS, respectively.
         */
        operatingSystem: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/healthcarelistenerrule/id/{id}',
            path: {
                'id': id,
                'device_inventory_field': deviceInventoryField,
                'operating_system': operatingSystem,
            },
        });
    }

    /**
     * Creates a new Healthcare Listener rule
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createHealthCareListenerRuleById({
        id,
        deviceInventoryField,
        operatingSystem,
        mdmCommand,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
        /**
         * -1 represents the location field 'Room'; any other number is a mobile device extension attribute ID.
         */
        deviceInventoryField: number,
        /**
         * Accepted values are 'iPhone' or 'TV', indicating iOS and tvOS, respectively.
         */
        operatingSystem: string,
        /**
         * MDM command to for rule to trigger. Valid values are 'EraseDevice', 'DeviceLock', 'ClearPasscode', 'EnableLostMode', and 'DisableLostMode'
         */
        mdmCommand: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/healthcarelistenerrule/id/{id}',
            path: {
                'id': id,
                'device_inventory_field': deviceInventoryField,
                'operating_system': operatingSystem,
                'mdm_command': mdmCommand,
            },
        });
    }

    /**
     * Updates an existing Healthcare Listener rule by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateHealthCareListenerRuleById({
        id,
        deviceInventoryField,
        operatingSystem,
        mdmCommand,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
        /**
         * -1 represents the location field 'Room'; any other number is a mobile device extension attribute ID.
         */
        deviceInventoryField: number,
        /**
         * Accepted values are 'iPhone' or 'TV', indicating iOS and tvOS, respectively.
         */
        operatingSystem: string,
        /**
         * MDM command to for rule to trigger. Valid values are 'EraseDevice', 'DeviceLock', 'ClearPasscode', 'EnableLostMode', and 'DisableLostMode'
         */
        mdmCommand: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/healthcarelistenerrule/id/{id}',
            path: {
                'id': id,
                'device_inventory_field': deviceInventoryField,
                'operating_system': operatingSystem,
                'mdm_command': mdmCommand,
            },
        });
    }

}
