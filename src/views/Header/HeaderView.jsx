import React from "react";
import Login from "../../components/Login/Login";
import UserMenu from "../../components/UserMenu/UserMenu";
import styles from "./Header.module.css";

export default function Header(params) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Phonebook</h1>
      <Login />
      {/* <UserMenu /> */}
    </header>
  );
}
