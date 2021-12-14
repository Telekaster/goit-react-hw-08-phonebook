import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./views/Header/HeaderView";
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import HomeView from "./views/HomeView/HomeView";
import PrivateRoute from "./components/PrivateRoute";
import {
  getContactsFromServer,
  filterContacts,
  removeContactsFromServer,
  addContactToServer,
  refreshUserAction,
} from "./redux/actions";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => {
    return store.userReducer;
  });

  const filter = useSelector((store) => {
    return store.filterReducer;
  });

  const login = useSelector((store) => {
    return store.loginReducer;
  });
  // const navigate = useNavigate();

  function filterer(evt) {
    dispatch(filterContacts(evt.target.value));
  }

  function removeContact(evt) {
    const id = evt.target.id;
    dispatch(removeContactsFromServer(id));
  }

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      dispatch(refreshUserAction(localStorage.getItem("auth")));
    }
    if (login) {
      dispatch(getContactsFromServer());
    }
  }, [dispatch]);

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
