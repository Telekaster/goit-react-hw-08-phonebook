import React, { useState } from "react";
import styles from "./RegisterView.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions";

export default function RegisterView() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const token = useSelector((store) => {
    return store.userReducer;
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;

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
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    console.log(token);
  }

  return (
    <div>
      <h3 className={styles.title}>Register</h3>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          value={name}
          onInput={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          className={styles.input}
          value={email}
          onInput={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onInput={handleChange}
        />
        <button type="button" className={styles.button} onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}
