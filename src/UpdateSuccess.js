//this is only to be used for deliverable 3 and does not represent success

import React from 'react';
import AdminNavBar from './Components/Admin/AdminNavBar';
import './style.css';

export default function UpdateSuccess() {
    return (
        <React.Fragment>
            <AdminNavBar/>
            <body>
                <div>
                    <h1>Movie has been Updated.</h1>
                </div>
            </body>
        </React.Fragment>
    );
}