//this is only to be used for deliverable 3 and does not represent success

import React from 'react';
import NavBar from '../Components/NavBar.js';
import '../style.css';
import Footer from "../Components/Footer"

function RegConfirmPage() {
    return (
        <React.Fragment>
            <NavBar/>
            <body>
                <div className="registration-confirmation">
                    <h1>SUCCESS!</h1>
                </div>
            </body>
            <Footer/>

        </React.Fragment>
    );
};

export default RegConfirmPage;