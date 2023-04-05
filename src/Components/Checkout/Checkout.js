//this is only to be used for deliverable 3 and does not represent success

import React from 'react';
import NavBar from '../NavBar.js';
import '../../style.css';
import {Link} from "react-router-dom";
import Footer from "../Footer";

function CheckoutConfirmPage() {
    return (
        <React.Fragment>
            <NavBar/>
            <body>
                <div className="registration-confirmation">
                    <h1>Is the following information correct?</h1>
                    <h2>Delete Tickets</h2>
                    <h2>Add Tickets</h2>
                </div>
            </body>
            <div className="book-ticket-confirmation">
                <Link className="book-tickets-cancellation-link" to={`/`}><h2>CANCEL</h2></Link>
                <Link className="book-tickets-confirmation-link" to={`/booktickets/checkout/confirmation`}><h2>CONFIRM</h2></Link>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default CheckoutConfirmPage;