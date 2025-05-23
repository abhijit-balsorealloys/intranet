export interface IJobCandidateDetails {
  vchJobCandUid?: string;
  vchJobCandPostUid?: string;

  vchJobCandJobPosition?: string;
  vchJobCandJobLoc?: string;
  vchJobCandJobCode?: string;

  vchJobCandFname?: string;
  vchJobCandLname?: string;
  dtmJobCandDob?: string;
  vchJobCandAddr?: string;
  vchJobCandCurLoc?: string;
  vchJobCandPhone1?: string;
  vchJobCandPhone2?: string;
  vchJobCandEmail?: string;
  vchJobCandHighQual?: string;
  intJobCandExpYear?: number;
  intJobCandExpMonth?: number;
  vchJobCandLetter?: string;
  vchJobCandResume?: string;
  dtmJobCandCreatedOn?: string;
  dtmJobCandReadOn?: string;
  dtmJobCandShortlistedOn?: string;
  dtmJobCandRejectedOn?: string;
  dtmJobCandAppointedOn?: string;
}

export interface IJobCandidatesApiResponse {
  successful: boolean;
  message: string;
  data?: Array<IJobCandidateDetails>;
}
export interface IJobApplyApiRequest {
  vchJobCandPostUid?: string;
  vchJobCandFname?: string;
  vchJobCandLname?: string;
  dtmJobCandDob?: string;
  vchJobCandAddr?: string;
  vchJobCandCurLoc?: string;
  vchJobCandPhone1?: string;
  vchJobCandPhone2?: string;
  vchJobCandEmail?: string;
  vchJobCandHighQual?: string;
  intJobCandExpYear?: number;
  intJobCandExpMonth?: number;
  vchJobCandLetter?: string;
  vchJobCandResume?: string;
}
export interface IJobApplyApiResponse {
  successful: boolean;
  message: string;
  data?: null;
}

export interface IJobCandidateStatusApiRequest {
  vchJobCandUid?: string;
  intJobCandStatus?: number;
}
export interface IJobCandidateStatusApiResponse {
  successful: boolean;
  message: string;
  data?: null;
}
export interface IJobDetails {
  vchJobUid?: string;
  intJobApplications?: number;
  vchJobPosition?: string;
  vchJobCode?: string;
  intJobLoc?: number;
  vchLocName?: string;
  vchJobQualification?: string;
  vchJobResponsibility?: string;
  tinJobStatus?: number;
  dtmJobCreatedOn?: string;
  vchJobCreatedBy?: string;
  dtmJobUpdatedOn?: string;
  vchJobUpdatedBy?: string;
}

export interface IJobsApiResponse {
  successful: boolean;
  message: string;
  data?: Array<IJobDetails>;
}

export interface IJobDetailsApiResponse {
  successful: boolean;
  message: string;
  data?: IJobDetails;
}
export interface IJobAddApiRequest {
  vchJobPosition?: string;
  vchJobCode?: string;
  intJobLoc?: number;
  vchJobQualification?: string;
  vchJobResponsibility?: string;
  tinJobStatus?: number;
}

export interface IJobAddApiResponse {
  successful: boolean;
  message: string;
  data?: null;
}

export interface IJobUpdateApiRequest {
  vchJobUid?: string;
  vchJobPosition?: string;
  vchJobCode?: string;
  intJobLoc?: number;
  vchJobQualification?: string;
  vchJobResponsibility?: string;
  tinJobStatus?: number;
}

export interface IJobUpdateApiResponse {
  successful: boolean;
  message: string;
  data?: null;
}

export interface IJobDeleteApiRequest {
  vchJobUid?: string;
}

export interface IJobDeleteApiResponse {
  successful: boolean;
  message: string;
  data?: null;
}