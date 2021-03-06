import React from "react";
import styles from "./HomeView.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/actions";

export default function HomeView() {
  const user = useSelector((store) => {
    return store.userReducer;
  });
  const dispatch = useDispatch();

  const filter = useSelector((store) => {
    return store.filterReducer;
  });

  function filterer(evt) {
    dispatch(filterContacts(evt.target.value));
  }

  return (
    <>
      {Object.keys(user).length !== 0 ? (
        <div className={styles.contacts__area}>
          <div>
            <h3 className={styles.newContact__title}>Create new contact</h3>
            <ContactForm />
          </div>

          <div className={styles.contacts_filter__area}>
            <Filter filterContacts={filterer} />
          </div>
          <div>
            <h3 className={styles.contacts__title}>Contacts</h3>
            <ContactList filter={filter} />
          </div>
        </div>
      ) : (
        <h2 className={styles.warning}>Please login first</h2>
      )}
    </>
  );
}
