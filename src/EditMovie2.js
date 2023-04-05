import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Movies } from "./MovieSamples";
import "./style.css";

export default function EditMovie2() {
    const movieName = useParams().movieName;
    const loadMovies = Movies.NotShowing.filter(movie => movie.linkName === movieName);

    const navigate = useNavigate();

    const cancelEditHandler = () => {
        navigate('/adminview/managemovies');
    };
     
    const confirmEditHandler = () => {
        console.log('Movie Updated...');
        navigate('/adminview/managemovies/updatesuccess');
    };

    return (
    <React.Fragment>
        {/* Modal View of Movie Trailer */}
        {loadMovies.map((movie, index) => (
            <div className="auth">
                <form className="form">
                    <div className="input-group">
                        <h3>Edit Movie Information</h3>
                        <label htmlFor="movie-name">Movie Name</label>
                        <input type="text" name="movie-name" placeholder={movie.name} required/>
                        <label htmlFor="movie-rating">Movie Rating</label>
                        <input type="text" name="movie-rating" placeholder={movie.rating} required/>
                        <label htmlFor="movie-category">Movie Category</label>
                        <input type="text" name="movie-category" placeholder={movie.category[0]} required/>
                        <label htmlFor="movie-cast">Movie Cast</label>
                        <input type="text" name="movie-cast" placeholder={movie.cast} required/>
                        <label htmlFor="movie-director">Movie Director</label>
                        <input type="text" name="movie-director" placeholder={movie.director} required/>
                        <label htmlFor="movie-producer">Movie Producer</label>
                        <input type="text" name="movie-producer" placeholder={movie.producer} required/>
                        <label htmlFor="movie-description">Movie Description</label>
                        <input type="text" name="movie-description" placeholder={movie.description} required/>
                        <label htmlFor="movie-showdate">Movie Show Date</label>
                        <input type="text" name="movie-showdate" placeholder={movie.showDate[0]} required/>
                        <label htmlFor="movie-showtime">Movie Show Time</label>
                        <input type="text" name="movie-showtime" placeholder={movie.showTime[0]} required/>
                    </div>
                    <div className='movie-btn'>
                        <button inverse onClick={cancelEditHandler}>CANCEL</button>
                         <button type="submit" onClick={confirmEditHandler}>SAVE</button>
                    </div>
                </form>
            </div>
        ))}
    </React.Fragment>
    );
};