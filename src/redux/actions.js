import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  register,
  login,
  refresh,
  logout,
  getContacts,
  removeContact,
  addContact,
} from "../services/api";

export const registerAction = createAsyncThunk(
  "auth/register",
  async (data) => {
    const user = await register(data);
    localStorage.setItem("auth", user.token);
    return user;
  }
);

export const loginAction = createAsyncThunk("auth/login", async (data) => {
  const user = await login(data);
  if (user.token) {
    localStorage.setItem("auth", user.token);
  }
  window.location.reload();

  return user;
});

export const refreshUserAction = createAsyncThunk(
  "auth/refresh",
  async (data) => {
    const user = await refresh(data);
    return user;
  }
);

export const logoutAction = createAsyncThunk("auth/logout", async (data) => {
  await logout(data);
  localStorage.removeItem("auth");
  window.location.reload();
});

export const getContactsFromServer = createAsyncThunk(
  "contacts/get",
  async (data) => {
    const contacts = await getContacts(data);
    return contacts;
  }
);

export const addContactToServer = createAsyncThunk(
  "contact/add",
  async (contact) => {
    const result = await addContact(contact);

    if (result.id) {
      const upgradedContact = await getContacts();
      return upgradedContact;
    }
  }
);

export const removeContactsFromServer = createAsyncThunk(
  "contacts/delete",
  async (id) => {
    const result = await removeContact(id);

    if (Object.keys(result).length === 0) {
      const upgradedContact = await getContacts();
      return upgradedContact;
    }

    return result;
  }
);

export const filterContacts = createAction("phonebook/filter", (value) => {
  return { payload: value };
});
