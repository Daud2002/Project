import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Home from './Pages/Home/Home.jsx'
import Contact from './Pages/Contact/Contact.jsx'



const router = createBrowserRouter([
  {
    path : '/',
    element: <App />,
    children: [
      {
        path : "",
        element : <Home />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : '/contact',
        element : <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
