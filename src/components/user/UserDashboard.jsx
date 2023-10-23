import React, { useState } from 'react'
import Navbar from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JobCards from './JobCards';

const UserDashboard = () => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");

    const [close, setClose] = useState("")

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="card text-center shadow" style={{ backgroundColor: "lightgray", display: close }}>
                    <div className="card-body">
                        <div className="text-end text-danger" style={{ cursor: "pointer" }} onClick={() => setClose("none")} ><b>X</b></div>
                        <h5 className="card-title">Welcome, {firstName} {lastName}!</h5>
                        <p className="card-text pb-4">Thank you for using our platform. :)</p>
                    </div>
                </div>
                <JobCards />
            </div>
            <ToastContainer />
        </div>
    )
}

export default UserDashboard;