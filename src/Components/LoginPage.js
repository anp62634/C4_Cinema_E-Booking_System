import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavBar from './NavBar.js';
import { AuthContext } from '../auth-context.js';
import '../style.css';
import Footer from "./Footer"
import { Button } from '@mui/material';


function LoginPage() {
    const auth = useContext(AuthContext);
    let navigate = useNavigate(); 

    const handleSubmit = (e) =>{ 
        e.preventDefault();
        auth.login();
        navigate('/homepage');
    }

    return (
        <React.Fragment>
            <NavBar/>
                <div className="auth">
                    <h1>Login</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="name@gmail.com" required/>
                        </div>
                        <br/>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password123" required/>
                        </div>
                        <br/>

                        <Button variant="contained" color="secondary" type="submit" value="Login">Login</Button>
                    </form>
                    <br/>
                    
                    <Link to="/registrationpage" className="login-links" exact>Don't have an account? Register here</Link>
                    <Link to="/registrationpage" className="login-links" exact>Forgot Password?</Link>
                </div>
            <Footer/>
        </React.Fragment>
    );
};

export default LoginPage;
