import { Link } from "react-router-dom";
import Proptypes from "prop-types";

function CustomerNavbar({id}) {

  return (
    <nav className="CustomerNavbar">
      <button><Link to={`/`}>Logout</Link></button>
      <button><Link to={`/customer/${id}/about`}>About</Link></button>
      <button><Link to={`/customer/${id}/contact`}>Contact</Link></button>
    </nav>
  )
}

CustomerNavbar.propTypes = {
  id: Proptypes.number
}

export default CustomerNavbar;

