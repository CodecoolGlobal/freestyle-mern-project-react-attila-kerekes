import React from "react";

import { BrowserRouter as Router, Route, Outlet } from "react-router-dom";

import CustomerNavbar from "./customer_components/CustomerNavbar";
import CustomerButtonList from "./customer_components/CustomerButtons";
import About from "./About";
import Contact from "./Contact";

function CustomerMain() {

  return (
    <div className="CustomerMain">
      <CustomerNavbar />
      <CustomerButtonList />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default CustomerMain;