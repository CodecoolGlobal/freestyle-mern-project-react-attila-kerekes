function ReservationElement({reservation, onDelete}){

    async function deleteReservation(){
        const sendReservation = await fetch(`/api/reservations/${reservation._id}`, {
            method: 'DELETE'
        });

        if(sendReservation.ok){
            onDelete();
        }
    }


    return (
        <div>
            <p>Restaurant: {reservation.restaurant.restaurantName}</p>
            <p>Guests: {reservation.numberOfGuests}</p>
            <p>Email: {reservation.restaurant.email}</p>
            <p>Phone number: +{reservation.restaurant.phoneNumber}</p>
            <button onClick={deleteReservation}>Delete reservation</button>
        </div>
    )
}

export default ReservationElement;