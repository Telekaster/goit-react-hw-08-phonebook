import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm ";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
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
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm
        handleChange={handleChange}
        handleAddContact={handleAddContact}
      />

      <h2>Contacts</h2>
      <Filter filterContacts={filterer} />
      <ContactList filter={filter} deleteContact={removeContact} />
    </div>
  );
}
