package org.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movieID")
    private int movieID;

    @Column(name = "title")
    private String title;

    @Column(name = "genre")
    private String genre;

    @Column(name = "cast")
    private String cast;

    @Column(name = "director")
    private String director;

    @Column(name = "producer")
    private String producer;

    @Column(name = "synopsis")
    private String synopsis;

    @Column(name = "reviews")
    private String reviews;

    @Column(name = "trailerPic")
    private String trailerPic;

    @Column(name = "trailerVid")
    private String trailerVid;

    @Column(name = "runtime")
    private double runtime;



    @ManyToOne
    @JoinColumn(name = "mpaaID")
    private MPAA mpaa;

    public Movie() {}

    public Movie(String title, String genre, String cast, String director, String producer, String synopsis, String reviews, String trailerPic, String trailerVid ,double runtime , MPAA mpaa) {
        this.title = title;
        this.genre = genre;
        this.cast = cast;
        this.director = director;
        this.producer = producer;
        this.synopsis = synopsis;
        this.reviews = reviews;
        this.trailerPic = trailerPic;
        this.trailerVid = trailerVid;
       this.runtime = runtime;
        //this.mpaa = mpaa;

    }


    public int getMovieID() {
        return movieID;
    }

    public void setMovieID(int movieID) {
        this.movieID = movieID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getCast() {
        return cast;
    }

    public void setCast(String cast) {
        this.cast = cast;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public String getReviews() {
        return reviews;
    }

    public void setReviews(String reviews) {
        this.reviews = reviews;
    }

    public String getTrailerPic() {
        return trailerPic;
    }

    public void setTrailerPic(String trailerPic) {
        this.trailerPic = trailerPic;
    }

    public String getTrailerVid() {
        return trailerVid;
    }

    public void setTrailerVid(String trailerVid) {
        this.trailerVid = trailerVid;
    }

    public double getRuntime() {
        return runtime;
    }

    public void setRuntime(double runtime) {
        this.runtime = runtime;
    }

    public MPAA getMpaa() {
        return mpaa;
    }

    public void setMpaa(MPAA mpaa) {
        this.mpaa = mpaa;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "movieID=" + movieID +
                ", title='" + title + '\'' +
                ", genre='" + genre + '\'' +
                ", cast='" + cast + '\'' +
                ", director='" + director + '\'' +
                ", producer='" + producer + '\'' +
                ", synopsis='" + synopsis + '\'' +
                ", reviews='" + reviews + '\'' +
                ", trailerPic='" + trailerPic + '\'' +
                ", trailerVid='" + trailerVid + '\'' +
                ", runtime=" + runtime +
                ", mpaa=" + mpaa +
                '}';
    }
}

