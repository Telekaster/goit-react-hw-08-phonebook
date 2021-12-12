import React, { useState } from "react";
import styles from "./LoginView.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions";

export default function LoginView() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  function handleChange(evt) {
    const { name, value } = evt.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  }

  async function handleSubmit() {
    dispatch(loginAction({ email, password }));
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h3 className={styles.title}>Login</h3>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="E-mail"
          className={styles.input}
          name="email"
          value={email}
          onInput={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          name="password"
          value={password}
          onInput={handleChange}
        />
        <button type="button" className={styles.button} onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
