import { Action, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { appName } from "app-config";
import user from "./slice/user.slice";

const middlewareConfiguration = { serializableCheck: false };
const reducers = combineReducers({ user });
const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: { name: appName },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middlewareConfiguration),
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export function dispatchOnCall(action: Action) {
  return () => store.dispatch(action);
}
