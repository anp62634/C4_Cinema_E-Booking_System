/*package org.example.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "Screening")
public class Screening {

    @EmbeddedId
    private ScreeningPK screeningPK;

    @Column(name = "seatsAvailable")
    private Integer seatsAvailable;

    @ManyToOne(optional = false)
    @JoinColumn(name = "movieID", referencedColumnName = "movieID", insertable = false, updatable = false)
    private Movie movie;

    @ManyToOne(optional = false)
    @JoinColumn(name = "showroomID", referencedColumnName = "showroomID", insertable = false, updatable = false)
    private Showroom showroom;

    @ManyToOne(optional = false)
    @JoinColumn(name = "showtimeID", referencedColumnName = "showtimeID", insertable = false, updatable = false)
    private Showtime showtime;

    public Screening() {}

    public Screening(LocalDate showDate, Integer showtimeID, Integer showroomID, Integer seatsAvailable, Movie movie, Showroom showroom, Showtime showtime) {
        this.screeningPK = new ScreeningPK(showDate, showtimeID, showroomID);
        this.seatsAvailable = seatsAvailable;
        this.movie = movie;
        this.showroom = showroom;
        this.showtime = showtime;
    }


    public ScreeningPK getScreeningPK() {
        return screeningPK;
    }

    public void setScreeningPK(ScreeningPK screeningPK) {
        this.screeningPK = screeningPK;
    }

    public Integer getSeatsAvailable() {
        return seatsAvailable;
    }

    public void setSeatsAvailable(Integer seatsAvailable) {
        this.seatsAvailable = seatsAvailable;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Showroom getShowroom() {
        return showroom;
    }

    public void setShowroom(Showroom showroom) {
        this.showroom = showroom;
    }

    public Showtime getShowtime() {
        return showtime;
    }

    public void setShowtime(Showtime showtime) {
        this.showtime = showtime;
    }

    @Override
    public String toString() {
        return "Screening{" +
                "screeningPK=" + screeningPK +
                ", seatsAvailable=" + seatsAvailable +
                '}';
    }
}

@Embeddable
class ScreeningPK implements Serializable {

    @Column(name = "showDate")
    private LocalDate showDate;

    @Column(name = "showtimeID")
    private Integer showtimeID;

    @Column(name = "showroomID")
    private Integer showroomID;

    public ScreeningPK() {
    }

    public ScreeningPK(LocalDate showDate, Integer showtimeID, Integer showroomID) {
        this.showDate = showDate;
        this.showtimeID = showtimeID;
        this.showroomID = showroomID;
    }

    public LocalDate getShowDate() {
        return showDate;
    }

    public void setShowDate(LocalDate showDate) {
        this.showDate = showDate;
    }

    public Integer getShowtimeID() {
        return showtimeID;
    }

    public void setShowtimeID(Integer showtimeID) {
        this.showtimeID = showtimeID;
    }

    public Integer getShowroomID() {
        return showroomID;
    }

    public void setShowroomID(Integer showroomID) {
        this.showroomID = showroomID;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ScreeningPK)) return false;
        ScreeningPK that = (ScreeningPK) o;
        return Objects.equals(getShowDate(), that.getShowDate()) &&
                Objects.equals(getShowtimeID(), that.getShowtimeID()) &&
                Objects.equals(getShowroomID(), that.getShowroomID());
    }

    // hashcode
    @Override
    public int hashCode() {
        return Objects.hash(getShowDate(), getShowtimeID(), getShowroomID());
    }

}*/
