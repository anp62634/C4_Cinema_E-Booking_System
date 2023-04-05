import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../auth-context.js';
import NavBar from './../NavBar.js';
import '../../style.css';

export default function AdminLogin() {
    const auth = useContext(AuthContext);
    // Navigate to Admin View after login
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        auth.login();
        navigate('/adminview');
    }
  
    return (
        <React.Fragment>
            <NavBar/>
            <div className="login">
                <div className="auth">
                    <h1>Admin Login</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="name@gmail.com" required/>
                        </div>
                        <p></p>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password123" required/>
                        </div>
                        <input type="submit" value="Login"/>
                    </form>
                    <h3> </h3>
                    <Link to="/registrationpage" exact>Forgot Password?</Link>
                    <h1> </h1>
                </div>
            </div>
        </React.Fragment>
    );
};
