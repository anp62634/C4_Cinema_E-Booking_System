import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar.js';
import '../../style.css';
import {Link} from "react-router-dom";
import Footer from "../Footer";

function CheckoutConfirmPage(props) {
    const[fullName, setFullName]=useState('');    
    const[address, setAddress]=useState('');
    const[city, setCity]=useState('');
    const[state, setState]=useState('');
    const[zip, setZip]=useState('');

    const [ccInfo,setCCInfo] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:8080/account/getAll")
        .then(res=>res.json())
        .then((ccInfo)=>{
            setCCInfo(ccInfo);
        })
    },[])

    const handleCCInfo = (event) => {
        ccInfo(event.target.value);
      };

    return (
        <React.Fragment>
            <NavBar/>
            {/* Payment Info and Promo Code */}
            <div className='checkout'>
                <div className="auth">
                    <form className="form">
                        <div className="input-group">
                            <h3>Enter Payment Info</h3>
                            <div className="saved-cc">
                                <select onChange={handleCCInfo} className="select-input">
                                <option value="">Select Saved Credit Card</option>
                                <option value="">   </option>
                                </select>
                            </div>
                            <br/>
                            <label htmlFor="card-type">Card Type</label>
                            <input type="text" name="card-type" placeholder="Visa"/>
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text" name="card-number" placeholder="1111 1111 1111 1111"/>
                            <label htmlFor="security-number">Card Security Number</label>
                            <input type="text" name="card-number" placeholder="000"/>
                            <label htmlFor="security-number">Expiration Date</label>
                            <input type="month" name="card-number" placeholder="MM/YY"/>
                        </div>
                        <br/>
                        <div className="input-group">
                            <h3>Billing Address</h3>
                            <label htmlFor="full-name">Full Name</label>
                            <input type="text" name="full-name" placeholder="Ex: John Doe" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                            <label htmlFor="street">Street</label>
                            <input type="text" name="address" placeholder="Ex: 111 Go Dawgs Road" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" placeholder="Ex: Athens" value={city} onChange={(e)=>setCity(e.target.value)}/>
                            <label htmlFor="state">State</label>
                            <input type="text" name="state" placeholder="Ex: Georgia" value={state} onChange={(e)=>setState(e.target.value)}/>
                            <label htmlFor="zip">Zip Code</label>
                            <input type="text" name="zip" placeholder="Ex: 00000" value={zip} onChange={(e)=>setZip(e.target.value)}/>
                        </div>
                        <br/>
                    </form>
                </div>
            
                <div className="checkout-info">
                    
                </div>
            </div>

            <div className="checkout-links">
                    <Link className="movie-btn" to={`/`}><h2>CANCEL</h2></Link>
                    <Link className="movie-btn" to={`/booktickets/checkout/confirmation`}><h2>CONFIRM</h2></Link>
                </div>
            <Footer/>
        </React.Fragment>
    );
};

export default CheckoutConfirmPage;