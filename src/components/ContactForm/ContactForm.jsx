import React from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ handleChange, handleAddContact }) {
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
      />
      <p className={styles.name}>Phone</p>
      <input type="tel" name="tel" onChange={handleChange} />

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
