import React from 'react'
import { Link } from 'react-router-dom'
import { showuserdata } from '../Services/Allapi'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function Login() {

  
    const [check, setcheck] = useState([])




    const [data, setdata] = useState({

        email: "",
        pass: ""
    })


    useEffect(() => {

        handlecheck()

    }, [])

    const navigate = useNavigate()

    const handlecheck = async () => {

        const res = await showuserdata()
        setcheck(res.data)


    }


   const handlesubmit = (e) => {

        e.preventDefault()




        const finduser = check.find((item) => (

            item.email === data.email && item.pass === data.pass
        ))



        const username =

            check.find((items) => {

                if (items.email === data.email) {

                    return items.uname


                }
            })


        if (finduser) {

            toast.success(`LOGIN SUCCESS WELCOME ${username.uname}`)

            setTimeout(() => {

                navigate('/dash')


            }, 1500)


        } else {

            toast.error("INVAILD USERNAME OR PASSWORD")
        }



    }

    const getdata = (e) => {

        const { name, value } = e.target

        if (name == "gmail") {

            setdata({ ...data, email: value })

        }

        if (name == "pswd") {

            setdata({ ...data, pass: value })
        }


    }





    return (


        <>

            <div className='w-100  d-flex justify-content-center align-items-center Login' style={{ height: '100vh' }}>


                <div className='login-form p-5'>

                    <h1 className='text-white mb-2'>Login</h1>



                    <form className='mt-2' onSubmit={(e) => { handlesubmit(e) }}>


                        <div className="mb-3">

                            <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
                            <input name='gmail' autoComplete='off' onChange={(e) => { getdata(e) }} type="email" className="form-control login-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                        </div>


                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label text-white">Password</label>
                            <input autoComplete='off' type="password" onChange={(e) => { getdata(e) }} name='pswd' className="form-control login-input" id="exampleInputPassword1" />
                        </div>



                        <button type="submit" className="btn create w-100">Login</button>

                        <Link style={{ textDecoration: 'none' }} to={'/signup'} className='text-center'>Create an Account</Link>



                    </form>


                </div>


            </div>




        </>


    )
}

export default Login
