import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addstudentdata } from '../Services/Allapi';
import { toast } from 'sonner';
import { showdata } from '../Services/Allapi';
import { deletedata } from '../Services/Allapi';
import { Link } from 'react-router-dom';




function Studenttable() {

    const [show, setShow] = useState(false);
    const [handledata, sethandledata] = useState([])
    const [status, setstatus] = useState({})
    const [deletest, setdeletest] = useState({})
    const [stddata, setstddata] = useState({

        stname: "", age: "", attendance: "", class: "", phone: ""

    })

    useEffect(() => {

        showstudentdata()

    }, [status, deletest])



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);






    const handelsave = async () => {

        if (!stddata.stname || !stddata.age || !stddata.attendance || !stddata.class || !stddata.phone) {

            toast.error("EMPTY FEILD")

        }
        else {

            const std = await addstudentdata(stddata)

            if (std.status >= 200 && std.status < 300) {

                toast.success("DATA ADDED SUCCESSFULLY")
                setShow(false)
                setstatus(std.data)

            } else {

                toast.error("ERROR....CANT DELETE DATA....! ")
            }

        }



    }

    const getstddata = (e) => {

        const { name, value } = e.target

        if (name == "sname") {

            setstddata({ ...stddata, stname: value })


        }
        if (name == "age") {

            setstddata({ ...stddata, age: value })


        }

        if (name == "atten") {

            setstddata({ ...stddata, attendance: value })


        }
        if (name == "class") {

            setstddata({ ...stddata, class: value })


        } if (name == "num") {

            setstddata({ ...stddata, phone: value })

        }

    }


    const showstudentdata = async () => {

        const resshow = await showdata()
        sethandledata(resshow.data)

    }

    const handledelete = async (id, name) => {

        const resdele = await deletedata(id)
        if (resdele.status >= 200 && resdele.status < 300) {

            toast.success(`${name}'s DATA DELETED SUCCESSFULLY....`)
            setdeletest(resdele.data)


        }

    }



    return (

        <>

            <div className='container'>

                <h1 className='text-center mt-3 mb-3' style={{ fontWeight: 'bold' }}>STUDENT DATA</h1>

                <div className='d-flex justify-content-between'>

                    <button type="button" onClick={handleShow} className="btn btn-outline-dark">ADD</button>
                    


                </div>


                <div className='w-100 d-flex justify-content-center '>

                    <div style={{ width: '100%' }}>

                        <table className="table table-hover">

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

                                handledata ?

                                    handledata.map(item => (

                                        <tbody>

                                            <tr className="table-dark">

                                                <th scope="row">{item.stname}</th>
                                                <td>{item.age}</td>
                                                <td>{item.attendance}%</td>
                                                <td>{item.class}</td>
                                                <td>{item.phone}</td>

                                                <button onClick={() => { handledelete(item.id, item.stname) }}><i className="fa-solid fa-trash-can" style={{ color: '#f00000' }}></i></button>

                                                <Link to={`/edit/${item.id}`} style={{ textDecoration:'none'}}>

                                                    <button><i className="fa-solid fa-pen-to-square"></i></button>

                                                </Link>

                                            </tr>

                                            <br />

                                        </tbody>

                                    )) :
                                    <h1>NO DATA FOUND</h1>

                            }





                        </table>

                    </div>

                </div>

            </div>


            <Modal show={show} onHide={handleClose} >

                <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title>ADD STUDENT DATA</Modal.Title>
                </Modal.Header>


                <Modal.Body className='bg-dark'>



                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Name</Form.Label>
                            <Form.Control autoComplete='off' onChange={(e) => { getstddata(e) }} type="text" name='sname' placeholder="Enter Students Name" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>AGE</Form.Label>
                            <Form.Control autoComplete='off' onChange={(e) => { getstddata(e) }} name='age' type="number" placeholder="Enter Age" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Attendance %</Form.Label>
                            <Form.Control autoComplete='off' onChange={(e) => { getstddata(e) }} name='atten' type="number" placeholder="%" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Class</Form.Label>
                            <Form.Control autoComplete='off' onChange={(e) => { getstddata(e) }} name='class' type="text" placeholder="Enter Class" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control autoComplete='off' onChange={(e) => { getstddata(e) }} name='num' type="tel" maxLength="10" placeholder="Enter MOB-NUMBER" />

                        </Form.Group>




                    </Form>



                </Modal.Body>


                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handelsave}>
                        Save
                    </Button>
                </Modal.Footer>


            </Modal>

        </>
    )
}

export default Studenttable