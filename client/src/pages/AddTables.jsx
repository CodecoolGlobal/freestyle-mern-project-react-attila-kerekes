import { useState } from "react";
import RestaurantNav from "../components/RestaurantNav";
import { useParams } from "react-router-dom";
import CustomerNavbar from '../component/customer_components/CustomerNavbar';


function AddTables(){
    const [table, setTable] = useState({available: true});
    const {id} = useParams();

    async function handleSubmit(event){
        event.preventDefault();
        const post = await fetch(`/api/table/${id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(table)
        });

        const response = await post.json();
        if(response.status === 'added'){
            setTable({available: true});
        }
    }

    return(
        <div className="add-table restaurant-display">
            <CustomerNavbar />
            <RestaurantNav />
            <form onSubmit={handleSubmit}>
                <label>Table id: </label>
                <input type="number" value={table.id} required onChange={(event) => {setTable(prev => ({...prev, id: event.target.value}))}}/>
                <br />
                <label>Seets count: </label>
                <input type="number" required value={table.seats} onChange={(event) => {setTable(prev => ({...prev, seats: event.target.value}))}}/>
                <br />
                <button>Add table</button>
            </form>
        </div>
    )
}

export default AddTables;