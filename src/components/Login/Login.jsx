import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login(params) {
  return (
    <div>
      <Link to="#" className={styles.link}>
        Login
      </Link>
      <Link to="#" className={styles.link}>
        Register
      </Link>
    </div>
  );
}
