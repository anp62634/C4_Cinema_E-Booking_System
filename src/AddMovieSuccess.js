//this is only to be used for deliverable 3 and does not represent success

import React from 'react';
import AdminNavBar from './Components/Admin/AdminNavBar.js';
import './style.css';

export default function AddMovieSuccess() {
    return (
        <React.Fragment>
            <AdminNavBar/>
            <body>
                <div>
                    <h1>Movie has been Added.</h1>
                </div>
            </body>
        </React.Fragment>
    );
}