import React from "react";
import { useSelector } from "react-redux";
import styles from "./ContactList.module.css";

export default function ContactList({ filter, deleteContact }) {
  const isLoading = useSelector((store) => {
    return store.loadingReducer;
  });
  const contacts = useSelector((store) => {
    return store.contactReducer;
  });
  const filterValue = useSelector((store) => {
    return store.filterReducer;
  });
  console.log(contacts);

  return (
    <div className={styles.contacts}>
      <ul className={styles.contacts__list}>
        {!isLoading &&
          filter === "" &&
          contacts.length !== 0 &&
          contacts[0].map((item) => {
            return (
              <li key={item.id} className={styles.contact__item}>
                <span className={styles.name}>{item.name}</span>
                <a className={styles.number} href="tel:+555555555">
                  {item.number}
                </a>

                <button
                  onClick={deleteContact}
                  id={item.id}
                  type="button"
                  className={styles.contacts__list_btn}
                >
                  Delete
                </button>
              </li>
            );
          })}
        {!isLoading &&
          filterValue !== "" &&
          contacts[0]
            .filter((item) => {
              return item.name
                .toLowerCase()
                .includes(filterValue.toLowerCase());
            })
            .map((item) => {
              return (
                <li key={item.id} className={styles.contact__item}>
                  <span className={styles.name}>{item.name}</span>
                  <a className={styles.number} href="tel:+555555555">
                    {item.number}
                  </a>

                  <button
                    onClick={deleteContact}
                    id={item.id}
                    type="button"
                    className={styles.contacts__list_btn}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
