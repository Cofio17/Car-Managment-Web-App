import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Car from './CarComponent.jsx'
import ErrorPage from './ErrorPage.jsx'
import HomePage from './Pages/HomePage.jsx'
import ReservationForm from './Components/ReservationForm.jsx'
import { SearchProvider } from './Contexts/SearchContext.jsx'
//router imported
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Instancing router
const router = createBrowserRouter([

  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cars?",
    element: <App />
  },
  {
    path: '/car/:carId',
    element: <Car />,
    errorElement: <ErrorPage />
  },
  {
    path: '/reservation',
    element: <ReservationForm />
  }


]);
createRoot(document.getElementById('root')).render(


  <StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </StrictMode>,
)
