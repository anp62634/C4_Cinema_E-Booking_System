/*package org.example.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
@IdClass(SeatId.class)
@Table(name = "Seat")
public class Seat {

    @Id
    @Column(name = "row")
    private int row;

    @Id
    @Column(name = "col")
    private int col;

    @Id
    @ManyToOne
    @JoinColumn(name = "showroomID", referencedColumnName = "showroomID")
    private Showroom showroom;

    public Seat() {
    }

    public Seat(int row, int col, Showroom showroom) {
        this.row = row;
        this.col = col;
        this.showroom = showroom;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getCol() {
        return col;
    }

    public void setCol(int col) {
        this.col = col;
    }

    public Showroom getShowroom() {
        return showroom;
    }

    public void setShowroom(Showroom showroom) {
        this.showroom = showroom;
    }
}

class SeatId implements Serializable {

    private int row;
    private int col;
    private int showroom;

    public SeatId() {
    }

    public SeatId(int row, int col, int showroom) {
        this.row = row;
        this.col = col;
        this.showroom = showroom;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getCol() {
        return col;
    }

    public void setCol(int col) {
        this.col = col;
    }

    public int getShowroom() {
        return showroom;
    }

    public void setShowroom(int showroom) {
        this.showroom = showroom;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SeatId seatId = (SeatId) o;
        return row == seatId.row && col == seatId.col && showroom == seatId.showroom;
    }

    @Override
    public int hashCode() {
        return Objects.hash(row, col, showroom);
    }
}*/
