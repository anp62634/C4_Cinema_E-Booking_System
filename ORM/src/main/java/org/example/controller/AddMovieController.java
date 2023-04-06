package org.example.controller;

import org.example.model.Movie;
import org.example.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie")
@CrossOrigin
public class AddMovieController {
    @Autowired
    private MovieService movieService;

    @PostMapping("/add")
    public String add(@RequestBody Movie movie){
        movieService.saveMovie(movie);
        return "New movie is added";
    }

    @GetMapping("/getAll")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

}

