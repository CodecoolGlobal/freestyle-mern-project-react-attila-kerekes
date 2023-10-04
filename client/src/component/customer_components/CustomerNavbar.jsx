import React from "react";
import { Link } from "react-router-dom";

function CustomerNavbar() {

  return (
    <div>
      <nav>
        <button><Link to="/customer/hello">REST(aurant)api</Link></button>
        <button><Link to="/customer/about">About</Link></button>
        <button><Link to="/customer/contact">Contact</Link></button>
      </nav>
    </div>
  )
}

export default CustomerNavbar;

