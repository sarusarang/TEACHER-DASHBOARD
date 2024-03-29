import React from 'react'
import Login from '../Components/Login'
import { Toaster } from 'sonner'


function Landing() {
  return (


    <>

      <Login />
      <Toaster richColors position="top-center"></Toaster>

    </>


  )
}

export default Landing