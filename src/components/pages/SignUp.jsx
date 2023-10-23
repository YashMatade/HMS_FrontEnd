import React, { useState } from 'react';
import { signUp } from '../../networkcalls/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function SignUp() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [education, setEducation] = useState();
    const [password, setPassword] = useState();

    // Errors
    const [firstNameErr, setFirstNameErr] = useState();
    const [lastNameErr, setLastNameErr] = useState();
    const [emailErr, setEmailErr] = useState();
    const [educationErr, setEducationErr] = useState();
    const [passwordErr, setPasswordErr] = useState();

    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        let validate = true;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (firstName === undefined || firstName === "") {
            validate = false;
            setFirstNameErr("Please Enter First Name");
        }
        if (lastName === undefined || lastName === "") {
            validate = false;
            setLastNameErr("Please Enter Last Name")
        }
        if (email === undefined || email === "") {
            validate = false;
            setEmailErr("Please Enter Email");
        }
        if (education === undefined || education === "") {
            validate = false;
            setEducationErr("Please Enter Education");
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
            let data = { firstName, lastName, email, password, education }
            signUp(data).then((result) => {
                if (result.err === 200) {
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPassword("");
                    setEducation("")
                    toast.success(result.msg);
                    setTimeout(() => {
                        navigate("/")
                    }, 2000)
                } else {
                    toast.error(result.msg)
                }
            }).catch((err) => {
                toast.error(err.toString())
            })
        }
    }



    return (
        <section className="" style={{ backgroundColor: "#eee" }}>
            <div className="container pt-3 pb-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" className="form-control" placeholder='First Name' onChange={(e) => { setFirstName(e.target.value); setFirstNameErr("") }} />
                                                    <span className='text-danger'>{firstNameErr}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" className="form-control" placeholder='Last Name' onChange={(e) => { setLastName(e.target.value); setLastNameErr("") }} />
                                                    <span className='text-danger'>{lastNameErr}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>


                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control" placeholder='Email' onChange={(e) => { setEmail(e.target.value); setEmailErr("") }} />
                                                    <span className='text-danger'>{emailErr}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                                                <i class="fa fa-book fa-lg me-3 fa-fw" aria-hidden="true"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="education" id="form3Example4cd" onChange={(e) => { setEducation(e.target.value); setEducationErr("") }} className="form-control" placeholder='Higher Education' />
                                                    <span className='text-danger'>{educationErr}</span>
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
                                                <button type="button" className="btn btn-primary btn-lg" onClick={handleSignUp}>Register</button>
                                            </div>
                                            <span className=""> Already have An Account?? <Link to="/"> Sign In</Link> </span>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                    </div>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
