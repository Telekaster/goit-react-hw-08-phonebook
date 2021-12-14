import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./views/Header/HeaderView";
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import HomeView from "./views/HomeView/HomeView";
import {
  getContactsFromServer,
  removeContactsFromServer,
  refreshUserAction,
} from "./redux/actions";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((store) => {
    return store.loadingReducer;
  });
  const contacts = useSelector((store) => {
    return store.contactReducer;
  });

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      dispatch(refreshUserAction(localStorage.getItem("auth")));

      if (contacts.length === 0) {
        dispatch(getContactsFromServer());
      }
    }
  }, [dispatch, contacts.length]);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="goit-react-hw-07-phonebook/"
            exact
            element={<HomeView />}
          />
          <Route
            path="goit-react-hw-07-phonebook/login"
            exact
            element={<LoginView />}
          />
          <Route
            path="goit-react-hw-07-phonebook/register"
            exact
            element={<RegisterView />}
          />
        </Routes>
      </div>
    </>
  );
}
