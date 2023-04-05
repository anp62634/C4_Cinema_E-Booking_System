import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth-context';
import '../../style.css';

export default function AdminNavBar() {
    const auth = useContext(AuthContext);

    return (
        <React.Fragment>
            {/* Admin Nav Bar */}
            <nav className="header-nav">
                {/* Title */}
                <h1 className="header-title"><Link to="/">E-Cinema Booking C4</Link></h1>

                {/* Admin Nav Links */}
                <ul className="nav-links">
                    {auth.isLoggedIn && (
                        <li><NavLink to="/adminview" exact>Home</NavLink></li>
                    )}
                    {auth.isLoggedIn && (
                        <li><button className="logoutButton" onClick={auth.logout}>Logout</button></li>
                    )}
                </ul>
            </nav>
        </React.Fragment>
    );
};