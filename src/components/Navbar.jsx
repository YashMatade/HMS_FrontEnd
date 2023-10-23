import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate("/")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">Beekin's HMS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to={"/userdash"}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={"/appliedjobs"}>Applied Jobs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto">
                        <button className="btn btn-outline-danger" onClick={handleLogOut}>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;