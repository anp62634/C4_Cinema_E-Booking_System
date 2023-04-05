import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth-context";

import './Register.css'

export default function Register(props) {
    const auth = useContext(AuthContext);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        auth.login();
    }

    let navigate = useNavigate(); 
    const routeChange = () => { 
        let path = `/Login`; 
        navigate(path);
    }

    return (
        <div className="register-form-container">
            <h2>Register</h2>
            {/* Registration Form */}
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />

                <label htmlFor="phoneNumber">phone number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}type="phoneNumber" placeholder="(###)###-####" id="phoneNumber" name="phoneNumber" />

                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                
                <button type="submit">Log In</button>
            </form>

            {/* Switch to Login Form */}
            <button className="link-btn" onClick={routeChange}>Already have an account? Login here.</button>
    </div>
    )
}