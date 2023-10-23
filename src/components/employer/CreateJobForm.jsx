import React, { useEffect, useState } from 'react'
import { createJob, getAllJobs } from '../../networkcalls/job';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateJobForm = () => {
    const [title, setTitle] = useState();
    const [description, setDescriptiion] = useState();
    const [image, setImage] = useState();
    const [location, setLocation] = useState();
    const [experience, setexperience] = useState();
    const [companyName, setCompanyName] = useState();

    const handleJob = (e) => {
        e.preventDefault();
        console.log({ experience })
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }
        formData.append('location', location);
        formData.append('companyName', companyName);
        formData.append('experience', experience);
        createJob(formData).then((result) => {
            console.log(result);
            if (result.err === 200) {
                toast.success(result.msg);
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }
        });
    }

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    }
    return (
        <div>
            <div className="card shadow">
                <h4 className='mt-4 ms-4'>Create New Job Post</h4>
                <form action="" className='m-4'>
                    <input type="text" placeholder='Enter title of Job' className='form-control mb-4' onChange={(e) => { setTitle(e.target.value) }} />
                    <textarea type="text" placeholder='Enter description of Job' className='form-control mb-4' onChange={(e) => { setDescriptiion(e.target.value) }} />
                    <input type="file" className='form-control mb-4' onChange={handleFileChange} />
                    <input type="text" placeholder='Enter experience of job' className='form-control mb-4' onChange={(e) => { setexperience(e.target.value) }} />
                    <input type="text" placeholder='Enter Company Name' className='form-control mb-4' onChange={(e) => { setCompanyName(e.target.value) }} />
                    <input type="text" placeholder='Enter Location Required for job' className='form-control mb-4' onChange={(e) => { setLocation(e.target.value) }} />
                    <button className='btn btn-primary w-100' onClick={handleJob}>Post Job</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CreateJobForm;