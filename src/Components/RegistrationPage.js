import React, {useState} from 'react';
import NavBar from './NavBar.js';
import '../style.css';
import Footer from "./Footer"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {

    const navigate = useNavigate(); 

    const[firstName, setFirstName]=useState('');
    const[lastName, setLastName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[phone, setPhone]=useState('');    
    const[address, setAddress]=useState('');
    const[city, setCity]=useState('');
    const[state, setState]=useState('');
    const[zip, setZip]=useState('');
    const[checked, setChecked]=useState(false);
    const[enrolledForPromo, setEnrolledForPromo]=useState(0);

    const handleSubscription = () => {
        setChecked(!checked);
        setEnrolledForPromo(enrolledForPromo ? 0 : 1);
    }

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/user/save", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                phone: phone,
                address: address,
                city: city,
                state: state,
                zip: zip,
                enrolledForPromo: enrolledForPromo
            }).then((res) => {
                console.log(res.data);
                if (res.data.message == "Registration Success") {
                    navigate("/loginpage");
                } else {
                    alert("Registration Failed");
                }
            }, fail => {
                console.error(fail);
            });
        } catch (err) {
            alert(err);
        }
    }


    return (
        <React.Fragment>
            <NavBar/>
            <div className="registration-page">
                <div className="auth">
                    <h1>Registration</h1>
                    <form className="form">
                        <h3>Personal Information</h3>
                        <h5>All Fields Marked with (*) Are Required</h5>
                        <div className="input-group">
                            <label htmlFor="email">Email *</label>
                            <input type="email" name="email" placeholder="name@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                            <label htmlFor="password">Password *</label>
                            <input type="password" name="password" placeholder="password123" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                            <label htmlFor="name">First Name *</label>
                            <input type="text" name="name" placeholder="John" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
                            <label htmlFor="name">Last Name *</label>
                            <input type="text" name="name" placeholder="Doe" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
                            <label htmlFor="phone-number">Telephone Number *</label>
                            <input type="text" name="phone-number" placeholder="1234567890" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
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
                            <input type="text" name="address" placeholder="Ex: 111 Go Dawgs Road" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" placeholder="Ex: Athens" value={city} onChange={(e)=>setCity(e.target.value)}/>
                            <label htmlFor="state">State</label>
                            <input type="text" name="state" placeholder="Ex: Georgia" value={state} onChange={(e)=>setState(e.target.value)}/>
                            <label htmlFor="zip">Zip Code</label>
                            <input type="text" name="zip" placeholder="Ex: 00000" value={zip} onChange={(e)=>setZip(e.target.value)}/>
                        </div>
                        <h3> </h3>
                        <div className="input-group">
                            <label htmlFor="subscribe">Subscribe To Promotions?</label>
                            <input type="checkbox" name="subscribe" onChange={handleSubscription}/>
                        </div>
                        <p></p>
                        <input onClick={submit} type="submit" value="Register"/>
                    </form>
                    <h1> </h1>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default RegistrationPage;