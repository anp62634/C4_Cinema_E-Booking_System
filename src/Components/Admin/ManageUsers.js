import React, { useState } from "react";
import AdminNavBar from './AdminNavBar';
import '../../style.css';

// userType: 0 = admin, 1 = user
const USERS =[
    {
        id: 0,
        userType: 1, 
        fname: "Testing",
        lname: "User",
        email: "user@gmail.com",
        password: "password",
        phoneNum: "1234567890",
        address: {
            street: "123 UGA Rd",
            city: "Athens",
            state: "Georgia",
            zipCode: "30602"
        },
        payment: [{
            cardType: "",
            cardNum: "",
            expDate: "",
            billing: {
                street: "123 UGA Rd",
                city: "Athens",
                state: "Georgia",
                zipCode: "30602"
            }
        }]
    }
];

// provide payment information (card type, number, and expiration date, and billing address)

export default function ManageUsers() {
    // const [selectPromo, setSelectPromo] = useState("");
    // const handlePromo = (event) => {
    //     setSelectPromo(event.target.value);
    // };

    return (
        <React.Fragment>
            {/* Admin Nav Bar */}
            <AdminNavBar/>

            
                {/* Displays Current Promotions */}
                <div className="movie-card">
                    {USERS.map((user, index) => (
                        <div key={user.id} className="movie-item">
                            {/* User Info */}
                            <h3>{user.fname} {user.lname}</h3>
                            <p>{user.email}</p>
                            <p>{user.phoneNum}</p>
                            
                            {/* Button to manage user */}
                            <div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
           
        </React.Fragment>
    );
}