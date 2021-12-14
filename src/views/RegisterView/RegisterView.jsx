import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../../redux/actions";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./RegisterView.module.css";

export default function RegisterView() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
    dispatch(registerAction({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    navigate("/goit-react-hw-08-phonebook/");
  }

  if (
    location.pathname === "/goit-react-hw-08-phonebook/register" &&
    localStorage.getItem("auth")
  ) {
    navigate("/goit-react-hw-08-phonebook/");
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
