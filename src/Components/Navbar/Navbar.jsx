import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }
        setUsername('');
        window.location.reload();
    }

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");
        if (storedEmail) {
            setIsLoggedIn(true);
            const extractedUsername = storedEmail.split("@")[0];
            setUsername(extractedUsername);
        }
    }, []);

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">
                    StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
                </Link>
                <span>.</span>
            </div>
            <div className="nav__icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={click ? 'nav__links active' : 'nav__links'}>
                <li className="link">
                    <Link to="/">Home</Link>
                </li>
                <li className="link">
                    <Link to="/search/doctors">Appointments</Link>
                </li>

                {isLoggedIn ? (
                    <>
                        <li className="link">
                            <Link to="/instant-consultation">Instant Consultation</Link>
                        </li>
                        <li className="link">
                            <Link to="/review-table">Reviews</Link>
                        </li>
                        <li className="link welcome-user">
                            <span>Welcome, {username}</span>
                            <div className="dropdown-card">
                                <Link to="/profile">
                                    <button className="btn-profile">Your Profile</button>
                                </Link>
                                <Link to="/reports">
                                    <button className="btn-profile">Your Reports</button>
                                </Link>
                            </div>
                        </li>
                        <li className="link">
                            <button className="btn2" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="link">
                            <Link to="/healthblog">Health Blog</Link>
                        </li>
                        <li className="link">
                            <Link to="/reviews">Reviews</Link>
                        </li>
                        <li className="link">
                            <Link to="/sign-up">
                                <button className="btn1">Sign Up</button>
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="/login">
                                <button className="btn1">Login</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
