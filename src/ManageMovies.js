import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Movies } from './MovieSamples';
import AdminNavBar from './Components/Admin/AdminNavBar';
import './style.css';
import './BrowseMovies.css';

export default function ManageMovies() { 
    // For Showing Movies
    return (
        <React.Fragment>
            {/* Admin Nav Bar */}
            <AdminNavBar/>

            <div className='add-movie'>
                <Link to="/adminview/managemovies/addmovie">Add Movie</Link>
            </div>

            {/* Displays Movies */}
            <div className="search-list">
                {/* Movies Being Shown */}
                {Movies.Showing.map((movie, index) => (
                        <div className="search-listItem"><DisplayMovies items={movie}/></div>
                    ))}

                    {/* Movies Not Being Shown */}
                    {Movies.NotShowing.map((movie, index) => (
                        <div className="search-listItem"><DisplayMovies items={movie}/></div>
                    ))}      
            </div>
        </React.Fragment>
    );
}

function DisplayMovies(movie) {
    return (
        <div className="movie-card">
             {/* Movie Poster */}
            <div className="movie-row-items">
                <img src={movie.items.image} alt={movie.items.name}/>
            </div>
                        
            {/* Movie Name, Rating, if filtered Show times are displayed*/}
             <div className="movie-row-items2">
                <p>{movie.items.name}</p>
                <p>{movie.items.rating}</p>
            </div>
                        
            {/* Buttons Edit and Delete Movie*/}
            <div className="movie-row-items">
                {/* Button to see movie information if shown or not*/}
               
                <div className="movie-btn">
                {movie.items.shown && (
                    <Link to={`/editmovie/currentlyshowing/${movie.items.linkName}`}>Edit Movie</Link>

                )}
                {!movie.items.shown && (
                    <Link to={`/editmovie/comingsoon/${movie.items.linkName}`}>Edit Movie</Link>
                )}
                </div>
                <div className="movie-btn">              
                    <DeleteModal name={movie.items.name}/>
                </div>     
            </div>
        </div>
    );
}

function DeleteModal(props) {
    const navigate = useNavigate();
    // Components for Delete Modal
    const [modal, setDeleteModal] = useState(false);

    const openDeleteWarning = () => {
        setDeleteModal(!modal);
    };

    const cancelDeleteHandler = () => {
        setDeleteModal(false);
    };
     
    const confirmDeleteHandler = () => {
        setDeleteModal(false);
        console.log('DELETING...');
        navigate('/adminview/managemovies/deletesuccess');
    };

    return (
        // Modal View of Movie Trailer
        <button className="individual-movie-buttons" onClick={openDeleteWarning}> 
            Delete Movie
            {modal ? (
            <section className="modal">
                <div className="modal-align">
                    <div className="modal-content" modal={modal}>
                        <p>Are you sure you want to delete the movie {props.name}</p>
                        <div className='movie-btn'>
                        <button inverse onClick={cancelDeleteHandler}>CANCEL</button>
                        
                        <button danger onClick={confirmDeleteHandler}>DELETE</button>
                        </div>
                    </div>
                </div>
            </section>
            ) : null}
        </button>
    );
}