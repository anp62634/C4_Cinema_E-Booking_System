import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function AddMovie() {
    const navigate = useNavigate();

    const[title, setTitle]=useState('');
   // const[mpaa, setMpaa]=useState('');
    const[genre, setGenre]=useState('');
    const[cast, setCast]=useState('');
    const[director, setDirector]=useState('');
    const[producer, setProducer]=useState('');
    const[desc, setSynopsis]=useState('');
    const[checked, setChecked]=useState(false);
    const[isShowing, setIsShowing]=useState(0);
    const[runtime, setRuntime]=useState('0');

    const cancelAddHandler = () => {
        navigate('/adminview/managemovies');
    };

    const handleShowing = () => {
        setChecked(!checked);
        setIsShowing(isShowing ? 0 : 1);
    }
     
    const confirmAddHandler = (e) => {
        e.preventDefault()
        const movie={title, genre, cast, director, producer, desc, isShowing, runtime}
        console.log(movie)
        fetch("http://localhost:8080/movie/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(movie)
        }).then(()=>{
        console.log('Movie Updated...');
        })
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
                    <input type="text" name="movie-name" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                    <label htmlFor="movie-rating">Movie Rating</label>
                    <input type="text" name="movie-rating" placeholder="" /**value={mpaa} onChange={(e)=>setMpaa(e.target.value)} *//>
                    <label htmlFor="movie-category">Movie Category</label>
                    <input type="text" name="movie-category" placeholder="" value={genre} onChange={(e)=>setGenre(e.target.value)} required/>
                    <label htmlFor="movie-cast">Movie Cast</label>
                    <input type="text" name="movie-cast" placeholder="" value={cast} onChange={(e)=>setCast(e.target.value)} required/>
                    <label htmlFor="movie-director">Movie Director</label>
                    <input type="text" name="movie-director" placeholder="" value={director} onChange={(e)=>setDirector(e.target.value)} required/>
                    <label htmlFor="movie-producer">Movie Producer</label>
                    <input type="text" name="movie-producer" placeholder="" value={producer} onChange={(e)=>setProducer(e.target.value)} required/>
                    <label htmlFor="movie-description">Movie Description</label>
                    <input type="text" name="movie-description" placeholder="" value={desc} onChange={(e)=>setSynopsis(e.target.value)} required/>
                    <div>
                        <label htmlFor="currentlyshowing">Will Movie be Currently Showing</label>
                        <input type="checkbox" name="currentlyshowing"  onChange={handleShowing}/>
                    </div>
                    <label htmlFor="movie-showdate">Movie Show Date</label>
                    <input type="text" name="movie-showdate" placeholder="" />
                    <label htmlFor="movie-showtime">Movie Show Time</label>
                    <input type="number" name="movie-showtime" min="0" max="5" step="0.01" value={runtime} onChange={(e)=>setRuntime(e.target.value)}  placeholder="" />
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
