import React from "react";
import { Link } from "react-router-dom";

function CustomerButtons() {

  return (
      <nav className="CustomerSidebar">
        <ul>
          <li>
            <button><Link to="/customer/editor">Edit my details</Link></button>
          </li>
          <li>
            <button><Link to="/customer/restaurants">Select restaurant</Link></button>
          </li>
          <li>
            <button><Link to="/customer/reservations">My reservations</Link></button>
          </li>
        </ul>
      </nav>
  )
}

export default CustomerButtons;
