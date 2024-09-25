import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
 import MainPage from './pages/mainPage.jsx'
 import GenerationPage from './pages/generationPage.jsx'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <div>page not found 404</div>,
  },
  {
    path: '/generation',
    element: <GenerationPage />,
  }
 ]);
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
   <RouterProvider router={router}/>
  </StrictMode>,
)
