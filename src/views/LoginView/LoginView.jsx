import React from "react";
import styles from "./LoginView.module.css";
export default function LoginView() {
  return (
    <div>
      <h3 className={styles.title}>Login</h3>

      <form className={styles.form}>
        <input type="text" placeholder="Login" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <button type="button">Login</button>
      </form>
    </div>
  );
}
