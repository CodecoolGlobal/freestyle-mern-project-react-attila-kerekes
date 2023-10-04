import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import RestaurantNav from "../components/RestaurantNav";


function RestaurantMain(){
    const [restaurant, setRestaurant] = useState(null);
    const [resorvation, setResorvation] = useState(null);
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
            {resorvation === null ? <h3>Loading ...</h3> : resorvation.length === 0 ? <h3>The restaurant don&apos;t have any resorvation</h3> : <h3>Resorvations: </h3>}
            {/*Show resorvations */}
        </div>
    )
}

export default RestaurantMain;