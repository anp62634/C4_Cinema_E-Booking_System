package org.example.service;

import org.example.model.Movie;

import java.util.List;

public interface MovieService {
    public Movie saveMovie(Movie movie);
    public List<Movie> getAllMovies();
}

