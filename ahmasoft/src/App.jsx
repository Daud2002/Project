import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Suspense, lazy } from 'react'
const Navbar = lazy(() => import('./Components/Fixcomponents/Navbar/Navbar.jsx'))
const Footer =lazy(()=>import('./Components/Fixcomponents/Footer/Footer.jsx'))

function App() {

  return (
    <>
      <div className='flex flex-col'>
        <Suspense>
          <Navbar />
        </Suspense>
        <Outlet />
        <Suspense>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

export default App
