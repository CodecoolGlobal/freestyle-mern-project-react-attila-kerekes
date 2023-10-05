import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import ReservationElement from "./ReservationElement";

function CustomerReservations() {
  const [reservations, setReservations] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/reservations/customer/${id}`);
      const data = await response.json();
      return data.reservations;
    }
    fetchData().then((res) => setReservations(res));
  }, [])

  return (
    <div>
      <h1>Reservations: {reservations.length ? reservations.length : 'You don\'t have any reservations!'}</h1>
      <table>{reservations.map(reservation => <ReservationElement key={reservation._id} reservation={reservation}/>)}</table>
    </div>
  )
}

export default CustomerReservations;
