/*package org.example.model;

import jakarta.persistence.*;

import java.sql.Time;

@Entity
@Table(name = "Showtime")
public class Showtime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "showtimeID")
    private int showtimeID;

    @Column(name = "showTime")
    private Time showTime;

    public Showtime() {
    }

    public int getShowtimeID() {
        return showtimeID;
    }

    public void setShowtimeID(int showtimeID) {
        this.showtimeID = showtimeID;
    }

    public Time getShowTime() {
        return showTime;
    }

    public void setShowTime(Time showTime) {
        this.showTime = showTime;
    }

    @Override
    public String toString() {
        return "Showtime{" +
                "showtimeID=" + showtimeID +
                ", showTime=" + showTime +
                '}';
    }
}

*/