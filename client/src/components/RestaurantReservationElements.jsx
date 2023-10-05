function RestaurantReservationElements({customerData}){

    return(
        <div className="reservation-cards">
            <p>Customer name: {customerData.firstName} {customerData.lastName}</p>
            <p>Email address: {customerData.email}</p>
            <p>Phone number: {customerData.phoneNumber}</p>
            <p>Number of guests: {customerData.numberOfGuests}</p>
            <p>Table id: {customerData.tableId}</p>
        </div>
    )
}

export default RestaurantReservationElements;