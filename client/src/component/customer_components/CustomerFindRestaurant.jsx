import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CustomerFindRestaurant() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/restaurants');
      const data = await response.json();
      setRestaurants(data);
    }
    fetchData();
  }, []);

  return (

    <div>
      <h1>Restaurant List</h1>
      {restaurants.map((restaurant) => (
        <div key={restaurant._id}>
          <button><Link to={`/customer/${id}?rest=${_id}`}>Reserve a table!</Link></button>
          <h2>{restaurant.restaurantName}</h2>
          <h5>Cuisine: {restaurant.cuisine}</h5>
          <h5>City: {restaurant.city}</h5>
          <h5>Opening hours: {restaurant.opening} - {restaurant.closing}</h5>
          <h5>E-mail: {restaurant.email}</h5>
          <h5>Phone: {restaurant.phoneNumber}</h5>
        </div>
      ))}
    </div>
  )
}

export default CustomerFindRestaurant;