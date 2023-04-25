package org.example.service;

import org.example.dto.BookingDTO;
import org.example.dto.UserDTO;
import org.example.model.Booking;

import org.example.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface BookingService {

    UserResponse addBooking(BookingDTO ticket);
    public Booking saveBooking(Booking booking);
    public List<Booking> getAllBookings();
    public Optional<Booking> getBookingById(Integer bookingId);
    public void deleteBookingById(Integer bookingId);
}

