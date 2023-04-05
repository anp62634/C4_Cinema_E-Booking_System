import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth-context";
import '../style.css';

export default function Footer() {
    const auth = useContext(AuthContext);

    return (
        <div className="footer">
            {!auth.isLoggedIn && (
                <Link to="/adminlogin"><h4>Admin Login</h4></Link>
            )}
            {auth.isLoggedIn && (
                <Link to="/adminview"><h4>Admin Login</h4></Link>
            )}
            <h4>© E-Cinema Booking C4</h4>
        </div>
    );
}