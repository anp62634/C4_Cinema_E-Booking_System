import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function AddMovie() {
    const navigate = useNavigate();
    const cancelAddHandler = () => {
        navigate('/adminview/managemovies');
    };
     
    const confirmAddHandler = () => {
        console.log('Movie Updated...');
        navigate('/adminview/managemovies/addmoviesuccess');
    };
    return (
    <React.Fragment>
        {/* Form to add a new movie */}
        <div className="auth">
            <form className="form">
                <div className="input-group">
                    <h3>Add Movie Information</h3>
                    <label htmlFor="movie-name">Movie Name</label>
                    <input type="text" name="movie-name" required/>
                    <label htmlFor="movie-rating">Movie Rating</label>
                    <input type="text" name="movie-rating" placeholder="" required/>
                    <label htmlFor="movie-category">Movie Category</label>
                    <input type="text" name="movie-category" placeholder="" required/>
                    <label htmlFor="movie-cast">Movie Cast</label>
                    <input type="text" name="movie-cast" placeholder="" required/>
                    <label htmlFor="movie-director">Movie Director</label>
                    <input type="text" name="movie-director" placeholder="" required/>
                    <label htmlFor="movie-producer">Movie Producer</label>
                    <input type="text" name="movie-producer" placeholder="" required/>
                    <label htmlFor="movie-description">Movie Description</label>
                    <input type="text" name="movie-description" placeholder="" required/>
                    <div>
                        <label htmlFor="currentlyshowing">Will Movie be Currently Showing</label>
                        <input type="checkbox" name="currentlyshowing" />
                    </div>
                    <label htmlFor="movie-showdate">Movie Show Date</label>
                    <input type="text" name="movie-showdate" placeholder="" />
                    <label htmlFor="movie-showtime">Movie Show Time</label>
                    <input type="text" name="movie-showtime" placeholder="" />
                </div>
                <div className='movie-btn'>
                    <button inverse onClick={cancelAddHandler}>CANCEL</button>
                    <button type="submit" onClick={confirmAddHandler}>SAVE</button>
                </div>
            </form>
        </div>
    </React.Fragment>
    );
};