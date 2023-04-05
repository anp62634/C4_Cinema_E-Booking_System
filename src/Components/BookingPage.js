import React from "react";
import {useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { TheaterLayout } from "./Seats/SeatSample";
import SeatList from "./Seats/SeatList";
import "../style.css";
import Footer from "./Footer"

export default function BookTickets() {
 
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDate, setSelectedDate] = useState("");


  const handleMovie = (event) => {
      setSelectedMovie(event.target.value);
  };

  const handleDate = (event) => {
    setSelectedDate(event.target.value);
};

    return (
    <React.Fragment>
        <NavBar/>
        <h1> </h1>
        <div className="filter-movie-seating">
          <select onChange={handleMovie} className="select-input">
            <option value="">Filter By Movie</option>
            <option value="OnceUponATimeInHollywood">Once Upon A Time In Hollywood - $10</option>
            <option value="SonicTheHedgehog">Sonic The Hedgehog - $8</option>
            <option value="BlackAdam">Black Adam - $10</option>
          </select>
        </div>
        <div className="filter-movie-seating">
          <select onChange={handleDate} className="select-input">
            <option value="">Filter By Showtime</option>
            <option value="4:30PM">4:30 PM</option>
            <option value="7:00PM">7:00 PM</option>
            <option value="10:30PM">10:30 PM</option>
          </select>
        </div>
        <div className="theater-layout">
            <h1>Seat Selection</h1> 
            <SeatList items={TheaterLayout.Seats} />
        </div>
        <div className="book-ticket-confirmation">
          <Link className="book-tickets-confirmation-link" to={`/booktickets/checkout`}><h2>CHECKOUT</h2></Link>
        </div>
        <Footer/>
    </React.Fragment>
  );
};

