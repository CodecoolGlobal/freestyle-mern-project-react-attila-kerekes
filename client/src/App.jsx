import { useState } from 'react'
import './App.css'
import {useRoutes} from 'react-router-dom'
import RestaurantMain from './pages/RestaurantMain'


function App() {

  const routes = useRoutes([
    {
      element: <h1>Hello</h1>,
      path:'/hello'
    },
    {
      element: <RestaurantMain id={'651c167e029b7f8728c00c8d'}/>,
      path: '/restaurant/:id',
    }
  ])

  return routes;
}

export default App
