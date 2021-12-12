import React from "react";
import styles from "./UserMenu.module.css";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch(logoutAction());
    navigate("/");
  }
  return (
    <div className={styles.login__area}>
      <h2 className={styles.title}>Welcome</h2>
      <p className={styles.loginName}>e-mail</p>

      <button type="button" className={styles.button} onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
}
