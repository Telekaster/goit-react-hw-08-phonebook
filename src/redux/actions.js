import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContactsFetch,
  removeContactsFetch,
  addContactFetch,
} from "../api/fetches";

export const filterContacts = createAction("phonebook/filter", (value) => {
  return { payload: value };
});

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
