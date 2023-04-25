package org.example.model;

import jakarta.persistence.*;
import org.example.model.Movie;
import org.example.model.Showroom;
import org.example.model.Showtime;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;
@Entity
@Table(name = "Screening")
public class Screening {

    @EmbeddedId
    private ScreeningId id;

    @Column(name = "seats_available")
    private Integer seatsAvailable;

    public Screening() {}

    public Screening(LocalDate showDate, Integer showroomId, Integer seatsAvailable) {
        this.id = new ScreeningId(showDate, showroomId);
        this.seatsAvailable = seatsAvailable;
    }

    public ScreeningId getId() {
        return id;
    }

    public void setId(ScreeningId id) {
        this.id = id;
    }

    public Integer getSeatsAvailable() {
        return seatsAvailable;
    }

    public void setSeatsAvailable(Integer seatsAvailable) {
        this.seatsAvailable = seatsAvailable;
    }

    @Override
    public String toString() {
        return "Screening{" +
                "id=" + id +
                ", seatsAvailable=" + seatsAvailable +
                '}';
    }
}

@Embeddable
class ScreeningId implements Serializable {

    @Column(name = "show_date")
    private LocalDate showDate;

    @Column(name = "showroom_id")
    private Integer showroomId;

    public ScreeningId() {
    }

    public ScreeningId(LocalDate showDate, Integer showroomId) {
        this.showDate = showDate;
        this.showroomId = showroomId;
    }

    public LocalDate getShowDate() {
        return showDate;
    }

    public void setShowDate(LocalDate showDate) {
        this.showDate = showDate;
    }

    public Integer getShowroomId() {
        return showroomId;
    }

    public void setShowroomId(Integer showroomId) {
        this.showroomId = showroomId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ScreeningId)) return false;
        ScreeningId that = (ScreeningId) o;
        return Objects.equals(getShowDate(), that.getShowDate()) &&
                Objects.equals(getShowroomId(), that.getShowroomId());
    }
}
