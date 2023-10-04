import { useState } from "react";
import RestaurantNav from "../components/RestaurantNav";
import { useParams } from "react-router-dom";


function AddTables(){
    const [table, setTable] = useState({avaible: true});
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
            setTable({avaible: true});
        }
    }

    return(
        <div className="add-table">
            <RestaurantNav />
            <form onSubmit={handleSubmit}>
                <label>Table id: </label>
                <input type="number" value={table.id} required onChange={(event) => {setTable(prev => ({...prev, id: event.target.value}))}}/>
                <br />
                <label>Seets count: </label>
                <input type="number" required value={table.seets} onChange={(event) => {setTable(prev => ({...prev, seets: event.target.value}))}}/>
                <br />
                <button>Add table</button>
            </form>
        </div>
    )
}

export default AddTables;