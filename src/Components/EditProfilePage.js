import React from 'react';
import NavBar from './NavBar.js';
import Footer from "./Footer"
import '../style.css';

function EditProfilePage() {
    return (
        <React.Fragment>
            <NavBar/>
                <div className="auth">
                    <h1>Edit Profile</h1>
                    <form className="form">
                        <h3>Edit Personal Information</h3>
                        <div className="input-group">
                            <label htmlFor="name">Change First Name</label>
                            <input type="text" name="name" placeholder="John" required/>
                            <label htmlFor="name">Change Last Name</label>
                            <input type="text" name="name" placeholder="Doe" required/>
                            <label htmlFor="password">Change Password</label>
                            <input type="password" name="password" placeholder="password123"/>
                            <label htmlFor="phone-number">Change Telephone Number</label>
                            <input type="text" name="phone-number" placeholder="1234567890" required/>
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
                            <input type="text" name="street" placeholder="Ex: 111 Go Dawgs Road"/>
                            <label htmlFor="city">Change City</label>
                            <input type="text" name="city" placeholder="Ex: Athens"/>
                            <label htmlFor="state">Change State</label>
                            <input type="text" name="state" placeholder="Ex: Georgia"/>
                            <label htmlFor="zip">Change Zip Code</label>
                            <input type="text" name="zip" placeholder="Ex: 00000"/>
                        </div>
                        <br/>

                        <div className="input-group">
                            <label htmlFor="subscribe">Subscribe To Promotions?</label>
                            <input type="checkbox" name="subscribe"/>
                        </div>
                        <br/>

                        <input type="submit" value="Submit"></input>
                    </form>
                    {/* need make into a button and add to the form yes or no answer */}                    
                    <br/>
                </div>
            <Footer/>
        </React.Fragment>
    );
};

export default EditProfilePage;