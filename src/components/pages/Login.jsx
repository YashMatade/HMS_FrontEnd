import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../networkcalls/user';
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [emailErr, setEmailErr] = useState();
    const [passwordErr, setPasswordErr] = useState();


    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        let validate = true;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === undefined || email === "") {
            validate = false;
            setEmailErr("Please Enter Email");
        }
        const isValidEmail = emailRegex.test(email);
        if (!isValidEmail) {
            validate = false;
            setEmailErr("Please Enter Valid Email");
        }
        if (password === undefined || password === "") {
            setPasswordErr("Please Ente Valid Password");
            validate = false;
        }
        if (validate) {
            let data = { email, password }
            login(data).then((result) => {
                console.log(result.data)
                if (result.err === 200) {
                    localStorage.setItem("userId", result.data._id);
                    localStorage.setItem("token", result.token)
                    localStorage.setItem("firstName", result.data.firstName);
                    localStorage.setItem("lastName", result.data.lastName);
                    toast.success(result.msg);
                    setTimeout(() => {
                        if (result.data.role === "employee") {
                            navigate("/userdash")

                        } else {
                            navigate("/admindash")
                        }
                    }, 2000);

                } else {
                    toast.error(result.msg);
                }
            })
        }
    }
    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>
                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" placeholder='Email' onChange={(e) => { setEmail(e.target.value); setEmailErr("") }} />
                                                        <span className='text-danger'>{emailErr}</span>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" placeholder='Password' onChange={(e) => { setPassword(e.target.value); setPasswordErr("") }} />
                                                        <span className='text-danger'>{passwordErr}</span>
                                                    </div>
                                                </div>


                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleLogIn}>Login</button>
                                                </div>
                                                <span className=""> Havn't An Account?? <Link to="/signup"> Sign Up</Link> </span>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://unblast.com/wp-content/uploads/2020/05/Job-Hunting-Illustration.jpg" className="img-fluid" alt="Sample image" />
                                        </div>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;
