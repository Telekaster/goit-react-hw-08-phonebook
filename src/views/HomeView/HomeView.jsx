import React from "react";
import styles from "./HomeView.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
export default function HomeView() {
  return (
    <>
      {localStorage.getItem("auth") ? (
        <div className={styles.contacts__area}>
          <div>
            <h3 className={styles.newContact__title}>Create new contact</h3>
            <ContactForm
            // handleChange={handleChange}
            // handleAddContact={handleAddContact}
            />
          </div>

          <div className={styles.contacts_filter__area}>
            <h3 className={styles.contacts__title}>Contacts</h3>
            <Filter
            // filterContacts={filterer}
            />
          </div>
          <div>
            <ContactList
            // filter={filter}
            // deleteContact={removeContact}
            />
          </div>
        </div>
      ) : (
        <h2 className={styles.warning}>Please login first</h2>
      )}
    </>
  );
}
