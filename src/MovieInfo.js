import React from "react";
import { useParams, Link } from "react-router-dom";
import TrailerModal from "./TrailerModal";
import NavBar from "./Components/NavBar";
import { Movies } from "./MovieSamples";
import Footer from "./Components/Footer";
import "./style.css";

export default function MovieInfo() {
    const movieName = useParams().movieName;
    const loadMovies = Movies.Showing.filter(movie => movie.linkName === movieName);

    // Category String to Display to Interface
    var movieCat = "";
    var catLength = loadMovies.map((movie, index) => movie.category.length);
    for (let i = 0; i < catLength; i++) {
        movieCat += loadMovies.map((movie, index) => movie.category[i])
        if (i !== catLength-1) {
            movieCat += ", ";
        }
    }

    //Display for movies being shown
    return (
    <React.Fragment>
        <NavBar/>
        {loadMovies.map((movie, index) => (
            <div key={movie.id} className="movie-info">
                {/* Movie Poster */}
                <div className="movie-info-row">
                    <img src={movie.image} alt={movie.name}/>
                </div>
                            
                <div className="movie-info-row">
                    {/* Movie Name, Rating */}
                    <div className="movie-info-text">
                        <h1>{movie.name}</h1>
                        <p><b>Rated {movie.rating}</b></p>
                        <p><b>Category: {movieCat}</b></p>
                        <p><i>{movie.description}</i></p>
                    </div>

                    {/* Buttons for Movie Trailer and Book Tickets */}
                    <div className="movie-info-col">
                        <div className="movie-btn">
                            {/* Button for the trailer modal view */}
                            <TrailerModal
                                trailer={movie.trailer}
                                name={movie.name}
                            />
                        </div>
                        <div className="movie-btn">
                            {/* Button to book tickets */}
                            <Link to={`/booktickets/${movie.linkName}`} className="book-tickets-linkbutton">BOOK TICKETS</Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        <Footer/>
    </React.Fragment>
  );
};