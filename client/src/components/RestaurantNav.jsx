import { Link, useParams } from "react-router-dom";

function RestaurantNav(){
    const {id} = useParams();

    return (
        <nav>
            <ul>
                <li><Link to={`/restaurant/${id}`}>My restaurant</Link></li>
                <li><Link>Resorvations</Link></li>
                <li><Link to={`/restaurant/update/${id}`}>Update restaurant data</Link></li>
            </ul>
        </nav>
    )
}

export default RestaurantNav;