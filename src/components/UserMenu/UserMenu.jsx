import React from "react";
import styles from "./UserMenu.module.css";
export default function UserMenu() {
  return (
    <div className={styles.login__area}>
      <h2 className={styles.title}>Welcome</h2>
      <p className={styles.loginName}>e-mail</p>

      <button type="button" className={styles.button}>
        Logout
      </button>
    </div>
  );
}
