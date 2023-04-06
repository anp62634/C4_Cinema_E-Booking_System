package org.example.service;

import org.example.model.MPAA;
import org.example.model.Movie;
import org.example.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImp implements MovieService{
    @Autowired
    private MovieRepository movieRepository;


    @Override
    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }

   /** public MPAA saveMPA(MPAA rate) {
        return movieRepository.save(movie);
    } */

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

}
