import React from "react";
import Navbar from "./Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Contacts from "./Contacts";
import Products from "./products";
import ContactForm from "./ContactFrom";
import AddUser from "../src/users/AddUser";
import Report from "./report";
import EditUser from "../src/users/EditUser";
import User from "../src/users/User";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/Contacts" component={Contacts} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/ContactForm" component={ContactForm} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/Report" component={Report} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
