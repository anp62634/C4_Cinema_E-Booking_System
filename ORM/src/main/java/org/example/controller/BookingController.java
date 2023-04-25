package org.example.controller;
import org.example.dto.BookingDTO;
import org.example.dto.UserDTO;
import org.example.model.Booking;
import org.example.model.User;
import org.example.response.UserResponse;
//import org.example.service.EmailService;
//import org.example.service.EmailServiceImp;
import org.example.service.BookingService;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;


    @PostMapping("/save")
    public ResponseEntity<?> saveBooking(@RequestBody BookingDTO book  /**,HttpServletRequest request*/  )  /**throws MessagingException, UnsupportedEncodingException*/ {
        UserResponse bookingResponse = bookingService.addBooking(book);
        //String siteURL = emailService.getSiteURL(request);
        //userService.sendVerificationEmail(userDTO/**, siteURL*/ );
        return ResponseEntity.ok(bookingResponse);

    }

    @GetMapping("/getAll")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/getID")
    public Optional<Booking> getBookingById(@RequestParam("bookingId") Integer bookingId) {
        return bookingService.getBookingById(bookingId);
    }

}
