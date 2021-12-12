import React from "react";
import Login from "../../components/Login/Login";
import UserMenu from "../../components/UserMenu/UserMenu";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function Header(params) {
  const user = useSelector((store) => {
    return store.userReducer;
  });

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Phonebook</h1>
      {Object.keys(user).length !== 0 ? <UserMenu /> : <Login />}
    </header>
  );
}
