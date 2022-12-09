/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ManagedpreferenceprofilesService {

    /**
     * Finds all managed preference profiles
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findManagedPreferenceProfiles(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/managedpreferenceprofiles',
        });
    }

    /**
     * Deletes a managed preference profiles by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static deleteManagedPreferenceProfilesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/managedpreferenceprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Finds managed preference profiles by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findManagedPreferenceProfilesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/managedpreferenceprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Creates a new managed preference profile by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static createManagedPreferenceProfileById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/managedpreferenceprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing managed preference profiles by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateManagedPreferenceProfilesById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/managedpreferenceprofiles/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Display subsets of information for a managed preference profile
     * Displays information specified with the {subset} parameter for a profile specified with the {id} parameter. Name is also supported.  For example, /managedpreferenceprofiles/id/3/subset/General&Settings.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findManagedPreferenceProfilesByIdSubset({
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
            url: '/managedpreferenceprofiles/id/{id}/subset/{subset}',
            path: {
                'id': id,
                'subset': subset,
            },
        });
    }

    /**
     * Finds managed preference profiles by name
     * You can PUT, POST, and DELETE using this resource URL.
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findManagedPreferenceProfilesByName({
        name,
    }: {
        /**
         * Name to filter by
         */
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/managedpreferenceprofiles/name/{name}',
            path: {
                'name': name,
            },
        });
    }

}
