import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => {
    return state.loadingReducer;
  });
  const email = useSelector((state) => {
    return state.userReducer.user.email;
  });

  function logoutHandler() {
    dispatch(logoutAction());
    navigate("/goit-react-hw-08-phonebook");
  }

  return (
    <div className={styles.login__area}>
      <h2 className={styles.title}>Welcome</h2>
      {!loading && <p className={styles.loginName}>{email}</p>}
      <button type="button" className={styles.button} onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
}
