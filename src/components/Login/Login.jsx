import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login(params) {
  return (
    <div>
      <NavLink
        to="goit-react-hw-07-phonebook/login"
        className={({ isActive }) =>
          isActive ? styles.link__active : styles.link
        }
      >
        Login
      </NavLink>
      <NavLink
        to="goit-react-hw-07-phonebook/register"
        className={({ isActive }) =>
          isActive ? styles.link__active : styles.link
        }
      >
        Register
      </NavLink>
    </div>
  );
}
