import { axiosPrivate, axiosPublic } from "./axios";

let token = localStorage.getItem("token");

export const createJob = async (data) => {
    let res = await axiosPrivate.post("/job/create", data, {
        headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
        }
    });
    return res.data;
}

// userId, location, experience, title
export const getAllJobs = async (data) => {
    let res = await axiosPrivate.post("/job/getalljobs", data, {
        headers: {
            Authorization: token
        }
    });
    return res.data;
}



// get single job by passing jobId 
export const getJobById = async (jobId) => {
    let res = await axiosPrivate.post("/job/getjob", jobId, {
        headers: {
            Authorization: token
        }
    });
    return res.data;
}

// list of users applied for same job (single job)
export const getUsersOfSingleJob = async (jobId) => {
    let res = await axiosPrivate.post("/job/getusers", jobId, {
        headers: {
            Authorization: token
        }
    });
    return res.data;
}