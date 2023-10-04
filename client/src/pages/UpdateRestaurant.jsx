import { useState } from 'react';
import RestaurantForm from '../components/ReastaurantForm';
import RestaurantNav from '../components/RestaurantNav';

function UpdateRestaurant(){

    const [updateSuccess, setUpdateSuccess] = useState(null);

    return(
        <div className="update-restaurant">
            <RestaurantNav />
            {updateSuccess === null && <h3>Update restaurant informations: </h3>}
            {updateSuccess === null ? <RestaurantForm onUpdate={(isSuccess) => {setUpdateSuccess(isSuccess)}}/> : updateSuccess === true  ? <h3>The updates was successfull!</h3> : <h3>Try again! Something went wrong!</h3>}

        </div>
    )
}

export default UpdateRestaurant;
