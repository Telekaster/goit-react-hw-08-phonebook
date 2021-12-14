import React from "react";
import styles from "./ContactForm.module.css";
import { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import {
  getContactsFromServer,
  filterContacts,
  removeContactsFromServer,
  addContactToServer,
  refreshUserAction,
} from "../../redux/actions";

export default function ContactForm() {
  const [name, setName] = useState();
  const [tel, setTel] = useState();
  const dispatch = useDispatch();

  function handleChange(evt) {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;

      case "tel":
        setTel(evt.target.value);
        break;

      default:
        break;
    }
  }

  function handleAddContact() {
    const newContact = {
      name: name,
      number: tel,
    };

    dispatch(addContactToServer(newContact));
    setName("");
    setTel("");
  }

  return (
    <div className={styles.input__area}>
      <p className={styles.name}>Name</p>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
      />
      <p className={styles.name}>Phone</p>
      <input type="tel" name="tel" onChange={handleChange} value={tel} />

      <button
        type="button"
        className={styles.input__btn}
        onClick={handleAddContact}
      >
        Add contact
      </button>
    </div>
  );
}
