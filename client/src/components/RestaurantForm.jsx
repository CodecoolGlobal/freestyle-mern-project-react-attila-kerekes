import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Proptypes from "prop-types";

function RestaurantForm({onUpdate}){
    const [restaurantInfo, setRestaurantInfo] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/restaurant/${id}`);
            const restaurantData = await response.json();
            setRestaurantInfo(restaurantData);
        }
        fetchData();
    }, [id])


    async function handleSubmit(event){
        event.preventDefault();
        const patch = await fetch('/api/restaurant', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(restaurantInfo)
        });

        const response = await patch.json();
        if(response.status === 'updated'){
            onUpdate(true);
        } else{
            onUpdate(false);
        }
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Restaurant Name: </label>
            <input type="text" name="restaurantName" value={restaurantInfo.restaurantName} onChange={(event) => {setRestaurantInfo(prev => ({...prev, restaurantName: event.target.value}))}}/>
            <br />
            <label>Opening: </label>
            <input type="time" name="opening" value={restaurantInfo.opening} onChange={(event) => {setRestaurantInfo(prev => ({...prev, opening: event.target.value}))}}/>
            <br />
            <label>Closing: </label>
            <input type="time" name="closing" value={restaurantInfo.closing} onChange={(event) => {setRestaurantInfo(prev => ({...prev, closing: event.target.value}))}}/>
            <br />
            <label>Email address: </label>
            <input type="email" name="email" value={restaurantInfo.email} onChange={(event) => {setRestaurantInfo(prev => ({...prev, email: event.target.value}))}}/>
            <br />
            <label>Phone number: </label>
            <input type="number" name="phoneNumber" value={Number(restaurantInfo.phoneNumber)}  onChange={(event) => {setRestaurantInfo(prev => ({...prev, phoneNumber: Number(event.target.value)}))}}/>
            <br />
            <button>Update information</button>
        </form>
    )
}

RestaurantForm.propTypes = {
    onUpdate: Proptypes.func
}

export default RestaurantForm;