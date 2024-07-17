import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'



const router = createBrowserRouter ([
  {
    path: "/",
    element: <HomePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
