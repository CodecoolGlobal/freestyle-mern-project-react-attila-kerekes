import { Link, useParams } from "react-router-dom";

function RestaurantNav(){
    const {id} = useParams();

    return (
        <nav>
            <ul>
                <li><button><Link to={`/restaurant/myrestaurant/${id}`}>My restaurant</Link></button></li>
                <li><button><Link>Resorvations</Link></button></li>
                <li><button><Link to={`/restaurant/update/${id}`}>Update restaurant data</Link></button></li>
            </ul>
        </nav>
    )
}

export default RestaurantNav;