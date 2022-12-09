/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnrollmentCustomizationPanelLdapAuth } from '../models/EnrollmentCustomizationPanelLdapAuth.ts';
import type { EnrollmentCustomizationPanelList } from '../models/EnrollmentCustomizationPanelList.ts';
import type { EnrollmentCustomizationPanelSsoAuth } from '../models/EnrollmentCustomizationPanelSsoAuth.ts';
import type { EnrollmentCustomizationPanelText } from '../models/EnrollmentCustomizationPanelText.ts';
import type { GetEnrollmentCustomizationPanel } from '../models/GetEnrollmentCustomizationPanel.ts';
import type { GetEnrollmentCustomizationPanelLdapAuth } from '../models/GetEnrollmentCustomizationPanelLdapAuth.ts';
import type { GetEnrollmentCustomizationPanelSsoAuth } from '../models/GetEnrollmentCustomizationPanelSsoAuth.ts';
import type { GetEnrollmentCustomizationPanelText } from '../models/GetEnrollmentCustomizationPanelText.ts';
import type { Markdown } from '../models/Markdown.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class EnrollmentCustomizationPreviewService {

    /**
     * Parse the given string as markdown text and return Html output
     *
     * Parse the given string as markdown text and return Html output
     * @returns Markdown Success
     * @throws ApiError
     */
    public static postV1EnrollmentCustomizationParseMarkdown({
        requestBody,
    }: {
        /**
         * Enrollment Customization Panel to create
         */
        requestBody: Markdown,
    }): CancelablePromise<Markdown> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/enrollment-customization/parse-markdown',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all Panels for single Enrollment Customization
     *
     * Get all panels for single enrollment customization
     * @returns EnrollmentCustomizationPanelList Success
     * @throws ApiError
     */
    public static getV1EnrollmentCustomizationAll({
        id,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
    }): CancelablePromise<EnrollmentCustomizationPanelList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/enrollment-customization/{id}/all',
            path: {
                'id': id,
            },
            errors: {
                404: `Enrollment Customization with that id does not exist`,
            },
        });
    }

    /**
     * Get a single Panel for a single Enrollment Customization
     *
     * Get a single panel for a single enrollment customization
     * @returns GetEnrollmentCustomizationPanel Success
     * @throws ApiError
     */
    public static getV1EnrollmentCustomizationAll1({
        id,
        panelId,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
    }): CancelablePromise<GetEnrollmentCustomizationPanel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/enrollment-customization/{id}/all/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
            errors: {
                404: `Enrollment Customization with that id does not exist`,
            },
        });
    }

    /**
     * Delete a single Panel from an Enrollment Customization
     *
     * Delete a single panel from an Enrollment Customization
     * @returns void
     * @throws ApiError
     */
    public static deleteV1EnrollmentCustomizationAll({
        id,
        panelId,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/enrollment-customization/{id}/all/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
        });
    }

    /**
     * Create an LDAP Panel for a single Enrollment Customization
     *
     * Create an LDAP panel for a single enrollment customization. If multiple LDAP access groups are defined with the same name and id, only one will be saved.
     * @returns GetEnrollmentCustomizationPanelLdapAuth LDAP panel was created
     * @throws ApiError
     */
    public static postV1EnrollmentCustomizationLdap({
        id,
        requestBody,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Enrollment Customization Panel to create
         */
        requestBody: EnrollmentCustomizationPanelLdapAuth,
    }): CancelablePromise<GetEnrollmentCustomizationPanelLdapAuth> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/enrollment-customization/{id}/ldap',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Get a single LDAP panel for a single Enrollment Customization
     *
     * Get a single LDAP panel for a single enrollment customization
     * @returns GetEnrollmentCustomizationPanelLdapAuth Success
     * @throws ApiError
     */
    public static getV1EnrollmentCustomizationLdap({
        id,
        panelId,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
    }): CancelablePromise<GetEnrollmentCustomizationPanelLdapAuth> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/enrollment-customization/{id}/ldap/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
            errors: {
                404: `Enrollment Customization or Panel does not exist`,
            },
        });
    }

    /**
     * Update a single LDAP Panel for a single Enrollment Customization
     *
     * Update a single LDAP panel for a single enrollment customization. If multiple LDAP access groups are defined with the same name and id, only one will be saved.
     * @returns GetEnrollmentCustomizationPanelLdapAuth Success
     * @throws ApiError
     */
    public static putV1EnrollmentCustomizationLdap({
        id,
        panelId,
        requestBody,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
        /**
         * Enrollment Customization Panel to update
         */
        requestBody: EnrollmentCustomizationPanelLdapAuth,
    }): CancelablePromise<GetEnrollmentCustomizationPanelLdapAuth> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/enrollment-customization/{id}/ldap/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Enrollment Customization or Panel does not exist`,
            },
        });
    }

    /**
     * Delete an LDAP single panel from an Enrollment Customization
     *
     * Delete an LDAP single Panel from an Enrollment Customization
     * @returns void
     * @throws ApiError
     */
    public static deleteV1EnrollmentCustomizationLdap({
        id,
        panelId,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/enrollment-customization/{id}/ldap/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
        });
    }

    /**
     * Create an SSO Panel for a single Enrollment Customization
     *
     * Create an SSO panel for a single enrollment customization
     * @returns GetEnrollmentCustomizationPanelSsoAuth Auth panel was created
     * @throws ApiError
     */
    public static postV1EnrollmentCustomizationSso({
        id,
        requestBody,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Enrollment Customization Panel to create
         */
        requestBody: EnrollmentCustomizationPanelSsoAuth,
    }): CancelablePromise<GetEnrollmentCustomizationPanelSsoAuth> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/enrollment-customization/{id}/sso',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Get a single SSO Panel for a single Enrollment Customization
     *
     * Get a single SSO panel for a single enrollment customization
     * @returns GetEnrollmentCustomizationPanelSsoAuth Success
     * @throws ApiError
     */
    public static getV1EnrollmentCustomizationSso({
        id,
        panelId,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
    }): CancelablePromise<GetEnrollmentCustomizationPanelSsoAuth> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/enrollment-customization/{id}/sso/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
            errors: {
                404: `Enrollment Customization or Panel does not exist`,
            },
        });
    }

    /**
     * Update a single SSO Panel for a single Enrollment Customization
     *
     * Update a single SSO panel for a single enrollment customization
     * @returns GetEnrollmentCustomizationPanelSsoAuth Success
     * @throws ApiError
     */
    public static putV1EnrollmentCustomizationSso({
        id,
        panelId,
        requestBody,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
        /**
         * Enrollment Customization Panel to update
         */
        requestBody: EnrollmentCustomizationPanelSsoAuth,
    }): CancelablePromise<GetEnrollmentCustomizationPanelSsoAuth> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/enrollment-customization/{id}/sso/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Enrollment Customization or Panel does not exist`,
            },
        });
    }

    /**
     * Delete a single SSO Panel from an Enrollment Customization
     *
     * Delete a single SSO panel from an Enrollment Customization
     * @returns void
     * @throws ApiError
     */
    public static deleteV1EnrollmentCustomizationSso({
        id,
        panelId,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/enrollment-customization/{id}/sso/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
        });
    }

    /**
     * Create a Text Panel for a single Enrollment Customization
     *
     * Create a Text panel for a single enrollment customization
     * @returns GetEnrollmentCustomizationPanelText Text panel was created
     * @throws ApiError
     */
    public static postV1EnrollmentCustomizationText({
        id,
        requestBody,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Enrollment Customization Panel to create
         */
        requestBody: EnrollmentCustomizationPanelText,
    }): CancelablePromise<GetEnrollmentCustomizationPanelText> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/enrollment-customization/{id}/text',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Get a single Text Panel for a single Enrollment Customization
     *
     * Get a single Text panel for a single enrollment customization
     * @returns GetEnrollmentCustomizationPanelText Success
     * @throws ApiError
     */
    public static getV1EnrollmentCustomizationText({
        id,
        panelId,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
    }): CancelablePromise<GetEnrollmentCustomizationPanelText> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/enrollment-customization/{id}/text/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
            errors: {
                404: `Enrollment Customization with that id does not exist`,
            },
        });
    }

    /**
     * Update a single Text Panel for a single Enrollment Customization
     *
     * Update a single Text panel for a single enrollment customization
     * @returns GetEnrollmentCustomizationPanelText Success
     * @throws ApiError
     */
    public static putV1EnrollmentCustomizationText({
        id,
        panelId,
        requestBody,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
        /**
         * Enrollment Customization Panel to update
         */
        requestBody: EnrollmentCustomizationPanelText,
    }): CancelablePromise<GetEnrollmentCustomizationPanelText> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/enrollment-customization/{id}/text/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Enrollment Customization or Panel does not exist`,
            },
        });
    }

    /**
     * Delete a Text single Panel from an Enrollment Customization
     *
     * Delete a Text single panel from an Enrollment Customization
     * @returns void
     * @throws ApiError
     */
    public static deleteV1EnrollmentCustomizationText({
        id,
        panelId,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/enrollment-customization/{id}/text/{panel-id}',
            path: {
                'id': id,
                'panel-id': panelId,
            },
        });
    }

    /**
     * Get the markdown output of a single Text Panel for a single Enrollment
     *
     * Get the markdown output of a single Text panel for a single enrollment customization
     * @returns Markdown Success
     * @throws ApiError
     */
    public static getV1EnrollmentCustomizationTextMarkdown({
        id,
        panelId,
    }: {
        /**
         * Enrollment Customization identifier
         */
        id: number,
        /**
         * Panel object identifier
         */
        panelId: number,
    }): CancelablePromise<Markdown> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/enrollment-customization/{id}/text/{panel-id}/markdown',
            path: {
                'id': id,
                'panel-id': panelId,
            },
            errors: {
                404: `Enrollment Customization with that id does not exist`,
            },
        });
    }

}
