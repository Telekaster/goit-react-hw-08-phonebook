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

  return (
    <div className={styles.contacts}>
      <ul className={styles.contacts__list}>
        {/* ----------------------- */}
        <li className={styles.contact__item}>
          <span className={styles.name}>John Doe</span>
          <a className={styles.number} href="tel:+555555555">
            555-555-555
          </a>
          <span></span>
          <button className={styles.contacts__list_btn}>Delete</button>
        </li>

        {!isLoading &&
          filter === "" &&
          contacts[0].map((item) => {
            return (
              <li key={item.id}>
                {`${item.name}: ${item.phone}`}
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
                <li key={item.id}>
                  {`${item.name}: ${item.phone}`}
                  <button
                    onClick={deleteContact}
                    type="button"
                    className="contacts__list_btn"
                  >
                    Delete
                  </button>{" "}
                </li>
              );
            })}
      </ul>
    </div>
  );
}
