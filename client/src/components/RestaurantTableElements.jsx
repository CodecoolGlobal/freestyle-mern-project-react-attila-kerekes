function RestaurantTableElements({table}){

    return (
        <tr>
            <td>{table.id}</td>
            <td>{table.seats}</td>
            <td>{table.available ? <p>Available</p> : <p style={{color: 'red'}}>Not available</p>}</td>
        </tr>
    )
}

export default RestaurantTableElements