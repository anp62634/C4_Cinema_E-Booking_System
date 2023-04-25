package org.example.repository;
import org.example.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface BookingRepository extends JpaRepository<Booking,Integer>{

      Booking save(Booking booking); // Save a booking to the database

      List<Booking> findAll(); // Retrieve all bookings from the database

      Optional<Booking> findById(Integer bookingId);

    int countBookingByShowtimeIDAndShowroomID(Integer showtimeId, Integer showroomId);

    //retrieves a booking record with the specified ID from the database
    Optional<Booking> findBySeatIDAndShowtimeIDAndShowroomID(Integer showtimeID, Integer showroomID, Integer seatID);

   void deleteById(int id); // Delete a booking by its ID
}
