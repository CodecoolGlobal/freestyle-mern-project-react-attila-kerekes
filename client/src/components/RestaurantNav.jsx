import { Link } from "react-router-dom";

function RestaurantNav(){

    return (
        <nav>
            <ul>
                <li><Link>Resorvations</Link></li>
                <li><Link>Update restaurant data</Link></li>
            </ul>
        </nav>
    )
}

export default RestaurantNav;