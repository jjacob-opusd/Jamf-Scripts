/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Authorization } from '../models/Authorization.ts';
import type { AuthorizationV1 } from '../models/AuthorizationV1.ts';
import type { AuthToken } from '../models/AuthToken.ts';
import type { AuthTokenV1 } from '../models/AuthTokenV1.ts';
import type { CurrentAuthorization } from '../models/CurrentAuthorization.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ApiAuthenticationService {

    /**
     * @deprecated
     * Get all the Authorization details associated with the current api
     *
     * Get all the authorization details associated with the current api token
     * @returns Authorization Current authorization details.
     * @throws ApiError
     */
    public static getAuth(): CancelablePromise<Authorization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth',
        });
    }

    /**
     * @deprecated
     * Get the authorization details associated with the current API token
     *
     * Get the authorization details associated with the current API token for the users current site
     * @returns CurrentAuthorization Authorization details for users current site.
     * @throws ApiError
     */
    public static postAuthCurrent(): CancelablePromise<CurrentAuthorization> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/current',
        });
    }

    /**
     * @deprecated
     * Invalidate current token
     *
     * Invalidates current token
     * @returns void
     * @throws ApiError
     */
    public static postAuthInvalidateToken(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/invalidateToken',
        });
    }

    /**
     * @deprecated
     * Invalidate existing token and generates new token
     *
     * Invalidates existing token and generates new token with extended expiration based on existing token credentials.
     * @returns AuthToken Updated token.
     * @throws ApiError
     */
    public static postAuthKeepAlive(): CancelablePromise<AuthToken> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/keepAlive',
        });
    }

    /**
     * @deprecated
     * Create a token based on other authentication details (basic, etc.)
     *
     * Create a token based on other authentication details (basic, etc.)
     *
     * @returns AuthToken New auth token generated.
     * @throws ApiError
     */
    public static postAuthTokens(): CancelablePromise<AuthToken> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/tokens',
        });
    }

    /**
     * Get all the Authorization details associated with the current api
     *
     * Get all the authorization details associated with the current api token
     * @returns AuthorizationV1 Current authorization details.
     * @throws ApiError
     */
    public static getV1Auth(): CancelablePromise<AuthorizationV1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/auth',
        });
    }

    /**
     * Invalidate current token
     *
     * Invalidates current token
     * @returns void
     * @throws ApiError
     */
    public static postV1AuthInvalidateToken(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/invalidate-token',
        });
    }

    /**
     * Invalidate existing token and generates new token
     *
     * Invalidates existing token and generates new token with extended expiration based on existing token credentials.
     * @returns AuthTokenV1 Updated token.
     * @throws ApiError
     */
    public static postV1AuthKeepAlive(): CancelablePromise<AuthTokenV1> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/keep-alive',
        });
    }

    /**
     * Create a token based on other authentication details (basic, etc.)
     *
     * Create a token based on other authentication details (basic, etc.)
     *
     * @returns AuthTokenV1 New auth token generated.
     * @throws ApiError
     */
    public static postV1AuthToken(): CancelablePromise<AuthTokenV1> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/token',
        });
    }

}
