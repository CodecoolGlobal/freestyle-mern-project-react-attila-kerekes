import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import RestaurantNav from "../components/RestaurantNav";
import RestaurantTableElements from '../components/RestaurantTableElements';
import CustomerNavbar from '../component/customer_components/CustomerNavbar';


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
        <div className="restaurantMain restaurant-display">
            <CustomerNavbar />
            <RestaurantNav />
            {restaurant && 
                <div className="my-restaurant">
                    <p>Restaurant name: {restaurant.restaurantName}</p>
                    <p>Opening: {restaurant.opening}</p>
                    <p>Closing: {restaurant.closing}</p>
                    <p>Email address: {restaurant.email}</p>
                    <p>Phone number: {restaurant.phoneNumber}</p>
                    <button><Link to={`/restaurant/update/${id}`}>Update informations</Link></button>
                    <p>Tables: {restaurant.tables.length ? restaurant.tables.length : 'You don\'t have any tables!'}</p>
                    <table>{restaurant.tables.map(table => <RestaurantTableElements key={table.id} table={table}/>)}</table>
                </div>
            }
        </div>
    )
}

export default RestaurantMain;


/*
    id
    székek
    foglalható
*/