package org.example.model;

import jakarta.persistence.*;
import org.hibernate.engine.internal.Cascade;

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

    @Column(name = "synopsis", columnDefinition = "longtext")
    private String synopsis;

    @Column(name = "reviews")
    private String reviews;

    @Column(name = "poster")
    private String poster;

    @Column(name = "trailer")
    private String trailer;

    @Column(name = "runtime")
    private double runtime;

    @Column(name = "showing")
    private boolean showing;

    @ManyToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "mpaaID", nullable=false)
    private MPAA mpaa;

    public Movie() {}

    public Movie(String title, String genre, String cast, String director, String producer, String synopsis, String reviews, String poster, String trailer ,double runtime, boolean showing, MPAA mpaa) {
        this.title = title;
        this.genre = genre;
        this.cast = cast;
        this.director = director;
        this.producer = producer;
        this.synopsis = synopsis;
        this.reviews = reviews;
        this.poster = poster;
        this.trailer = trailer;
        this.runtime = runtime;
        this.showing = showing;
        this.mpaa = mpaa;
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

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
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

    public boolean isShowing() {
        return showing;
    }

    public void setShowing(boolean showing) {
        this.showing = showing;
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
                ", poster='" + poster + '\'' +
                ", trailer='" + trailer + '\'' +
                ", runtime=" + runtime +
                ", showing=" + showing +
                ", mpaa=" + mpaa +
                '}';
    }
}
