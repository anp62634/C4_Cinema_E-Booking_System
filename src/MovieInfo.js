import React from "react";
import { useParams, Link } from "react-router-dom";
import TrailerModal from "./TrailerModal";
import NavBar from "./Components/NavBar";
import { Movies } from "./MovieSamples";
import Footer from "./Components/Footer";

export default function MovieInfo() {
    const movieName = useParams().movieName;
    const loadMovies = Movies.Showing.filter(movie => movie.linkName === movieName);
    
  //Display for movies being shown
    return (
    <React.Fragment>
        <NavBar/>
        {loadMovies.map((movie, index) => (
            <div key={movie.id} className="">
                {/* Movie Name, Rating */}
                <div className="">
                    <h1>{movie.name}</h1>
                    <p>{movie.rating}</p>
                    <p>{movie.description}</p>
                </div>

                {/* Movie Poster */}
                <div className="">
                    <img src={movie.image} alt={movie.name}/>
                </div>
                            
                
                            
                {/* Buttons for Movie Trailer and Book Tickets */}
                <div className="movie-btn">
                    {/* Button for the trailer modal view */}
                    <TrailerModal
                        trailer={movie.trailer}
                        name={movie.name}
                    />
              
                    {/* Button to book tickets */}
                    <Link to={`/booktickets/${movie.linkName}`}>BOOK TICKETS</Link>
                </div>
            </div>
        ))}
        <Footer/>
    </React.Fragment>
  );
};