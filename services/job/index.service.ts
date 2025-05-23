import { RemoteData, remoteData } from "@devexperts/remote-data-ts";
import { IJobAddApiRequest, IJobAddApiResponse, IJobApplyApiRequest, IJobApplyApiResponse, IJobDeleteApiRequest, IJobDeleteApiResponse, IJobDetailsApiResponse, IJobUpdateApiRequest, IJobUpdateApiResponse, IJobsApiResponse } from "models/job";
import apiClientRequest from "utils/api/api-client.util"
import { APIError } from "utils/api/errors";

export namespace JobService {

    export const all = async (intJobLoc: number, tinJobStatus: number) => {
        let result: RemoteData<APIError, IJobsApiResponse> = await apiClientRequest.get('/job/all', { intJobLoc, tinJobStatus })
        return remoteData.map(result, (response: IJobsApiResponse) => response);
    }

    export const details = async (vchJobUid: string) => {
        let result: RemoteData<APIError, IJobDetailsApiResponse> = await apiClientRequest.get('/job/details', { vchJobUid })
        return remoteData.map(result, (response: IJobDetailsApiResponse) => response);
    }

    export const applyOnline = async (data: IJobApplyApiRequest) => {
        let result: RemoteData<APIError, IJobApplyApiResponse> = await apiClientRequest.post('/job/apply-online', data)
        return remoteData.map(result, (response: IJobApplyApiResponse) => response);
    }

}