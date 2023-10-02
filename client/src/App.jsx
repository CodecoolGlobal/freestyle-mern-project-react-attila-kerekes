import { useState } from 'react'
import './App.css'
import {useRoutes} from 'react-router-dom'

function App() {

  const routes = useRoutes([
    {
      element: <h1>Hello</h1>,
      path:'/hello'
    }
  ])

  return routes;
}

export default App
