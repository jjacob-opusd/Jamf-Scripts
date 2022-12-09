/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Jamf Pro Inventory statistics object. Aggregates managed/unmanaged devices and computers counters
 */
export type InventoryInformation = {
    /**
     * Number of managed computers in inventory.
     */
    readonly managedComputers?: number;
    /**
     * Number of unmanaged computers in inventory.
     */
    readonly unmanagedComputers?: number;
    /**
     * Number of managed devices in inventory.
     */
    readonly managedDevices?: number;
    /**
     * Number of unmanaged devices in inventory.
     */
    readonly unmanagedDevices?: number;
};

