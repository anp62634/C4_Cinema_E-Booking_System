import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar.js';
import { AuthContext } from '../auth-context.js';
import Footer from "./Footer"
import axios from 'axios';
import '../style.css';

function EditProfilePage() {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const[firstName, setFirstName]=useState('');
    const[lastName, setLastName]=useState('');
    const[email, setEmail]=useState(null);
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

    const cancelEditHandler = () => {
        console.log('Edit Profile Canceled...');
        navigate('/');
    };


    async function edit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/user/edit", {
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
                if (res.data.message === "Email Does Not Exist") {
                    alert('Email Does Not Exist');
                } else if (res.data.message === "Edit Success") {
                    auth.edit();
                    navigate("/");
                } else {
                    alert("Edit Failed")
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
                <div className="auth">
                    <h1>Edit Profile</h1>
                    <form className="form" onSubmit={edit}>
                        <h3>Edit Personal Information</h3>
                        <div className="input-group">
                            <label htmlFor="name">Change First Name</label>
                            <input type="text" name="name" placeholder="John" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
                            <label htmlFor="name">Change Last Name</label>
                            <input type="text" name="name" placeholder="Doe" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
                            <label htmlFor="password">Change Password</label>
                            <input type="password" name="password" placeholder="password123" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                            <label htmlFor="phone-number">Change Telephone Number</label>
                            <input type="text" name="phone-number" placeholder="1234567890" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                        </div>
                        <br/>

                        <div className="input-group">
                            <h3>Edit Card Info</h3>
                            <label htmlFor="card-type">Change Card Type</label>
                            <input type="text" name="card-type" placeholder="Visa"/>
                            <label htmlFor="card-number">Change Card Number</label>
                            <input type="text" name="card-number" placeholder="1111 1111 1111 1111"/>
                            <label htmlFor="security-number">Change Card Security Number</label>
                            <input type="text" name="card-number" placeholder="000"/>
                            <label htmlFor="security-number">Change Expiration Date</label>
                            <input type="month" name="card-number" placeholder="MM/YY"/>
                        </div>
                        <br/>

                        <div className="input-group">
                            <h3>Edit Shipping Address</h3>
                            <label htmlFor="street">Change Street</label>
                            <input type="text" name="street" placeholder="Ex: 111 Go Dawgs Road" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                            <label htmlFor="city">Change City</label>
                            <input type="text" name="city" placeholder="Ex: Athens" value={city} onChange={(e)=>setCity(e.target.value)}/>
                            <label htmlFor="state">Change State</label>
                            <input type="text" name="state" placeholder="Ex: Georgia" value={state} onChange={(e)=>setState(e.target.value)}/>
                            <label htmlFor="zip">Change Zip Code</label>
                            <input type="text" name="zip" placeholder="Ex: 00000" value={zip} onChange={(e)=>setZip(e.target.value)}/>
                        </div>
                        <br/>

                        <div className="input-group">
                            <label htmlFor="subscribe">Subscribe To Promotions?</label>
                            <input type="checkbox" name="subscribe" onChange={handleSubscription}/>
                        </div>
                        <br/>

                        {/* Cancel or Save Info Button */}
                        <button inverse onClick={cancelEditHandler} className='auth-btn'><b>Cancel</b></button>
                        <button type="submit" onClick={edit} className='auth-btn'><b>Save</b></button>
                    </form>               
                    <br/>
                </div>
            <Footer/>
        </React.Fragment>
    );
};

export default EditProfilePage;
