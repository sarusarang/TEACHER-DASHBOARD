import React from 'react'
import './bootstrap.min.css'
import Studenttable from '../Components/Studenttable'
import Navbar from '../Components/Navbar'
import { Toaster } from 'sonner'



function Dash() {
  return (

    <>
      <Navbar />
      <Studenttable />
      <Toaster richColors position="top-center"></Toaster>



    </>

  )
}

export default Dash