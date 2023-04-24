import React from "react";
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { TheaterLayout } from "./Seats/SeatSample";
import SeatList from "./Seats/SeatList";
import "../style.css";
import Footer from "./Footer"

export default function BookTickets() {
  const [movies, setMovies] = useState([]);
    
  useEffect(()=>{
    fetch("http://localhost:8080/movie/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setMovies(result);
    })
  },[])
 
  const [selectedDate, setDate] = useState("");
  const [selectedTime, setTime] = useState("");
  const [selectedTicketType, setTicketType] = useState("");
  const [adultCounter, setAdultCounter] = useState(0);
  const [seniorCounter, setSeniorCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);
  var totalTickets = adultCounter + seniorCounter + childCounter;

  

  const incrAdultCounter = () => setAdultCounter(adultCounter + 1);
  const incrSeniorCounter = () => setSeniorCounter(seniorCounter + 1);
  const incrChildCounter = () => setChildCounter(childCounter + 1);

  let decrAdultCounter = () => setAdultCounter(adultCounter - 1);
  let decrSeniorCounter = () => setSeniorCounter(seniorCounter - 1);
  let decrChildCounter = () => setChildCounter(childCounter - 1);

  
  if (adultCounter <= 0 ) {
    decrAdultCounter = () => setAdultCounter(0);
  }

  if (seniorCounter <= 0 ) {
    decrSeniorCounter = () => setSeniorCounter(0);
  }

  if (childCounter <= 0 ) {
    decrChildCounter = () => setChildCounter(0);
  }

  const handleTicketType = (event) => {
    selectedTicketType(event.target.value);
  };

  const handleDate = (event) => {
    selectedDate(event.target.value);
  };

  const handleTime = (event) => {
    selectedTime(event.target.value);
  };

  const movieTitle = useParams().movieTitle;
  const loadMovie = movies.filter(movie => movie.title === movieTitle);

  return (
    <React.Fragment>
        <NavBar/>
        {loadMovie.map(movie => (
          <div key={movie.id} className="book-tickets">
            <h1>Book Tickets for {movie.title}</h1>

            <div className="filter-movie-booking">
              <div>
                <select onChange={handleDate} className="select-input">
                  <option value="">Filter By Date</option>
                  <option value="04/28/2023">04/28/2023</option>
                  <option value="04/29/2023">04/29/2023</option>
                  <option value="04/30/2023">04/30/2023</option>
                </select>
              </div>

              <div>
                <select onChange={handleTime} className="select-input">
                  <option value="">Filter By Showtime</option>
                  <option value="4:30PM">4:30 PM</option>
                  <option value="7:00PM">7:00 PM</option>
                  <option value="10:30PM">10:30 PM</option>
                </select>
              </div>
            </div>

            <div className="ticket-type-booking">
              <div className="ticket-type-row">
                <button onChange={handleTicketType} onClick={decrAdultCounter} >-</button>
                  <div className="ticket-type-text">
                    <h4>{adultCounter} Adult</h4>
                    <h5><i>$12 each</i></h5>
                  </div>
                <button onChange={handleTicketType} onClick={incrAdultCounter} >+</button>
              </div>

              <div className="ticket-type-row">
                <button onChange={handleTicketType} onClick={decrSeniorCounter} >-</button>
                  <div className="ticket-type-text">
                    <h4>{seniorCounter} Senior</h4>
                    <h5><i>$9 each</i></h5>
                  </div>
                <button onChange={handleTicketType} onClick={incrSeniorCounter} >+</button>
              </div>

              <div className="ticket-type-row">
                <button onChange={handleTicketType} onClick={decrChildCounter} >-</button>
                  <div className="ticket-type-text">
                    <h4>{childCounter} Child</h4>
                    <h5><i>$8 each</i></h5>
                  </div>
                <button onChange={handleTicketType} onClick={incrChildCounter} >+</button> 
              </div>
            </div>

            <h4>{totalTickets} Total</h4>

            <div className="theater-layout">
                <h1>Seat Selection</h1> 
                <SeatList items={TheaterLayout.Seats} tickets={totalTickets}/>
            </div>
            
            <div className="movie-btn">
              <Link to={`/booktickets/checkout`}><b>CHECKOUT</b></Link>
            </div>
          </div>
        ))}
        <Footer/>
    </React.Fragment>
  );
};

