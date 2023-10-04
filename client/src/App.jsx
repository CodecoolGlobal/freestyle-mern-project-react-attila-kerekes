import './App.css'
import { useRoutes } from 'react-router-dom'
import CustomerMain from './component/CustomerMain';
import About from './component/About';
import Contact from './component/Contact';
import CustomerFindRestaurant from './component/customer_components/CustomerFindRestaurant';
import CustomerEditor from './component/customer_components/CustomerEditor';
import CustomerReservations from './component/customer_components/CustomerReservations';
import MyRestaurant from './pages/MyRestaurant'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import UpdateRestaurant from './pages/UpdateRestaurant'
import { useState } from 'react';

function App() {
  const [userId, setUserId] = useState('');

  const logInUser = async (id) => {
    setUserId(id);
  }

  const routes = useRoutes([
      {
      element: <CustomerMain />,
      path: '/customer',
      children: [
        {
          element: <About />,
          path: 'about'
        },
        {
          element: <Contact />,
          path: 'contact'
        },
        {
          element: <CustomerEditor />,
          path: 'editor'
        },
        {
          element: <CustomerFindRestaurant />,
          path: 'restaurants'
        },
        {
          element: <CustomerReservations />,
          path: 'reservations'
        },
        {
          element: <h1>Hello</h1>,
          path: 'hello'
        },
      ]
    },
    {
      element: <Login onSubmit={logInUser}/>,
      path: '/'
    },
    {
      element: <Register onSubmit={logInUser}/>,
      path: '/register'
    },
    {
      element: <MyRestaurant/>,
      path: '/restaurant/myrestaurant/:id',
    },
    {
      element: <UpdateRestaurant />,
      path: '/restaurant/update/:id'
    }
  ])

  return routes;
}

export default App
