export interface IUserDetails {
  vchUserUid?: string;
  vchUserFname?: string;
  vchUserLname?: string;
  vchUserImg?: string;
  vchUserEmail?: string;
  vchUserPhone?: string;
  intDeptUid?: number;
  vchDeptShortName?: string;
  intDesgUid?: number;
  vchDesgName?: string;
  intLocUid?: number;
  vchLocName?: string;
}
export interface IUserDetailsApiResponse {
  successful: boolean;
  message: string;
  data?: IUserDetails;
}

export interface IUserLoginApiRequest {
  vchUserUid: string;
  vchUserPass: string;
}

export interface IUserToken {
  accessToken?: string;
}

export interface IAuthUser {
  profile?: IUserDetails;
  token?: IUserToken;
}

export interface IUserLoginApiResponse {
  successful: boolean;
  message: string;
  data?: IAuthUser;
}

export interface IUserAddUpdateApiRequest {
  vchUserUid?: string;
  vchUserFname?: string;
  vchUserLname?: string;
  vchUserImg?: string;
  vchUserEmail?: string;
  vchUserPhone?: string;
  intUserDeptUid?: number;
  intUserDesgUid?: number;
  intUserLocUid?: number;
  vchUserPass?: string;
}
export interface IUserAddUpdateApiResponse {
  successful: boolean;
  message: string;
  data?: IUserDetails;
}
export interface IUsersApiResponse {
  successful: boolean;
  message: string;
  data?: Array<IUserDetails>;
}

export interface IUserUpdateByUserApiRequest {
  vchUserImg?: string;
  vchUserEmail?: string;
  vchUserPhone?: string;
}
export interface IUserUpdateByUserApiResponse {
  successful: boolean;
  message: string;
  data?: IUserDetails;
}

export interface IUserDepartmentDetails {
  intDeptUid?: number;
  vchDeptShortName?: string;
  vchDeptName?: string;
}

export interface IUserDepartmentsApiResponse {
  successful: boolean;
  message: string;
  data?: Array<IUserDepartmentDetails>;
}

export interface IUserDesignationDetails {
  intDesgUid?: number;
  vchDesgName?: string;
}

export interface IUserDesignationsApiResponse {
  successful: boolean;
  message: string;
  data?: Array<IUserDesignationDetails>;
}

export interface IUserLocationDetails {
  intLocUid?: number;
  vchLocName?: string;
}

export interface IUserLocationsApiResponse {
  successful: boolean;
  message: string;
  data?: Array<IUserLocationDetails>;
}

export interface IUserChangePassApiRequest {
  vchUserPass?: string;
  vchUserNewPass?: string;
}
export interface IUserChangePassApiResponse {
  successful: boolean;
  message: string;
  data?: null;
}

export interface IUserForgotPasswordApiResponse {
  successful: boolean;
  message: string;
  data?: null;
}

export interface IUserValidateResetTokenApiResponse {
  successful: boolean;
  message: string;
  data?: IUserDetails;
}

export interface IUserResetPassApiRequest {
  vchUserResetToken?: string;
  vchUserPass?: string;
}

export interface IUserResetPassApiResponse {
  successful: boolean;
  message: string;
  data?: null;
}