import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
    return (

        <>

            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TEACHERS DASHBOARD <i className="fa-solid fa-user-graduate fa-beat-fade" style={{color:'#ffffff'}}></i></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">

                        <ul className="navbar-nav me-auto">

                        </ul>

                        <div className="d-flex">

                           

                            <Link style={{ textDecoration: 'none' }}>

                                <button type="button" className="btn btn-outline-danger">Logout</button>

                            </Link>

                        </div>

                    </div>

                </div>

            </nav>

        </>
    )
}

export default Navbar