import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function AddMovie() {
    const navigate = useNavigate();

    const[title, setTitle]=useState('');
    const[mpaa, setMpaa]=useState('');
    const[genre, setGenre]=useState('');
    const[cast, setCast]=useState('');
    const[director, setDirector]=useState('');
    const[producer, setProducer]=useState('');
    const[synopsis, setSynopsis]=useState('');
    const[poster, setPoster]=useState('');
    const[trailer, setTrailer]=useState('');
    const[checked, setChecked]=useState(false);
    const[showing, setShowing]=useState(0);
    const[runtime, setRuntime]=useState('0');

    const handleShowing = () => {
        setChecked(!checked);
        setShowing(showing ? 0 : 1);
    }
     
    const confirmAddHandler = (e) => {
        e.preventDefault()
        const movie={title, genre, cast, director, producer, synopsis, poster, trailer, showing, mpaa}
        console.log(movie)
        fetch("http://localhost:8080/movie/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(movie)
        }).then(()=>{
        console.log('Movie Updated...');
        })
    };

    return (
    <React.Fragment>
        {/* Form to add a new movie */}
        <div className="auth">
            <form className="form">
                <div className="input-group">
                    <h3>Add Movie Information</h3>
                    <label htmlFor="movie-name">Movie Name</label>
                    <input type="text" name="movie-name" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                    <label htmlFor="movie-rating">Movie Rating</label>
                    <input type="text" name="movie-rating" placeholder="" value={mpaa} onChange={(e)=>setMpaa(e.target.value)}/>
                    <label htmlFor="movie-category">Movie Category</label>
                    <input type="text" name="movie-category" placeholder="" value={genre} onChange={(e)=>setGenre(e.target.value)} required/>
                    <label htmlFor="movie-cast">Movie Cast</label>
                    <input type="text" name="movie-cast" placeholder="" value={cast} onChange={(e)=>setCast(e.target.value)} required/>
                    <label htmlFor="movie-director">Movie Director</label>
                    <input type="text" name="movie-director" placeholder="" value={director} onChange={(e)=>setDirector(e.target.value)} required/>
                    <label htmlFor="movie-producer">Movie Producer</label>
                    <input type="text" name="movie-producer" placeholder="" value={producer} onChange={(e)=>setProducer(e.target.value)} required/>
                    <label htmlFor="movie-description">Movie Description</label>
                    <input type="text" name="movie-description" placeholder="" value={synopsis} onChange={(e)=>setSynopsis(e.target.value)} required/>
                    <label htmlFor="movie-poster">Movie Poster</label>
                    <input type="text" name="movie-poster" placeholder="" value={poster} onChange={(e)=>setPoster(e.target.value)} required/>
                    <label htmlFor="movie-trailer">Movie Trailer</label>
                    <input type="text" name="movie-trailer" placeholder="" value={trailer} onChange={(e)=>setTrailer(e.target.value)} required/>
                    <div>
                        <label htmlFor="currentlyshowing">Will Movie be Currently Showing</label>
                        <input type="checkbox" name="currentlyshowing"  onChange={handleShowing}/>
                    </div>
                    <label htmlFor="movie-showdate">Movie Show Date</label>
                    <input type="text" name="movie-showdate" placeholder="" />
                    {/*<label htmlFor="movie-showtime">Movie Show Time</label>
                    <input type="number" name="movie-showtime" min="0" max="5" step="0.01" value={runtime} onChange={(e)=>setRuntime(e.target.value)}  placeholder="" />*/}
                </div>
                <div className='movie-btn'>
                    <input type="submit" onClick={confirmAddHandler} value="SAVE"/>
                </div>
            </form>
        </div>
    </React.Fragment>
    );
};
