import { remoteData, RemoteData } from "@devexperts/remote-data-ts";
import { liveApiURL, devApiURL } from "app-config";
import { IFileDeleteApiResponse, IFileUploadApiResponse } from "models/common/file";
import apiClientRequest from "./api/api-client.util";
import { APIError } from "./api/errors";

export const relFile = (file?: string) => {
    if (file)
        return file.replace(liveApiURL, '').replace(devApiURL, '')
    else
        return ''
};
export const absFile = (file: string) => {
    return devApiURL + file
};

export const fileUpload = async (dir: string, file: File, imgOptions = {}, daysDir: boolean = false, rename: boolean = true) => {
    let formData = new FormData();
    formData.append("rename", rename ? '1' : '0');
    formData.append("dir", dir);
    formData.append("daysDir", daysDir ? '1' : '0');
    formData.append("options", JSON.stringify(imgOptions));
    formData.append("file", file, file.name);
    /* let result = await apiClientRequest.post(apiURL + "/upload-file", formData);
    return result; */
    let result: RemoteData<APIError, IFileUploadApiResponse> = await apiClientRequest.post("/file/upload", formData)
    return remoteData.map(result, (response: IFileUploadApiResponse) => response);
};

export const fileDelete = async (file: string, isDir: boolean = false) => {
    let result: RemoteData<APIError, IFileDeleteApiResponse> = await apiClientRequest.delete("/file/delete", { file: relFile(file), isDir })
    return remoteData.map(result, (response: IFileDeleteApiResponse) => response);
    /* let result = await apiClientRequest.post(staticAPI + "/delete-file", JSON.stringify({ file, isDir }));
    return result; */
};

export const fileIcon = (ext: string) => {
    ext = ext.toLowerCase()
    if (ext === '') return 'folder.png'
    else if (ext === 'pdf') return 'pdf.png'
    else if (['xlsx', 'xls', 'csv'].includes(ext)) return 'excel.png'
    else if (['docx', 'doc'].includes(ext)) return 'word.png'
    else if (['pptx', 'ppt'].includes(ext)) return 'powerpoint.png'
    else if (['txt'].includes(ext)) return 'notepad.png'
    else if (['jpg', 'jpeg', 'png', 'bmp', 'gif', 'ico', 'webp'].includes(ext)) return 'image.png'
    else if (['zip', 'rar'].includes(ext)) return 'zip.png'
    else return 'file.png'
};