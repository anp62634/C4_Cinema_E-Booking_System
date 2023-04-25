package org.example.dto;

import org.example.model.Booking;
import org.example.model.Ticket;
import org.example.model.TicketType;

import java.util.List;

public class BookingDTO {

    private int bookingID;
    private int numTickets;
    private double price;
    private int userId;
    private int promoId;
    private String cardNo;
    private String showDate;
    private int showtimeID;
    private int showroomID;
    private int seatID;
    private List<Ticket> tickets;


    public BookingDTO() {
    }

    public BookingDTO(int numTickets, double price, int userId, int promoId, String cardNo, String showDate, int showtimeID, int showroomID, int seatID, List<Ticket> tickets) {
        this.numTickets = numTickets;
        this.price = price;
        this.userId = userId;
        this.promoId = promoId;
        this.cardNo = cardNo;
        this.showDate = showDate;
        this.showtimeID = showtimeID;
        this.showroomID = showroomID;
        this.seatID = seatID;
        this.tickets = tickets;
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

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getPromoId() {
        return promoId;
    }

    public void setPromoId(int promoId) {
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

    public void setShowtimeID(int showtimeID) {
        this.showtimeID = showtimeID;
    }

    public int getShowroomID() {
        return showroomID;
    }

    public void setShowroomID(int showroomID) {
        this.showroomID = showroomID;
    }

    public int getSeatID() {
        return seatID;
    }

    public void setSeatID(int seatID) {
        this.seatID = seatID;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}