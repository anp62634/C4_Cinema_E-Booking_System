-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`UserType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`UserType` ;

CREATE TABLE IF NOT EXISTS `mydb`.`UserType` (
  `typeID` INT NOT NULL AUTO_INCREMENT,
  `typeName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`typeID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Status` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Status` (
  `statusID` INT NOT NULL AUTO_INCREMENT,
  `statusName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`statusID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User` ;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `enrolledForPromo` TINYINT(1) NULL,
  `address` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `zip` VARCHAR(45) NULL,
  `typeID` INT NOT NULL,
  `statusID` INT NOT NULL,
  PRIMARY KEY (`userID`),
  INDEX `fk_User_UserType1_idx` (`typeID` ASC) VISIBLE,
  INDEX `fk_User_Status1_idx` (`statusID` ASC) VISIBLE,
  CONSTRAINT `fk_User_UserType1`
    FOREIGN KEY (`typeID`)
    REFERENCES `mydb`.`UserType` (`typeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_Status1`
    FOREIGN KEY (`statusID`)
    REFERENCES `mydb`.`Status` (`statusID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`BillingAddress`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`BillingAddress` ;

CREATE TABLE IF NOT EXISTS `mydb`.`BillingAddress` (
  `billingID` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `zip` VARCHAR(45) NULL,
  PRIMARY KEY (`billingID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Account`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Account` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Account` (
  `cardNo` VARCHAR(16) NOT NULL,
  `CVV` INT NULL,
  `cardType` VARCHAR(45) NULL,
  `expiration` DATE NULL,
  `userID` INT NOT NULL,
  `billingID` INT NOT NULL,
  PRIMARY KEY (`cardNo`),
  INDEX `fk_Account_User_idx` (`userID` ASC) VISIBLE,
  INDEX `fk_Account_BillingAddress1_idx` (`billingID` ASC) VISIBLE,
  CONSTRAINT `fk_Account_User`
    FOREIGN KEY (`userID`)
    REFERENCES `mydb`.`User` (`userID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Account_BillingAddress1`
    FOREIGN KEY (`billingID`)
    REFERENCES `mydb`.`BillingAddress` (`billingID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Promotion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Promotion` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Promotion` (
  `promoID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `discount` DECIMAL(3,2) NULL,
  PRIMARY KEY (`promoID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`MPAA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`MPAA` ;

CREATE TABLE IF NOT EXISTS `mydb`.`MPAA` (
  `mpaaID` INT NOT NULL AUTO_INCREMENT,
  `mpaaRating` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`mpaaID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Movie`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Movie` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Movie` (
  `movieID` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `genre` VARCHAR(45) NULL,
  `cast` VARCHAR(45) NULL,
  `director` VARCHAR(45) NULL,
  `producer` VARCHAR(45) NULL,
  `synopsis` VARCHAR(45) NULL,
  `reviews` VARCHAR(45) NULL,
  `trailerPic` VARCHAR(45) NULL,
  `trailerVid` VARCHAR(45) NULL,
  `runtime` DECIMAL(3,2) NULL,
  `mpaaID` INT NOT NULL,
  PRIMARY KEY (`movieID`),
  INDEX `fk_Movie_MPAA1_idx` (`mpaaID` ASC) VISIBLE,
  CONSTRAINT `fk_Movie_MPAA1`
    FOREIGN KEY (`mpaaID`)
    REFERENCES `mydb`.`MPAA` (`mpaaID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Showroom`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Showroom` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Showroom` (
  `showroomID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `seats` INT NULL,
  PRIMARY KEY (`showroomID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Showtime`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Showtime` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Showtime` (
  `showtimeID` INT NOT NULL AUTO_INCREMENT,
  `showTime` TIME NOT NULL,
  PRIMARY KEY (`showtimeID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Screening`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Screening` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Screening` (
  `showDate` DATE NOT NULL,
  `showtimeID` INT NOT NULL,
  `showroomID` INT NOT NULL,
  `seatsAvailable` INT NULL,
  `movieID` INT NOT NULL,
  PRIMARY KEY (`showDate`, `showtimeID`, `showroomID`),
  INDEX `fk_Screening_Movie1_idx` (`movieID` ASC) VISIBLE,
  INDEX `fk_Screening_Showroom1_idx` (`showroomID` ASC) VISIBLE,
  INDEX `fk_Screening_Showtime1_idx` (`showtimeID` ASC) VISIBLE,
  CONSTRAINT `fk_Screening_Movie1`
    FOREIGN KEY (`movieID`)
    REFERENCES `mydb`.`Movie` (`movieID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Screening_Showroom1`
    FOREIGN KEY (`showroomID`)
    REFERENCES `mydb`.`Showroom` (`showroomID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Screening_Showtime1`
    FOREIGN KEY (`showtimeID`)
    REFERENCES `mydb`.`Showtime` (`showtimeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Booking`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Booking` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Booking` (
  `bookingID` INT NOT NULL AUTO_INCREMENT,
  `numTickets` INT NULL,
  `price` DECIMAL(10,2) NULL,
  `userID` INT NOT NULL,
  `promoID` INT NULL,
  `cardNo` VARCHAR(16) NOT NULL,
  `showDate` DATE NOT NULL,
  `showtimeID` INT NOT NULL,
  `showroomID` INT NOT NULL,
  PRIMARY KEY (`bookingID`),
  INDEX `fk_Booking_User1_idx` (`userID` ASC) VISIBLE,
  INDEX `fk_Booking_Promotion1_idx` (`promoID` ASC) VISIBLE,
  INDEX `fk_Booking_Account1_idx` (`cardNo` ASC) VISIBLE,
  INDEX `fk_Booking_Screening1_idx` (`showDate` ASC, `showtimeID` ASC, `showroomID` ASC) VISIBLE,
  CONSTRAINT `fk_Booking_User1`
    FOREIGN KEY (`userID`)
    REFERENCES `mydb`.`User` (`userID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Booking_Promotion1`
    FOREIGN KEY (`promoID`)
    REFERENCES `mydb`.`Promotion` (`promoID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Booking_Account1`
    FOREIGN KEY (`cardNo`)
    REFERENCES `mydb`.`Account` (`cardNo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Booking_Screening1`
    FOREIGN KEY (`showDate` , `showtimeID` , `showroomID`)
    REFERENCES `mydb`.`Screening` (`showDate` , `showtimeID` , `showroomID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`TicketType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`TicketType` ;

CREATE TABLE IF NOT EXISTS `mydb`.`TicketType` (
  `typeID` INT NOT NULL AUTO_INCREMENT,
  `typeName` VARCHAR(45) NOT NULL,
  `price` DECIMAL(5,2) NOT NULL,
  PRIMARY KEY (`typeID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ticket`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Ticket` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Ticket` (
  `ticketID` INT NOT NULL AUTO_INCREMENT,
  `bookingID` INT NOT NULL,
  `typeID` INT NOT NULL,
  PRIMARY KEY (`ticketID`),
  INDEX `fk_Ticket_Booking1_idx` (`bookingID` ASC) VISIBLE,
  INDEX `fk_Ticket_TicketType1_idx` (`typeID` ASC) VISIBLE,
  CONSTRAINT `fk_Ticket_Booking1`
    FOREIGN KEY (`bookingID`)
    REFERENCES `mydb`.`Booking` (`bookingID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ticket_TicketType1`
    FOREIGN KEY (`typeID`)
    REFERENCES `mydb`.`TicketType` (`typeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Seat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Seat` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Seat` (
  `row` INT NOT NULL,
  `col` INT NOT NULL,
  `showroomID` INT NOT NULL,
  PRIMARY KEY (`row`, `col`, `showroomID`),
  INDEX `fk_Seat_Showroom1_idx` (`showroomID` ASC) VISIBLE,
  CONSTRAINT `fk_Seat_Showroom1`
    FOREIGN KEY (`showroomID`)
    REFERENCES `mydb`.`Showroom` (`showroomID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;