import { useState } from 'react'
import './App.css'
import {useRoutes} from 'react-router-dom'
import RestaurantMain from './pages/RestaurantMain'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { RegisterForRestaurants } from './pages/RegisterForRestaurants'

function App() {
  const [userId, setUserId] = useState('');

  const logInUser = async (id) => {
    setUserId(id);
  }

  const routes = useRoutes([
    {
      element: <h1>Hello</h1>,
      path:'/hello'
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
      element: <RestaurantMain id={'651c167e029b7f8728c00c8d'}/>,
      path: '/restaurant/:id',
    }
  ])

  return routes;
}

export default App
