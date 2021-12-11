import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm ";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./views/Header/HeaderView";
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";

import {
  getContactsFromServer,
  filterContacts,
  removeContactsFromServer,
  addContactToServer,
} from "./redux/actions";

export default function App() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const dispatch = useDispatch();

  const contacts = useSelector((store) => {
    return store.contactReducer;
  });

  const filter = useSelector((store) => {
    return store.filterReducer;
  });

  function handleChange(evt) {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;

      case "tel":
        setNumber(evt.target.value);
        break;

      default:
        break;
    }
  }

  function handleAddContact() {
    if (
      contacts[0].find((contact) => {
        return contact.name === name;
      })
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        name: name,
        phone: number,
      };
      dispatch(addContactToServer(newContact));
    }
  }

  function filterer(evt) {
    dispatch(filterContacts(evt.target.value));
  }

  function removeContact(evt) {
    const id = evt.target.id;
    dispatch(removeContactsFromServer(id));
  }

  useEffect(() => {
    dispatch(getContactsFromServer());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          {/* <Route
            path="/"
            exact
            element={}
          /> */}
          <Route path="/login" exact element={<LoginView />} />
          <Route path="/register" exact element={<RegisterView />} />
          {/* 
          <ContactForm
            handleChange={handleChange}
            handleAddContact={handleAddContact}
          /> */}

          {/* <h2>Contacts</h2>
          <Filter filterContacts={filterer} />
          <ContactList filter={filter} deleteContact={removeContact} /> */}
        </Routes>
      </div>
    </>
  );
}
