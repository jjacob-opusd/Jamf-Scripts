/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class HealthcarelistenerService {

    /**
     * Find all Healthcare Listener
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findHealthcareListener(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/healthcarelistener',
        });
    }

    /**
     * Finds healthcare listener by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static findHealthcareListenersById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/healthcarelistener/id/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updates an existing healthcare listener by id
     * @returns any No response was specified
     * @throws ApiError
     */
    public static updateHealthCareListenerById({
        id,
    }: {
        /**
         * Id value to filter by
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/healthcarelistener/id/{id}',
            path: {
                'id': id,
            },
        });
    }

}
