import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  register,
  filterContacts,
  addContactToServer,
  getContactsFromServer,
  removeContactsFromServer,
} from "./actions";

const userReducer = createReducer("", {
  [register.fulfilled]: (state, { payload }) => (state = payload),
});

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

const loadingReducer = createReducer(true, {
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
});
