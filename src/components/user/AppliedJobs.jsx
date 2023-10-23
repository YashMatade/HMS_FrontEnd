import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import { appliedJobs } from '../../networkcalls/user';
import Strings from '../../utils/Strings';

const AppliedJobs = () => {
    const [jobsList, setJobsList] = useState();
    const userId = localStorage.getItem("userId");
    useEffect(() => {
        appliedJobs({ userId }).then((result) => {
            if (result.err === 200) {
                setJobsList(result.data);
            }
        })
    }, []);

    return (
        <div>
            <Navbar />
            <h4 className='text-center mt-3'>
                Job's Applied
            </h4>
            <div className="container">
                <div className="row">
                    {
                        jobsList?.map((data) => {

                            return <>
                                <div className="col-lg-4">
                                    <div>
                                        <div class="card mb-3" style={{ width: "100%" }}>
                                            <div class="card-body">
                                                <div className="d-flex">
                                                    <div>
                                                        <img src={Strings.UPLOADS + data?.jobId?.image} className='img-fluid me-5' style={{ width: "70px", height: "70px" }} alt="" />
                                                    </div>
                                                    <div>
                                                        <h5 class="card-title">{data.jobId.title}</h5>
                                                        <h6 class="card-subtitle mb-2 text-muted">{data.jobId.location}</h6>
                                                    </div>
                                                </div>
                                                <p class="card-text"><b> Required Exprerience in years - {data.jobId.experience}</b></p>
                                                <p class="card-text">{data.jobId?.description?.slice(0, 30)}...</p>
                                                <button className='btn btn-primary'>Already Applied</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AppliedJobs;