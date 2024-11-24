import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Car from './CarComponent.jsx'
import ErrorPage from './ErrorPage.jsx'
//importovan router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//router dodeljen promeljivoj router
const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/car/:carId',
    element: <Car />,
    errorElement: <ErrorPage />
  },

]);
createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
