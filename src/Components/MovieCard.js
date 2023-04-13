import React from "react";
import { Link } from "react-router-dom";
import TrailerModal from "../TrailerModal";
import "../style.css"

export default function MovieCard(movie) {

  //Display for movies being shown
  return (
    <React.Fragment>
        <div className="movie-card">
             {/* Movie Poster */}
            <div className="movie-row-items">
                <img src={movie.items.image} alt={movie.items.name}/>
            </div>
                        
            {/* Movie Name, Rating, if filtered Show times are displayed*/}
             <div className="movie-row-items2">
                <p>{movie.items.name}</p>
                <p>{movie.items.rating}</p>

                {movie.isDate && (
                    <React.Fragment> 
                        {movie.items.showTime !== null && (
                           <div >
                                 {movie.items.showTime.map((time, index) => (
                                    <button>{time}</button>
                                ))}
                           </div>
                        )}
                    </React.Fragment>
                )}

               
            </div>
                        
            {/* Buttons for Movie Trailer, Tickets, and Information */}
            <div className="movie-row-items">
                {/* Button for the trailer modal view */}
                <div className="movie-btn">
                    <TrailerModal
                    trailer={movie.items.trailer}
                    name={movie.items.name}
                    />
                </div>

                {/* Button to see movie information if shown or not*/}
                <div className="movie-btn">
                    {movie.items.shown && (
                        <Link to={`/currentlyshowing/movieinfo/${movie.items.linkName}`}>MOVIE INFORMATION</Link>
                    )}

                    {!movie.items.shown && (
                        <Link to={`/comingsoon/movieinfo/${movie.items.linkName}`}>MOVIE INFORMATION</Link>
                    )}
                </div>

                 {/* Button to book tickets */}
                 <div>
                    {movie.items.shown && (
                        <div className="movie-btn">
                            <Link to={`/booktickets/${movie.items.linkName}`}>BOOK TICKETS</Link>
                        </div>
                    )}

                    {/* Displays to user if movie is coming soon */}
                    {!movie.items.shown && (
                        <h5>COMING SOON</h5>
                    )}
                </div>
            </div>
      </div>
    </React.Fragment>
  );
};