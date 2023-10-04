function RestaurantTableElements({table}){

    return (
        <tr>
            <td>{table.id}</td>
            <td>{table.seets}</td>
            <td>{table.avaible ? <p>Avaible</p> : <p style={{color: 'red'}}>Not avaible</p>}</td>
        </tr>
    )
}

export default RestaurantTableElements