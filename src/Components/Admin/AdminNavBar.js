import React, { useContext, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth-context';
import '../../style.css';

export default function AdminNavBar() {
    const auth = useContext(AuthContext);
    // For drop down menu
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const dropDownClick = () => setIsActive(!isActive);

    return (
        <React.Fragment>
            {/* Admin Nav Bar */}
            <nav className="header-nav">
                {/* Title */}
                <h1 className="header-title"><Link to="/">E-Cinema Booking C4</Link></h1>
                {/* Drop Down Menu */}
                {auth.isLoggedIn && (
                    <div className='menu-dropdown'>
                        <button onClick={dropDownClick} className="dropdown-trigger">
                            <h4>Hi, Admin</h4>
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User avatar"/>
                        </button>
                        
                        <nav ref={dropDownRef} className={`dropdown ${isActive ? 'active' : 'inactive'}`}>
                        {/* Admin Nav Links */}
                        <ul className="nav-links">
                            <li><NavLink to="/adminview" exact>Admin View</NavLink></li>
                            <li><NavLink className="logoutButton" onClick={auth.logout}>Logout</NavLink></li>
                        </ul>
                        </nav>
                    </div>
                )}
            </nav>
        </React.Fragment>
    );
};