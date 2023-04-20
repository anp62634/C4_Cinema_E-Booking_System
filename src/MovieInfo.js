import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import TrailerModal from "./TrailerModal";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./style.css";

export default function MovieInfo() {

    const title = useState('');
    const genre =useState('');
    const cast = useState('');
    const director = useState('');
    const producer = useState('');
    const synopsis = useState('');
    const poster = useState('');
    const trailer =useState('');
    const showing = useState(false);
    const runtime = useState(0.0);
    const mpa = useState('');
    const [movies,setMovies] = useState([]);
    const movie = {title, mpa, genre, cast, director, producer, synopsis, poster, trailer, showing, runtime}
    
    useEffect(()=>{
        fetch("http://localhost:8080/movie/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setMovies(result);
        })
    },[])

   const movieTitle = useParams().movieTitle;
   const loadMovie = movies.filter(movie => movie.title === movieTitle);

    {/*Additonal info page for movies currently being shown*/}
    return (
    <React.Fragment>
        <NavBar/>
        {loadMovie.map(movie => (
            <div key={movie.id} className="movie-info">
                <div className="movie-info-row">
                    <img src={movie.poster} alt={movie.title}/>
                </div>          
                <div className="movie-info-row">
                    {/* Movie Name, Rating */}
                    <div className="movie-info-text">
                        <h1>{movie.title}</h1>
                        <p><b>Rated {movie.mpa.mpaRating}</b></p>
                        <p><b>Genre:</b> {movie.genre}</p>
                        <p><b>Cast:</b> {movie.cast}</p>
                        <p><b>Director:</b> {movie.director}</p>
                        <p><b>Producer:</b> {movie.producer}</p>
                        <p><i>{movie.synopsis}</i></p>
                    </div>
                    {/* Buttons for Movie Trailer and Book Tickets */}
                    <div className="movie-info-col">
                        <div className="movie-btn">
                            {/* Button for the trailer modal view */}
                            <TrailerModal trailer={movie.trailer} name={movie.name}/>
                        </div>
                        <div className="movie-btn">
                            {/* Button to book tickets */}
                            <Link to={`/booktickets/${movie.title}`} className="book-tickets-linkbutton">BOOK TICKETS</Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        <Footer/>
    </React.Fragment>
  );
};
