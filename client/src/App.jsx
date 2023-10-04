import './App.css'
import { useRoutes } from 'react-router-dom'
import CustomerMain from './component/CustomerMain';
import About from './component/About';
import Contact from './component/Contact';
import CustomerFindRestaurant from './component/customer_components/CustomerFindRestaurant';
import CustomerEditor from './component/customer_components/CustomerEditor';
import CustomerReservations from './component/customer_components/CustomerReservations';

function App() {

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
  ])

  return routes;
}

export default App
