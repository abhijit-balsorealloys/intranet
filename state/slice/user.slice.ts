import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthUser, IUserDetails } from "models/user";
import { State, store } from "../store";

const initialState: IAuthUser = {
  profile: undefined,
  token: {
    accessToken: ''
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeApp: () => initialState,
    setAuthUser: (state: IAuthUser, { payload }: PayloadAction<IAuthUser>) => {
      state.profile = payload.profile
      state.token = payload.token
    },
    setAuthUserProfile: (state: IAuthUser, { payload }: PayloadAction<IUserDetails>) => {
      state.profile = payload
    },
    setAuthUserLogout: (state: IAuthUser) => {
      state.profile = undefined
      state.token = { accessToken: '' }
    },
  }
})

export namespace UserDispatch {
  export const setAuthUser = (payload: IAuthUser) => store.dispatch(userSlice.actions.setAuthUser(payload))
  export const setAuthUserProfile = (payload: IUserDetails) => store.dispatch(userSlice.actions.setAuthUserProfile(payload))
  export const setAuthUserLogout = () => store.dispatch(userSlice.actions.setAuthUserLogout())
}

export namespace UserReduxStore {
  export const selectAuthUser = (state: State) => state.user;
  export const selectAuthUserProfile = (state: State) => state.user.profile;
  export const selectAuthUserDept = (state: State) => state.user.profile?.vchDeptShortName;
  export const selectAuthUserAccessToken = (state: State) => state.user.token?.accessToken;
}

export default userSlice.reducer;
