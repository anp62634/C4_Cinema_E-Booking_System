import React from 'react';
import MovieList from '../MovieList'
import NavBar from './NavBar';
import Footer from './Footer';
import { Movies} from '../MovieSamples';
import '../style.css';

export default function Homepage() {
    return (
        <React.Fragment>
            <NavBar />
            {/* Movies Poster Slideshow Display */}
            <header>
                <div className="poster-slider">
                    <div className="imagegroup">
                        <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/229649/SMB_2023.jpg" alt=''/>
                        <img src="https://imgc.allpostersimages.com/img/posters/once-upon-a-time-in-hollywood_u-L-F9JL6E0.jpg" alt=''/>
                        <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/bohemian-rhapsody-web.jpg" alt=''/>
                        <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers-infinity-war_89e0d364_240x360_crop_center.progressive.jpg?v=1631200474" alt=''/>
                        <img src="https://www.theilluminerdi.com/wp-content/uploads/2022/09/black-adam-heroes.jpg" alt=''/>
                        <img src="https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg" alt=''/>
                        <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/228578/JW4_RGB.jpg" alt=''/>
                    </div>
                </div>
            </header>

            {/* Currently Showing Section */}
            <div className="categories">
                <h1>Currently Showing</h1> 
                <MovieList/>
            </div>

            {/* Coming Soon Section */}
            <div className="categories">
                <h1>Coming Soon</h1>
                <MovieList/>
            </div>
            <Footer/>
        </React.Fragment>
    );
};