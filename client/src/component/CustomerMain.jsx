import { useEffect, useState } from "react";

import { Outlet, useParams } from "react-router-dom";

import CustomerNavbar from "./customer_components/CustomerNavbar";
import CustomerButtons from "./customer_components/CustomerButtons";


function CustomerMain() {
  const [, setCustomerInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/customer/${id}`);
      const customerData = await response.json();
      setCustomerInfo(customerData);
    }
    fetchData();
  }, [id])

  return (
    <div className="CustomerMain">
      <CustomerNavbar id={id} />
      <div className="CustomerDisplayBelow">
        <CustomerButtons id={id} />
        <div className="CustomerContent">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default CustomerMain;