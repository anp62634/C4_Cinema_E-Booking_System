import React, { useState, useEffect } from "react";
import NavBar from './Components/NavBar';
import { Movies } from './MovieSamples';
import MovieCard from "./Components/MovieCard";
import Footer from "./Components/Footer"

export default function BrowseMovies() {
    const [filteredList1, setFilteredList1] = useState(Movies.Showing);
    const [filteredList2, setFilteredList2] = useState(Movies.NotShowing);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [isDateSelected, setIsDateSelected]= useState(false);

    // list of movies by Search
    const filterBySearch = (filteredData) => {
        // Avoid filter for empty string
        if (!searchQuery) {
            return filteredData;
        }

        const filteredMovies = filteredData.filter((movie) => movie.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);
        return filteredMovies;
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // list of movies by Category
    const filterByCategory = (filteredData) => {
        // Avoid filter for null value
        if (!selectedCategory) {
            return filteredData;
        }

        const filteredMovies = filteredData.filter((movie) => movie.category.includes(selectedCategory));
        return filteredMovies;
    };

    const handleCategory = (event) => {
        setSelectedCategory(event.target.value);
    };

    // list of movies by Date
    const filterByDate = (filteredData) => {
        // Avoid filter for null value
        if (!selectedDate) {
            return filteredData;
        }

        if(selectedDate === "" || selectedDate === null) {
            setIsDateSelected(false);
        } else {
            setIsDateSelected(true);
        }

        const filteredMovies = filteredData.filter((movie) => movie.showDate.includes(selectedDate));
        return filteredMovies;
    };

    const handleDate = (event) => {
        setSelectedDate(event.target.value);
    };

    // in case all filters are in use
    useEffect(() => {
        var filteredData1 = filterBySearch(Movies.Showing);
        filteredData1 = filterByCategory(filteredData1);
        filteredData1 = filterByDate(filteredData1);
        setFilteredList1(filteredData1);
    }, [searchQuery, selectedCategory, selectedDate]); 

    // For movies not being shown yet
    useEffect(() => {
        var filteredData2 = filterBySearch(Movies.NotShowing);
        filteredData2 = filterByCategory(filteredData2);
        filteredData2 = filterByDate(filteredData2);
        setFilteredList2(filteredData2);
    }, [searchQuery, selectedCategory]);
    
    return(
        <React.Fragment>
            <NavBar/>
            <div className="browse-movies">
                {/* Search Bar */}
                <form className="movie-search" action="#">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch} />
                    <button type="submit">Search</button>
                </form>

                {/* Category Drop Down List */}
                <div>
                    <div className="filter-option">
                        <select onChange={handleCategory} className="select-input">
                            <option value="">Filter By Category</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                            <option value="Kids and Family">Kids and Family</option>
                            <option value="Sci-fi">Sci-Fi</option>
                        </select>
                    </div>

                    {/* Date Drop Down List */}
                    <div className="filter-option">
                        <select onChange={handleDate} className="select-input">
                            <option value="" onChange={handleDate}>Filter By Date</option>
                            <option value="02-22-2023">02-22-2023</option>
                            <option value="02-28-2023">02-28-2023</option>
                            <option value="03-01-2023">03-01-2023</option>
                        </select>
                    </div>
                </div>

                {/* Displays Movies */}
                <div className="search-list">
                    {/* Movies Being Shown */}
                    <div>
                        {filteredList1.map((movie) => (
                            <div key={movie.id} className="search-listItem"><MovieCard items={movie} isDate={isDateSelected}/></div>
                        ))}

                        {/* Movies Coming Soon */}
                        {filteredList2.map((movie, index) => (
                            <div>
                                {!isDateSelected && (
                                    <div className="search-listItem"><MovieCard items={movie} isDate={isDateSelected}/></div>
                                )}
                            </div>
                        ))}   

                        {/* If no movies are found in search */}
                        {filteredList1.length === 0 && (
                            <div className="no-movies">
                                {filteredList2.length === 0 && (
                                    <div><h2>No Movies Found</h2></div>
                                )}  
                            </div>
                        )}  
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};