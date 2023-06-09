import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import TrailerModal from "./TrailerModal";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./style.css";

export default function MovieInfo2() {

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
    const mpaa = useState('');
    const [movies,setMovies] = useState([]);
    const movie = {title, mpaa, genre, cast, director, producer, synopsis, poster, trailer, showing, runtime}
  
    useEffect(()=>{
        fetch("http://localhost:8080/movie/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setMovies(result);
        })
    },[])

   const movieTitle = useParams().movieTitle;
   const loadMovie = movies.filter(movie => movie.title === movieTitle);
    
    // Category String to Display to Interface
    /*var movieCat = "";
    var catLength = loadMovies.map((movie, index) => movie.category.length);
    for (let i = 0; i < catLength; i++) {
        movieCat += loadMovies.map((movie, index) => movie.category[i])
        if (i !== catLength-1) {
            movieCat += ", ";
        }
    }*/
    
    //Display for movies not being shown
    return (
    <React.Fragment>
        <NavBar/>
        {loadMovie.map((movie) => (
            <div key={movie.id} className="movie-info">
                <div className="movie-info-row">
                    <img src={movie.poster} alt={movie.title}/>
                </div>
                <div className="movie-info-row">
                    <div className="movie-info-text">
                        <h1>{movie.title}</h1>
                        <p><b>Rated {movie.mpaa.mpaaRating}</b></p>
                        <p><b>Genre:</b> {movie.genre}</p>
                        <p><b>Cast:</b> {movie.cast}</p>
                        <p><b>Director:</b> {movie.director}</p>
                        <p><b>Producer:</b> {movie.producer}</p>
                        <p><i>{movie.synopsis}</i></p>
                    </div>
                    <div className="movie-info-col">
                        <div className="movie-btn">
                                <TrailerModal
                                trailer={movie.trailer}
                                name={movie.title}
                                />
                        </div> 
                    </div>
                    <div>
                        {/* Displays to user if movie is coming soon */}
                        <h3>COMING SOON</h3>
                    </div>  
                </div>
            </div>
        ))}
        <Footer/>
    </React.Fragment>
  );
};
