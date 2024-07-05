import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'


const Main = () => {
  return (
    <div>
    <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Main
