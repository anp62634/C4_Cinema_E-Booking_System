package org.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "MPAA")
public class MPAA {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mpaaID")
    private int mpaaID;

    @Column(name = "mpaaRating", nullable = false)
    private String mpaaRating;

    // Constructors
    public MPAA() {}

    public MPAA(String mpaaRating) {
        this.mpaaRating = mpaaRating;
    }

    // Getters and setters
    public int getMpaaID() {
        return mpaaID;
    }

    public void setMpaaID(int mpaaID) {
        this.mpaaID = mpaaID;
    }

    public String getMpaaRating() {
        return mpaaRating;
    }

    public void setMpaaRating(String mpaaRating) {
        this.mpaaRating = mpaaRating;
    }

    // toString method
    @Override
    public String toString() {
        return "MPAA [mpaaID=" + mpaaID + ", mpaaRating=" + mpaaRating + "]";
    }
}