import { axiosPrivate, axiosPublic } from "./axios";

let token = localStorage.getItem("token");

export const signUp = async (data) => {
    let res = await axiosPublic.post("/user/register", data);
    return res.data;
};

export const login = async (data) => {
    let res = await axiosPublic.post("/user/login", data);
    return res.data;
}

export const apply = async (data) => {
    let res = await axiosPrivate.post("/user/apply", data, {
        headers: {
            Authorization: token
        }
    });
    return res.data;
}

//list of applied jobs
export const appliedJobs = async (userId) => {
    let res = await axiosPrivate.post("/user/apliedjoblist", userId, {
        headers: {
            Authorization: token
        }
    });
    return res.data;
}