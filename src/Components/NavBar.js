import React, { useContext, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth-context';
import './LoginPage';
import '../style.css';

export default function NavBar() {
    const auth = useContext(AuthContext);

    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = `/browsemovies`; 
        navigate(path);
    }

    // For drop down menu
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const dropDownClick = () => setIsActive(!isActive);

    return ( 
        <React.Fragment>
            {/* Navigation Bar */}
            <nav className="header-nav">
                {/* Title */}
                <h1 className="header-title"><Link to="/">E-Cinema Booking C4</Link></h1>

                {/* Browse Movies */}
                <div>
                    <button type="submit" className="search-btn" onClick={routeChange}>Browse Movies...</button>
                    <Link className="navbar-brand" to="/browsemovies">
                        <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt='' className='search-img'/>
                    </Link>
                </div>

                {/* Navigation Links depending on user and if logged in*/}
                {!auth.isLoggedIn && (
                <ul className="nav-links">
                    <li><NavLink to="/loginpage" exact>Login</NavLink></li>
                    <li><NavLink to="/registrationpage" exact>Signup</NavLink></li>
                </ul>
                )}

                {/* Drop Down Menu for Logged-In User*/}
                {auth.isLoggedIn && (
                <div className='menu-dropdown'>
                    <button onClick={dropDownClick} className="dropdown-trigger">
                        <h4>Hi, username</h4>
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User avatar"/>
                    </button>
                    <nav ref={dropDownRef} className={`dropdown ${isActive ? 'active' : 'inactive'}`}>
                    <ul className="nav-links">
                            <li><NavLink to="/editprofile" exact>Edit Profile</NavLink></li>
                            <li><NavLink to="/" onClick={auth.logout}>Logout</NavLink></li>
                    </ul>
                    </nav>
                 </div>
                 )}
            </nav>
        </React.Fragment>
    );
};