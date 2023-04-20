import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import TrailerModal from './TrailerModal';
import "./style.css";

export default function MovieList() {

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


  // If no movies are found
  /*if (movies.items.length === 0) {
    return (
      <div className="no-movies">
          <h2>No movies found.</h2>
      </div>
    );
  }*/

  //Display for movies being shown
  return (
    <React.Fragment>
      <div className="movie-content">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <p>{movie.mpa.mpaRating}</p>
            {movie.showing && (
              <Link to={`/currentlyshowing/movieinfo/${movie.title}`}>
                <img src={movie.poster} alt={movie.title}/>
              </Link>
            )}
            {!movie.showing && (
              <Link to={`/comingsoon/movieinfo/${movie.title}`}>
                <img src={movie.poster} alt={movie.title}/>
              </Link>
            )}
            <div>
              <div className='movie-btn'>
                <TrailerModal
                trailer={movie.trailer}
                name={movie.title}
                />
              </div>
              {/* Button to book tickets being shown */}
                {movie.showing === "true" && (
                  <div className='movie-btn'>
                    <Link className="book-tickets-linkbutton" to={`/booktickets/${movie.title}`}>BOOK TICKETS</Link>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};