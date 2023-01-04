/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions.ts';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
	BASE: string;
	VERSION: string;
	WITH_CREDENTIALS: boolean;
	CREDENTIALS: 'include' | 'omit' | 'same-origin';
	TOKEN?: string | Resolver<string>;
	USERNAME?: string | Resolver<string>;
	PASSWORD?: string | Resolver<string>;
	HEADERS?: Headers | Resolver<Headers>;
	ENCODE_PATH?: (path: string) => string;
};

export const OpenAPI: OpenAPIConfig = {
	BASE: 'https://oakpark.jamfcloud.com/JSSResource',
	VERSION: 'production',
	WITH_CREDENTIALS: true,
	CREDENTIALS: 'include',
	TOKEN: undefined,
	USERNAME: 'api',
	PASSWORD: 'f9Akf*pk%H&ZZ;uXJg',
	HEADERS: undefined,
	ENCODE_PATH: undefined,
};
