import React from 'react';
import { Link } from 'react-router-dom';
import TrailerModal from './TrailerModal';
import "./style.css";

export default function MovieList(props) {

  // If no movies are found
  if (props.items.length === 0) {
    return (
      <div className="no-movies">
          <h2>No movies found.</h2>
      </div>
    );
  }

  //Display for movies being shown
  return (
    <React.Fragment>
      <div className="movie-content">
        {props.items.map(movie => (
          <div key={movie.id} className="movie-item">
            {/* Movie Title */}
            <h3>{movie.name}</h3>
            <p>{movie.rating}</p>
            {/* Movie Poster which can be clicked on to view Movie Info */}
            <div>
              {movie.shown && (
                <Link to={`/currentlyshowing/movieinfo/${movie.linkName}`}>
                  <img src={movie.image} alt={movie.name}/>
                </Link>
              )}
              {!movie.shown && (
                <Link to={`/comingsoon/movieinfo/${movie.linkName}`}>
                  <img src={movie.image} alt={movie.name}/>
                </Link>
              )}
            </div>

            {/* Buttons to see Movie Trailer or Book Tickets */}
            <div>
              {/* Button for the trailer modal view */}
              <div className='movie-btn'>
                <TrailerModal
                trailer={movie.trailer}
                name={movie.name}
                />
              </div>
              
              {/* Button to book tickets being shown */}
                {movie.shown && (
                  <div className='movie-btn'>
                    <Link className="book-tickets-linkbutton" to={`/booktickets/${movie.linkName}`}>BOOK TICKETS</Link>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};