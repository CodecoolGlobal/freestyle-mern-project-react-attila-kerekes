import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantNav from "../components/RestaurantNav";
import RestaurantReservationElements from "../components/RestaurantReservationElements";

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

    console.log(reservations);
    return(
        <div className="restaurant-reservation">
            <RestaurantNav />
            {reservations !== null && <h3>Resorvations: </h3>}
            {reservations === null ? <p>Loading...</p> : reservations.length ? reservations.map(res => <RestaurantReservationElements key={Number(res.tableId)} customerData={res}/>) : <p>The restaurant dont have any resorvations!</p>}
        </div>
    )
}

export default RestaurantReservation;