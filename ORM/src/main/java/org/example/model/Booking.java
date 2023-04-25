
package org.example.model;

import jakarta.persistence.*;
import org.example.model.Ticket;

import java.util.List;

@Entity
@Table(name = "Booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookingID")
    private Integer bookingID;

    @Column(name = "numTickets")
    private int numTickets;

    @Column(name = "price")
    private double price;

    @Column(name = "userId")
    private Integer userId;

    @Column(name = "promoId")
    private Integer promoId;

    @Column(name = "cardNo")
    private String cardNo;

    @Column(name = "showDate")
    private String showDate;

    @Column(name = "showtimeID")
    private int showtimeID;

    @Column(name = "showroomID")
    private int showroomID;


    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "bookingID")
    private List<Ticket> tickets;


    public Booking() {
    }

    public Booking(int numTickets, double price, Integer userId, Integer promoId, String cardNo, String showDate, Integer showtimeID, Integer showroomID, List<Ticket> tickets) {
        this.numTickets = numTickets;
        this.price = price;
        this.userId = userId;
        this.promoId = promoId;
        this.cardNo = cardNo;
        this.showDate = showDate;
        this.showtimeID = showtimeID;
        this.showroomID = showroomID;
        this.tickets = tickets;
    }


    public int getBookingID() {
        return bookingID;
    }

    public void setBookingID(Integer bookingID) {
        this.bookingID = bookingID;
    }

    public int getNumTickets() {
        return numTickets;
    }

    public void setNumTickets(int numTickets) {
        this.numTickets = numTickets;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public int getPromoId() {
        return promoId;
    }

    public void setPromoId(Integer promoId) {
        this.promoId = promoId;
    }

    public String getCardNo() {
        return cardNo;
    }

    public void setCardNo(String cardNo) {
        this.cardNo = cardNo;
    }

    public String getShowDate() {
        return showDate;
    }

    public void setShowDate(String showDate) {
        this.showDate = showDate;
    }

    public int getShowtimeID() {
        return showtimeID;
    }

    public void setShowtimeID(Integer showtimeID) {
        this.showtimeID = showtimeID;
    }

    public int getShowroomID() {
        return showroomID;
    }

    public void setShowroomID(Integer showroomID) {
        this.showroomID = showroomID;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}

