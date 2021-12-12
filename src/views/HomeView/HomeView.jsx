import React from "react";
import style from "./HomeView.module.css";
export default function HomeView() {
  return (
    <>
      {localStorage.getItem("auth") ? (
        1
      ) : (
        <h2 className={style.warning}>Please login first</h2>
      )}
    </>
  );
}
