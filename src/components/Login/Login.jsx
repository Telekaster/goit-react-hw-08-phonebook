import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div>
      <NavLink
        to="goit-react-hw-08-phonebook/login"
        className={({ isActive }) =>
          isActive ? styles.link__active : styles.link
        }
      >
        Login
      </NavLink>
      <NavLink
        to="goit-react-hw-08-phonebook/register"
        className={({ isActive }) =>
          isActive ? styles.link__active : styles.link
        }
      >
        Register
      </NavLink>
    </div>
  );
}
