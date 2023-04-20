import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavBar from './NavBar.js';
import { AuthContext } from '../auth-context.js';
import '../style.css';
import Footer from "./Footer"
import axios from 'axios';


function LoginPage() {

    const auth = useContext(AuthContext);
    const navigate = useNavigate(); 
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    async function login(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/user/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);
                if (res.data.message === "Email Does Not Exist") {
                    alert("Email Does Not Exist");
                } else  if (res.data.message === "Password Does Not Match"){
                    alert("Password Does Not Match");
                }
                else if (res.data.message === "Login Success") {
                    auth.login();
                    navigate("/");
                } else {

                    alert("Account Does Not Exist");
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
            <div className="login">
                <div className="auth">
                    <h1>Login</h1>
                    <form className="form" onSubmit={login}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="name@gmail.com" value={email} onChange={(e)=>{setEmail(e.target.value);}} required/>
                        </div>
                        <p></p>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password123" value={password} onChange={(e)=>{setPassword(e.target.value);}} required/>
                        </div>
                        <br/>
                        <input onClick={login} type="submit" value="Login" className='auth-btn'/>
                        <br/>
                    </form>
                    <br/>
                    <Link to="/registrationpage" className="login-links" exact>Don't have an account? Register here</Link>
                    <br/>
                    <Link to="/registrationpage" className="login-links" exact>Forgot Password?</Link>
                    <br/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default LoginPage;
