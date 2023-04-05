/*package org.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookingID")
    private int bookingID;

    @Column(name = "numTickets")
    private int numTickets;

    @Column(name = "price")
    private double price;

    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "promoID")
    private Promotion promotion;

    @ManyToOne
    @JoinColumn(name = "cardNo")
    private Account account;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "showDate", referencedColumnName = "showDate"),
            @JoinColumn(name = "showtimeID", referencedColumnName = "showtimeID"),
            @JoinColumn(name = "showroomID", referencedColumnName = "showroomID")
    })
    private Screening screening;

    public Booking() {
    }

    public Booking(int numTickets, double price, User user, Promotion promotion, Account account, Screening screening) {
        this.numTickets = numTickets;
        this.price = price;
        this.user = user;
        this.promotion = promotion;
        this.account = account;
        this.screening = screening;
    }

    public int getBookingID() {
        return bookingID;
    }

    public void setBookingID(int bookingID) {
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Screening getScreening() {
        return screening;
    }

    public void setScreening(Screening screening) {
        this.screening = screening;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "bookingID=" + bookingID +
                ", numTickets=" + numTickets +
                ", price=" + price +
                ", user=" + user +
                ", promotion=" + promotion +
                ", account=" + account +
                ", screening=" + screening +
                '}';
    }
}

 */
