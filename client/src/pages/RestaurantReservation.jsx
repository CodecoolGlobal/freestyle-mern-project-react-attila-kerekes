import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantNav from "../components/RestaurantNav";

function RestaurantReservation(){
    const [reservations, setReservations] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchResorvation = async () => {
            const response = await fetch(`/api/restaurant/reservations/${id}`);
            const reserv = await response.json();
            setReservations(reserv);
        }
        fetchResorvation();
    }, [])

    return(
        <div className="restaurant-reservation">
            <RestaurantNav />
            {reservations !== null && <h3>Resorvations: </h3>}
            {reservations === null ? <p>Loading...</p> : reservations.length ? reservations.map(res => <p key={res._id}>{res.customerId}</p>) : <p>The restaurant dont have any resorvations!</p>}
        </div>
    )
}

export default RestaurantReservation;