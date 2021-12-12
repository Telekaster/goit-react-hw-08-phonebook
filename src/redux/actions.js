import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerFetch,
  loginFetch,
  refreshFetch,
  logoutFetch,
  getContactsFetch,
  removeContactsFetch,
  addContactFetch,
} from "../api/fetches";

export const register = createAsyncThunk("auth/register", async (data) => {
  const user = await registerFetch(data);
  localStorage.setItem("auth", user.token);
  return user;
});

export const loginAction = createAsyncThunk("auth/login", async (data) => {
  const user = await loginFetch(data);
  if (user.token) {
    localStorage.setItem("auth", user.token);
  }

  return user;
});

export const refreshUserAction = createAsyncThunk(
  "auth/refresh",
  async (data) => {
    const user = await refreshFetch(data);
    return user;
  }
);

export const logoutAction = createAsyncThunk("auth/logout", async (data) => {
  await logoutFetch(data);
  localStorage.removeItem("auth");
  window.location.reload();
});

export const getContactsFromServer = createAsyncThunk(
  "contacts/get",
  async (data) => {
    const contacts = await getContactsFetch(data);
    return contacts;
  }
);

export const addContactToServer = createAsyncThunk(
  "contact/add",
  async (data, contact) => {
    await addContactFetch(data, contact);

    const upgradedContact = await getContactsFetch(data);
    return upgradedContact;
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

export const filterContacts = createAction("phonebook/filter", (value) => {
  return { payload: value };
});
