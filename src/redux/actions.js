import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerFetch,
  loginFetch,
  refreshFetch,
  getContactsFetch,
  removeContactsFetch,
  addContactFetch,
} from "../api/fetches";

export const register = createAsyncThunk("auth/register", async (data) => {
  const user = await registerFetch(data);
  return user;
});

export const loginAction = createAsyncThunk("auth/login", async (data) => {
  const user = await loginFetch(data);
  localStorage.setItem("auth", user.token);
  return user;
});

export const refreshUserAction = createAsyncThunk(
  "auth/refresh",
  async (data) => {
    const user = await refreshFetch(data);
    return user;
  }
);

export const getContactsFromServer = createAsyncThunk(
  "contacts/get",
  async () => {
    const contacts = getContactsFetch();
    return contacts;
  }
);

export const removeContactsFromServer = createAsyncThunk(
  "contacts/delete",
  async (id) => {
    await removeContactsFetch(id);

    const newContact = await getContactsFetch();
    return newContact;
  }
);

export const addContactToServer = createAsyncThunk(
  "contact/add",
  async (contact) => {
    await addContactFetch(contact);

    const upgradedContact = await getContactsFetch();
    return upgradedContact;
  }
);

export const filterContacts = createAction("phonebook/filter", (value) => {
  return { payload: value };
});
