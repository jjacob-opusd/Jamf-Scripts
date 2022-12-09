/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ComputerapplicationsService {

    /**
     * Finds computer applications by name
     * Name may be specified using the same format as the general search in Jamf Pro. For example, /computerapplications/application/Safari*
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerApplicationsByName({
        application,
    }: {
        /**
         * Application name to filter by
         */
        application: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerapplications/application/{application}',
            path: {
                'application': application,
            },
        });
    }

    /**
     * Finds computer applications by name and generates additional inventory display
     * Inventory values may be displayed in addition to computer identification information. Use Default to view the same fields as those checked for Inventory Display, otherwise list display fields separated by commas.  For example, computerapplications/application/Safari.app/inventory/HostName,Platform,Bar%20Code or computerapplications/application/Safari.app/inventory/Default.  This interface will substitute %20 for blank spaces.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerApplicationsByNameInventory({
        application,
        inventory = 'Asset Tag,Platform',
    }: {
        /**
         * Application name to filter by
         */
        application: string,
        /**
         * Inventory options
         */
        inventory?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerapplications/application/{application}/inventory/{inventory}',
            path: {
                'application': application,
                'inventory': inventory,
            },
        });
    }

    /**
     * Finds computer applications by name and version
     * Version may be specified using the same format as the general search in Jamf Pro. For example, /computerapplications/application/Safari.app/version/9*
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerApplicationByNameAndVersion({
        application,
        version,
    }: {
        /**
         * Application name to filter by
         */
        application: string,
        /**
         * Version to filter by
         */
        version: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerapplications/application/{application}/version/{version}',
            path: {
                'application': application,
                'version': version,
            },
        });
    }

    /**
     * Finds computer applications by name and version, and generates additional inventory display
     * Inventory values may be displayed in addition to computer identification information. Use Default to view the same fields as those checked for Inventory Display, otherwise list display fields separated by commas.  For example, computerapplications/application/Safari.app/inventory/HostName,Platform,Bar%20Code or computerapplications/application/Safari.app/inventory/Default.  This interface will substitute %20 for blank spaces.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findComputerApplicationsByNameAndVersionAndInventory({
        application,
        version,
        inventory = 'Default',
    }: {
        /**
         * Application name to filter by
         */
        application: string,
        /**
         * Version to filter by
         */
        version: string,
        /**
         * Inventory options
         */
        inventory?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/computerapplications/application/{application}/version/{version}/inventory/{inventory}',
            path: {
                'application': application,
                'version': version,
                'inventory': inventory,
            },
        });
    }

}
