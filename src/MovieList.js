import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import TrailerModal from './TrailerModal';
import "./style.css";

export default function MovieList(props) {
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
      fetch("http://localhost:8080/movie/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setMovies(result);
      })
  },[])

  const loadMovie = movies.filter(movie => movie.showing === props.isShowing);

  //Display for movies being shown
  return (
    <React.Fragment>
      <div className="movie-content">
        {loadMovie.map(movie => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <p>{movie.mpaa.mpaaRating}</p>
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
                {movie.showing && (
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