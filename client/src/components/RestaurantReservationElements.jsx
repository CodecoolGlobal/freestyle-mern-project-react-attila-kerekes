import Proptypes from "prop-types";

function RestaurantReservationElements({customerData}){
    return(
        <div className="reservation-cards">
            <p>Customer name: {customerData.customer.firstName} {customerData.customer.lastName}</p>
            <p>Email address: {customerData.customer.email}</p>
            <p>Phone number: +{customerData.customer.phoneNumber}</p>
            <p>Number of guests: {customerData.customer.numberOfGuests}</p>
            <p>Table id: {customerData.tableId}</p>
        </div>
    )
}

RestaurantReservationElements.propTypes = {
    customerData: Proptypes.object
}

export default RestaurantReservationElements;