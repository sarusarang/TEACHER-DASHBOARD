import React from 'react'
import Createaccount from '../Components/Createaccount'
import { Toaster } from 'sonner'

function Signup() {
  return (
    <>

      <Createaccount />
      <Toaster richColors  position="top-center"></Toaster>

    </>


  )
}

export default Signup