import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Home from './Pages/Home/Home.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import ProjectDetails from './Pages/Projects/ProjectDetails.jsx';
import DataScrapping from './Pages/Services/DataScrapping/DataScrapping.jsx'
import Dataautomation from './Pages/Services/Data Automation/Dataautomation.jsx'
import Datavisualization from './Pages/Services/Data Visualization/Datavisualization.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/projects/:id',
        element: <ProjectDetails />
      },
      {
        path: '/:id',
        element: <ProjectDetails />
      },
      {
        path: '/datascraping',
        element: <DataScrapping />
      },
      {
        path: '/automation',
        element: <Dataautomation />
      },
      {
        path: '/datavisualization',
        element: <Datavisualization />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  <ToastContainer />
  </StrictMode>
)
