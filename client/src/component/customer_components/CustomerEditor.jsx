import { useEffect, useState } from 'react';
import CustomerForm from './CustomerForm';
import { useParams } from 'react-router-dom';

function CustomerEditor(){
    const [customerInfo, setCustomerInfo] = useState({});
    const { id } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`/api/customer/${id}`);
        const customerData = await response.json();
        setCustomerInfo(customerData);
      }
      fetchData();
    }, [])

    const [updateSuccess, setUpdateSuccess] = useState(null);

    return(
        <div className="updateCustomer">
            {updateSuccess === null && <h3>Update customer informations: </h3>}
            {updateSuccess === null ? <CustomerForm onUpdate={(isSuccess) => {setUpdateSuccess(isSuccess)}}/> : updateSuccess === true  ? <h3>The updates was successfull!</h3> : <h3>Try again! Something went wrong!</h3>}

        </div>
    )
}

export default CustomerEditor;
