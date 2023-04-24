import React, { useState, useCallback, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './auth-context';
import BrowseMovies from "./BrowseMovies";
import LoginPage from './Components/LoginPage.js';
import SignUpPage from './Components/RegistrationPage.js';
import Homepage from './Components/Homepage.js';
import EditProfilePage from './Components/EditProfilePage.js';
import MovieInfo from './MovieInfo.js';
import MovieInfo2 from "./MovieInfo2";
import BookTickets from './Components/BookingPage.js'
import AdminLogin from './Components/Admin/AdminLogin.js';
import AdminView from "./Components/Admin/AdminView";
import ManageMovies from "./Components/Admin/ManageMovies.js";
import ManageUsers from "./Components/Admin/ManageUsers.js";
import ManagePromotions from "./Components/Admin/ManagePromotions.js";
import UpdateSuccess from "./UpdateSuccess";
import EditMovie from "./EditMovie";
import EditMovie2 from "./EditMovie2";
import AddMovie from "./AddMovie";
import CheckoutConfirmation from "./Components/Checkout/ConfirmBookingPage"
import Checkout from "./Components/Checkout/Checkout"


function App() {
  // Checks if a user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = useCallback(() => {
      setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
      setIsLoggedIn(false);
  }, []);

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    // this shows it is pulling from the backend
    <React.Fragment>
      <div className="App">
        <h1>{message}</h1>
      </div>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
            <Route path="browsemovies" element={<BrowseMovies/>} />
            <Route path="adminlogin" element={<AdminLogin/>} />
            <Route path="loginpage" element={<LoginPage/>} />
            <Route path="registrationpage" element={<SignUpPage/>} />
            <Route path="editprofile" element={<EditProfilePage/>} />
            <Route path="/currentlyshowing/movieinfo/:movieTitle" element={<MovieInfo/>} />
            <Route path="/comingsoon/movieinfo/:movieTitle" element={<MovieInfo2/>} />
            <Route path="/booktickets/:movieTitle" element={<BookTickets/>} />
            <Route path="adminview" element={<AdminView/>} />
            <Route path="adminview/managemovies" element={<ManageMovies/>} />
            <Route path="adminview/managemovies/addmovie" element={<AddMovie/>} />
            <Route path="/editmovie/currentlyshowing/:movieName" element={<EditMovie/>} />
            <Route path="/editmovie/comingsoon/:movieName" element={<EditMovie2/>} />
            <Route path="adminview/managepromotions" element={<ManagePromotions/>} />
            <Route path="adminview/manageusers" element={<ManageUsers/>} />
            <Route path="adminview/managemovies/updatesuccess" element={<UpdateSuccess/>} />
            <Route path="/booktickets/checkout" element={<Checkout/>} />
            <Route path="/booktickets/checkout/confirmation" element={<CheckoutConfirmation/>} />
        </Routes>
      </AuthContext.Provider>
      </React.Fragment>
  );
}

export default App;