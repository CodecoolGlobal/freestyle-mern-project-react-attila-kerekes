import React from "react";

import { BrowserRouter as Router, Route, Outlet } from "react-router-dom";

import CustomerNavbar from "./customer_components/CustomerNavbar";
import CustomerButtons from "./customer_components/CustomerButtons";


function CustomerMain() {

  return (
    <div className="CustomerMain">
      <CustomerNavbar />
      <div className="CustomerDisplayBelow">
        <CustomerButtons />
        <div className="CustomerContent">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default CustomerMain;