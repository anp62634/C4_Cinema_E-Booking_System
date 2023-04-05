import React, {useState} from 'react';
import NavBar from './NavBar.js';
import '../style.css';
import Footer from "./Footer"
import { Button } from '@mui/material';

function RegistrationPage() {

    const[firstName, setFirstName]=useState('');
    const[lastName, setLastName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[phone, setPhone]=useState('');

    const handleClick=(e)=>{
        e.preventDefault()
        const user={firstName, lastName, email, password, phone}
        console.log(user)
        fetch("http://localhost:8080/user/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("New User Added")
        })

    }

    return (
        <React.Fragment>
            <NavBar/>
            <div className="registration-page">
                <div className="auth">
                    <h1>Registration</h1>
                    <form className="form">
                        <h3>Personal Information</h3>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="name@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password123" value={password} onChange={(e)=>setPassword(e.target.value)}required/>
                            <label htmlFor="name">First Name</label>
                            <input type="text" name="name" placeholder="John" value={firstName} onChange={(e)=>setFirstName(e.target.value)}required/>
                            <label htmlFor="name">Last Name</label>
                            <input type="text" name="name" placeholder="Doe" value={lastName} onChange={(e)=>setLastName(e.target.value)}required/>
                            <label htmlFor="phone-number">Telephone Number</label>
                            <input type="text" name="phone-number" placeholder="1234567890" value={phone} onChange={(e)=>setPhone(e.target.value)}required/>
                        </div>
                        <p></p>
                        <div className="input-group">
                            <h3>Card Info</h3>
                            <label htmlFor="card-type">Card Type</label>
                            <input type="text" name="card-type" placeholder="Visa"/>
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text" name="card-number" placeholder="1111 1111 1111 1111"/>
                            <label htmlFor="security-number">Card Security Number</label>
                            <input type="text" name="card-number" placeholder="000"/>
                            <label htmlFor="security-number">Expiration Date</label>
                            <input type="month" name="card-number" placeholder="MM/YY"/>
                        </div>
                        <p></p>
                        <div className="input-group">
                            <h3>Shipping Address</h3>
                            <label htmlFor="street">Street</label>
                            <input type="text" name="street" placeholder="Ex: 111 Go Dawgs Road"/>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" placeholder="Ex: Athens"/>
                            <label htmlFor="state">State</label>
                            <input type="text" name="state" placeholder="Ex: Georgia"/>
                            <label htmlFor="zip">Zip Code</label>
                            <input type="text" name="zip" placeholder="Ex: 00000"/>
                        </div>
                        <h3> </h3>
                        <div className="input-group">
                            <label htmlFor="subscribe">Subscribe To Promotions?</label>
                            <input type="checkbox" name="subscribe"/>
                        </div>
                        <p></p>
                            <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
                    </form>
                    <h1> </h1>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default RegistrationPage;