function ReservationElement({reservation}){

    return (
        <div>
            <p>Guests: {reservation.numberOfGuests}</p>
            <p>Restaurant: {reservation.restaurantId}</p>
        </div>
    )
}

export default ReservationElement;