/*package org.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Showroom")
public class Showroom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "showroomID")
    private int showroomID;

    @Column(name = "name")
    private String name;

    @Column(name = "seats")
    private int seats;

    public Showroom() {
    }

    public Showroom(String name, int seats) {
        this.name = name;
        this.seats = seats;
    }

    public int getShowroomID() {
        return showroomID;
    }

    public void setShowroomID(int showroomID) {
        this.showroomID = showroomID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    @Override
    public String toString() {
        return "Showroom [showroomID=" + showroomID + ", name=" + name + ", seats=" + seats + "]";
    }
}
*/