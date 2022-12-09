/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class FileuploadsService {

    /**
     * Creates file attachments in Jamf Pro
     * You can POST different types of files by entering parameters for {resource}, {idType}, and {id}, for example /JSSResource/fileuploads/computers/id/2.  Attachments can be uploaded by specifying computers, mobiledevices, enrollmentprofiles, printers, or peripherals as the resource.  Icons can be uploaded by specifying policies, ebooks, or mobiledeviceapplicationsicon as the resource. A mobile device application can be uploaded by using mobiledeviceapplicationsipa.  A disk encryption can be uploaded by specifying diskencryptionconfigurations as the resource.  idTypes supported are id and name, although peripheral names are not supported.   A sample command is  curl -k -u user:password https://my.JamfPro:8443/JSSResource/fileuploads/computers/id/2  -F name=@/Users/admin/Documents/Sample.doc -X POST
     * @returns any No response was specified
     * @throws ApiError
     */
    public static uploadFiles(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fileuploads/{resource}/{idType}/{id}',
        });
    }

}
