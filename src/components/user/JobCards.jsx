import React, { useEffect, useState } from 'react'
import { getAllJobs } from '../../networkcalls/job';
import Strings from '../../utils/Strings';
import { apply } from '../../networkcalls/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobCards = () => {

    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [experience, setExperience] = useState("");
    let userId = localStorage.getItem("userId")

    const handleApplyJob = (jobInfo) => {
        if (jobInfo.status === "Apply") {
            let data = { userId, jobId: jobInfo._id }
            apply(data).then((result) => {
                if (result.err == 200) {
                    toast.success(result.msg);
                }
            });
        } else {
            toast.warning("You have Already applied for job");
        }
    }

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    useEffect(() => {
        getAllJobs({ userId: userId }).then((result) => {
            if (result.err === 200) {
                setJobs(result.data);
            }
        })
    }, []);

    const handleClear = () => {
        setExperience("");
        setLocation("");
        setTitle("");
        setSelectedJob(null)
        getAllJobs({ userId: userId }).then((result) => {
            if (result.err === 200) {
                setJobs(result.data);
            }
        })
    }

    const handleSearch = () => {
        let searchCriteria = { userId, title, location, experience }
        getAllJobs(searchCriteria).then((result) => {
            if (result.err === 200) {
                setJobs(result.data);

            } else {
                setJobs([]);
            }
        })
    }

    return (
        <div>
            <h4 className='text-center mt-2'>Get your desired job!</h4>
            <div className="container mt-4 bg-white shadow">
                <div className="row p-3">
                    <div className="col-lg-4">
                        <input type="name" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Search by Title' className='form-control' />
                    </div>
                    <div className="col-lg-4">
                        <input type="name" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Search by Location' className='form-control' />
                    </div>
                    <div className="col-lg-4">
                        <input type="name" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder='Search by Experience' className='form-control' />
                    </div>
                    <div className="col-lg-12 text-center mt-3">
                        <button className='btn btn-primary me-2' onClick={handleSearch}>Search</button>
                        <button className='btn btn-danger ' onClick={handleClear}>Clear</button>
                    </div>
                </div>
            </div>

            {
                jobs?.length === 0 ? (<>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 p-5 mt-4 card shadow text-center" >
                                No Jobs found
                            </div>
                        </div>
                    </div>
                </>) : (<>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                    {
                                        jobs?.map((data) => {
                                            return <div>
                                                <div class="card mb-3" style={{ width: "100%" }} onClick={() => handleJobClick(data)}>
                                                    <div class="card-body">
                                                        <div className="d-flex">
                                                            <div>
                                                                <img src={Strings.UPLOADS + data.image} className='img-fluid me-3' style={{ width: "70px", height: "70px" }} alt="" />
                                                            </div>
                                                            <div>
                                                                <h5 class="card-title">{data.title}</h5>
                                                                <h5 class="card-title">{data.companyName}</h5>
                                                                <h6 class="card-subtitle mb-2 text-muted">{data.location}</h6>
                                                            </div>
                                                        </div>
                                                        <p class="card-text"><b> Required Exprerience in years - {data.experience}</b></p>
                                                        <p class="card-text">{data.description.slice(0, 30)}...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6">
                                {
                                    selectedJob === null ? (
                                        <>
                                            <img src="https://img.freepik.com/free-vector/flat-employment-agency-search-new-employees-hire_88138-802.jpg" className='img-fluid' alt="" />
                                        </>
                                    ) : (<>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div>
                                                        <img src={Strings.UPLOADS + selectedJob.image} className='img-fluid me-3' style={{ height: "100px", width: "100px" }} alt="" />
                                                    </div>
                                                    <div>
                                                        <h5 className="card-title">{selectedJob.title}</h5>
                                                        <h5 className="card-title">{selectedJob.companyName}</h5>
                                                        <h6 className="card-subtitle mb-2 text-muted">{selectedJob.location}</h6>
                                                        <p className="card-text"><b> Required Experience in years - {selectedJob.experience}</b></p>
                                                    </div>
                                                </div>

                                                <p className="card-text">{selectedJob.description}</p>
                                                <button className='btn btn-primary' onClick={() => handleApplyJob(selectedJob)}>{selectedJob.status}</button>
                                            </div>
                                        </div>

                                    </>)
                                }

                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                </>)
            }
        </div>
    )
}

export default JobCards;
