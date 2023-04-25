package org.example.service;

import org.example.dto.BookingDTO;
import org.example.model.Booking;
//import org.example.model.Seat;
import org.example.repository.BookingRepository;
import org.example.repository.SeatRepository;
import org.example.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImp implements BookingService {


    private final BookingRepository bookingRepository;
    private final SeatRepository seatRepository;



    @Autowired
    public BookingServiceImp(BookingRepository bookingRepository, SeatRepository seatRepository /**, UserRepository userRepository*/) {
        this.bookingRepository = bookingRepository;
        this.seatRepository = seatRepository;
        //explicitly defines it so it cannot be null.
    }
    @Override
    public UserResponse addBooking(BookingDTO ticket) {
            // Create a new Booking object from the DTO

        Booking booking = new Booking(
                ticket.getNumTickets(),
                ticket.getPrice(),
                ticket.getUserId(),
                ticket.getPromoId(),
                ticket.getCardNo(),
                ticket.getShowDate(),
                ticket.getShowtimeID(),
                ticket.getShowroomID(),
                ticket.getTickets()
        );

        // Get the existing booking object and update its data
        // Optional<Booking> booked = bookingRepository.findById(ticket.getBookingID());
      //  Optional<Booking> booked = getBookingById(ticket.getBookingID());
       boolean seatAvailable = isSeatAvailable(ticket.getShowtimeID(), ticket.getShowroomID(), ticket.getSeatID());
      try {
          if (seatAvailable) {
              saveBooking(booking);
              seatRepository.updateSeatAvailability(ticket.getSeatID(), true);
              return new UserResponse("Booking successful", true);
          } else {
              return new UserResponse("Booking failed", false);
          }
      } catch (NullPointerException ne) {
          return new UserResponse("Booking failed", false);
      }

    }


    private boolean isSeatAvailable(Integer showtimeId, Integer showroomId, Integer seatId) {
        // Check if the seat is available
        // Check how many seats are available in the showroom
        int numSeatsBooked = bookingRepository.countBookingByShowtimeIDAndShowroomID(showtimeId, showroomId);
        int totalNumSeats = seatRepository.countSeatsByShowtimeIdAndShowroomId(showtimeId, showroomId);
        int numSeatsAvailable = totalNumSeats - numSeatsBooked;
        if (numSeatsAvailable == 0) {
            return false; // No seats available in the showroom
        }
        Optional<Booking> booking = bookingRepository.findBySeatIDAndShowtimeIDAndShowroomID(showtimeId, showroomId, seatId);
        if (!booking.isEmpty()) {
            return false; // Seat is taken
        }

        return true; // Seat is available and there are available seats in the showroom
    }


    @Override
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Optional<Booking> getBookingById(Integer bookingId) {
        return bookingRepository.findById(bookingId);
    }


    @Override
    public void deleteBookingById(Integer bookingId) {
        bookingRepository.deleteById(bookingId);
    }

}