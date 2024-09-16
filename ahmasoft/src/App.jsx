import { useState } from 'react'
import './App.css'
import Navbar from './Components/Fixcomponents/Navbar/Navbar.jsx'
import Footer from './Components/Fixcomponents/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
