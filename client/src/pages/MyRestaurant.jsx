import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import RestaurantNav from "../components/RestaurantNav";


function RestaurantMain(){
    const [restaurant, setRestaurant] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/restaurant/${id}`);
            const restaurantData = await response.json();
            setRestaurant(restaurantData);
        }
        fetchData();
    }, [])


    console.log(restaurant);

    return(
        <div className="restaurantMain">
            <RestaurantNav />
        </div>
    )
}

export default RestaurantMain;