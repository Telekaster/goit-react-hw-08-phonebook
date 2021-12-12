import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  register,
  loginAction,
  refreshUserAction,
  logoutAction,
  filterContacts,
  addContactToServer,
  getContactsFromServer,
  removeContactsFromServer,
} from "./actions";

const userReducer = createReducer(
  {},
  {
    [register.fulfilled]: (state, { payload }) => {
      return { ...state, ...payload };
    },
    [loginAction.fulfilled]: (state, { payload }) => {
      return { ...state, ...payload };
    },
    [refreshUserAction.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        user: { ...payload },
        token: localStorage.getItem("auth"),
      };
    },
    [logoutAction.fulfilled]: (state, { payload }) => (state = {}),
  }
);

const contactReducer = createReducer([], {
  [getContactsFromServer.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [removeContactsFromServer.fulfilled]: (state, { payload }) => [
    (state = payload),
  ],

  [addContactToServer.fulfilled]: (state, { payload }) => [(state = payload)],
});

const loginReducer = createReducer(false, {
  [register.pending]: () => false,
  [register.fulfilled]: () => true,
  [register.rejected]: () => false,
  [loginAction.pending]: () => false,
  [loginAction.fulfilled]: () => true,
  [loginAction.rejected]: () => false,
  [refreshUserAction.pending]: () => false,
  [refreshUserAction.fulfilled]: () => true,
  [refreshUserAction.rejected]: () => false,
  [logoutAction.pending]: () => true,
  [logoutAction.fulfulfilled]: () => false,
  [logoutAction.rejected]: () => false,
});

const loadingReducer = createReducer(true, {
  [register.pending]: () => true,
  [register.fulfilled]: () => false,
  [register.rejected]: () => false,
  [loginAction.pending]: () => true,
  [loginAction.fulfilled]: () => false,
  [loginAction.rejected]: () => false,
  [refreshUserAction.pending]: () => true,
  [refreshUserAction.fulfilled]: () => false,
  [refreshUserAction.rejected]: () => false,
  [logoutAction.pending]: () => true,
  [logoutAction.fulfulfilled]: () => false,
  [logoutAction.rejected]: () => false,
  [getContactsFromServer.pending]: () => true,
  [getContactsFromServer.fulfilled]: () => false,
  [getContactsFromServer.rejected]: () => false,
  [removeContactsFromServer.pending]: () => true,
  [removeContactsFromServer.fulfilled]: () => false,
  [removeContactsFromServer.rejected]: () => false,
});

const filterReducer = createReducer("", {
  [filterContacts]: (state, { payload }) => {
    return (state = payload);
  },
});

export const reducers = combineReducers({
  userReducer,
  contactReducer,
  filterReducer,
  loadingReducer,
  loginReducer,
});
