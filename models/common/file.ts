export interface IFileUploadApiResponse {
    successful: boolean;
    message: string;
    data: string;
}

export interface IFileDeleteApiRequest {
    file: string;
    isDir: boolean;
}

export interface IFileDeleteApiResponse {
    successful: boolean;
    message: string;
}