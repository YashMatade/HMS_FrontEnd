import React from 'react'
import CreateJobForm from './CreateJobForm';
import ListOfJobs from './ListOfJobs';
import { useNavigate } from 'react-router-dom';


const EmployerDashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="mt-4 mb-4 container d-flex justify-content-between align-items-center">
                <div className="me-4">
                    <h4 className='mb-0'>Admin Dashboard</h4>
                </div>
                <div>
                    <button className='btn btn-outline-danger' onClick={() => navigate("/")}>Logout</button>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <CreateJobForm />
                    </div>
                    <div className="col-lg-6">
                        <ListOfJobs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerDashboard;
