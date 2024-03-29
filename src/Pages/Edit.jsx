import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { showdata } from '../Services/Allapi'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { updatedata } from '../Services/Allapi'


function Edit() {

    const [showstdata, setshowdata] = useState([])
    const [status,setstatus]=useState({})

    const [data, setdata] = useState({

        stname: "", age: "", attendance: "", class: "", phone: ""

    })

    const { id } = useParams()

    useEffect(() => {

        show()

    }, [status])


    const show = async () => {

        const resshow = await showdata()

        setshowdata(resshow.data)


    }

    const userid = showstdata.find(item => item.id === parseInt(id))

    const getdata = (e) => {

        const { name, value } = e.target

        if (name == "name") {

            setdata({ ...data, stname: value })


        }
        if (name == "age") {

            setdata({ ...data, age: value })
        }
        if (name == "atten") {

            setdata({ ...data, attendance: value })

        }
        if (name == "class") {

            setdata({ ...data, class: value })
        }
        if (name == "number") {

            setdata({ ...data, phone: value })
        }


    }

    const handelsubmit = (e) => {

        e.preventDefault()

    }

    const send = async () => {


        if (!data.stname || !data.age || !data.attendance || !data.class || !data.phone) {

            alert("EMPTY FEILD")
        }

        else {

            const resupdate = await updatedata(id, data)

            if (resupdate.status >= 200 && resupdate.status < 300) {

                
                setstatus(resupdate.data)
                alert("DATA UPDATED")
                
            }
            
            else {

                alert("DATA UPDATE FAILED")
            }


        }
    }


    return (
        <>


            <div className='w-100 p-5' style={{ height: '100vh' }}>

                <Container className='mt-5'>

                    <Row>

                        <Col md='7'>

                            <h1>CURRENT STUDENT DATA</h1>

                            <table class="table table-hover" >

                                <thead>

                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Attendance</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Number</th>
                                    </tr>

                                </thead>


                                {

                                    userid ?

                                        <tbody>

                                            <tr class="table-dark">

                                                <th scope="row">{userid?.stname}</th>
                                                <td>{userid?.age}</td>
                                                <td>{userid?.attendance}</td>
                                                <td>{userid?.class}</td>
                                                <td>{userid?.phone}</td>

                                            </tr>

                                            <br />

                                        </tbody>
                                        :
                                        <h1>NO DATA FOUND</h1>
                                }

                            </table>

                        </Col>


                        <Col md='5'>

                            <h1>EDIT STUDENT DATA</h1>

                            <form onSubmit={(e) => { handelsubmit(e) }} >

                                <div>

                                    <label for="exampleInputEmail1" class="form-label">Name</label>

                                    <input type="text" onChange={(e) => { getdata(e) }} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Student Name" />

                                </div>

                                <div>

                                    <label for="exampleInputEmail1" class="form-label mt-4">Age</label>

                                    <input onChange={(e) => { getdata(e) }} type="number" name='age' maxLength="3" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Age" />

                                </div>


                                <div>

                                    <label for="exampleInputEmail1" class="form-label mt-4">Attendance%</label>

                                    <input onChange={(e) => { getdata(e) }} type="number" name='atten' maxLength="3" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Age" />

                                </div>


                                <div>

                                    <label for="exampleInputEmail1" class="form-label mt-4">Class</label>

                                    <input onChange={(e) => { getdata(e) }} type="text" name='class' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Age" />

                                </div>


                                <div>

                                    <label for="exampleInputEmail1" class="form-label mt-4">Phone Number</label>

                                    <input onChange={(e) => { getdata(e) }} type="tel" name='number' maxLength="10" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Age" />


                                    <input type="submit" onClick={() => { send() }} className='btn' />

                                </div>





                            </form>

                        </Col>


                    </Row>

                </Container>

            </div>





        </>
    )
}

export default Edit