import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./views/Header/HeaderView";
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import HomeView from "./views/HomeView/HomeView";

import {
  getContactsFromServer,
  filterContacts,
  removeContactsFromServer,
  addContactToServer,
  refreshUserAction,
} from "./redux/actions";

export default function App() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const dispatch = useDispatch();
  const user = useSelector((store) => {
    return store.userReducer;
  });
  const contacts = useSelector((store) => {
    return store.contactReducer;
  });
  const filter = useSelector((store) => {
    return store.filterReducer;
  });
  const navigate = useNavigate();

  function handleChange(evt) {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;

      case "tel":
        setNumber(evt.target.value);
        break;

      default:
        break;
    }
  }

  function handleAddContact() {
    if (
      contacts[0].find((contact) => {
        return contact.name === name;
      })
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        name: name,
        phone: number,
      };
      dispatch(addContactToServer(newContact));
    }
  }

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
    dispatch(getContactsFromServer());
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
