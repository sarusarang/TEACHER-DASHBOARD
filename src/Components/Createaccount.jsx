import React from 'react'
import { Link } from 'react-router-dom'
import { getuserdata } from '../Services/Allapi'
import { useState, } from 'react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'


function Createaccount() {

    const navigate = useNavigate()


    const [data, setdata] = useState({

        uname: "", email: "", pass: ""

    })

    const [unamet, setunamet] = useState(false)
    const [emailt, setemailt] = useState(false)
    const [passt, setpasst] = useState(false)


    const senddata = async () => {

        const { uname, email, pass } = data


        if (!uname) {

            setunamet(true)


        }
        if (!pass) {

            setpasst(true)
        }

        if (!email) {

            setemailt(true)



        }
        else if (data.email == data.pass) {

            toast.warning("USER NAME AND PASSWORD SHOULD BE NOT SAME....!!!! ")

        }

        else {

            if (!uname) {

                setunamet(true)


            }
            if (!pass) {

                setpasst(true)
            }
            else {




                const res = await getuserdata(data)
                if (res.status >= 200 && res.status <= 300) {

                    toast.success("ACCOUNT CREATED SUCCESSFULLY")

                    setTimeout(() => {

                        navigate("/")

                    }, 2000)

                }

            }
        }

    }


    const getdata = (e) => {

        const { name, value } = e.target

        if (name == "uname") {

            setdata({ ...data, uname: value })

        }

        if (name == "email") {

            setdata({ ...data, email: value })
        }

        if (name == "pass") {

            setdata({ ...data, pass: value })
        }

    }

    const handlesubmit = (e) => {

        e.preventDefault()

    }




    return (
        <>

            <div className='w-100  d-flex justify-content-center align-items-center create-account' style={{ height: '100vh' }}>




                <div className='p-5 signup-form' >

                    <h1 className='text-white mb-2'>Create Account</h1>



                    <form className='mt-2' onSubmit={(e) => { handlesubmit(e) }}>


                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label text-white">Name</label>
                            <input autoComplete='off' name='uname' onChange={(e) => { getdata(e) }} type="text" className="form-control signup-input" id="exampleInputEmail1" placeholder='Enter your Full name' aria-describedby="emailHelp" />

                            {
                                unamet &&

                                <div id="emailHelp" className="form-text text-danger">Empty Feild</div>

                            }

                        </div>


                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label text-white">Email</label>
                            <input autoComplete='off' name='email' type="email" onChange={(e) => { getdata(e) }} placeholder='Enter Your Email' className="form-control signup-input" id="exampleInputPassword1" />

                            {
                                emailt &&

                                <div id="emailHelp" className="form-text text-danger">Empty Feild</div>

                            }


                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label text-white">Password</label>
                            <input autoComplete='off' name='pass' type="password" onChange={(e) => { getdata(e) }} className="form-control signup-input" id="exampleInputPassword1" placeholder='Enter your Password' />


                            {
                                passt &&

                                <div id="emailHelp" className="form-text text-danger">Empty Feild</div>

                            }

                        </div>



                        <button type="submit" onClick={senddata} className="btn w-100 create">SignUp</button>

                        <Link style={{ textDecoration: 'none' }} to={'/'} className='text-center'>Login</Link>



                    </form>


                </div>


            </div>
        </>
    )
}

export default Createaccount