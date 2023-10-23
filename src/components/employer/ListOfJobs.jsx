import React, { useEffect, useState } from 'react'
import { getAllJobs } from '../../networkcalls/job';
import Strings from '../../utils/Strings';

const ListOfJobs = () => {
    const [jobs, setJobs] = useState();

    useEffect(() => {
        getAllJobs().then((result) => {
            if (result.err === 200) {
                setJobs(result.data);
            }
        })
    }, [])
    return (
        <div className='card shadow'>
            <h4 className='ms-4 mt-4 ms-4 mb-4' >List Of All Jobs</h4>
            <div className="container ">
                <div className="row">
                    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        {
                            jobs?.map((data) => {
                                return <>
                                    <div class="card mb-3" style={{ width: "100%" }}>
                                        <div class="card-body">
                                            <div className="d-flex">
                                                <div>
                                                    <img src={Strings.UPLOADS + data.image} className='img-fuild me-3' alt="" style={{ width: "100px", height: "100px" }} />
                                                </div>
                                                <div>
                                                    <h5 class="card-title">{data.title}</h5>
                                                    <h5 class="card-title">{data.companyName}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">{data.location}</h6>
                                                    <h6 class="card-subtitle mb-2 text-muted">Experience {data.experience}</h6>
                                                </div>
                                            </div>
                                            <p class="card-text">{data.description}</p>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListOfJobs;
