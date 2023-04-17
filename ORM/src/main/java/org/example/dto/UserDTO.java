package org.example.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class UserDTO {

    private int userID;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;
    private boolean enrolledForPromo;
    private String address;
    private String city;
    private String state;
    private String zip;
    //private boolean active;

    public UserDTO(int userID, String firstName, String lastName, String email, String password, String phone, boolean enrolledForPromo, String address, String city, String state, String zip/*, boolean active*/) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.enrolledForPromo = enrolledForPromo;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        //this.active = active;
    }

    public UserDTO() {
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public boolean isEnrolledForPromo() {
        return enrolledForPromo;
    }

    public void setEnrolledForPromo(boolean enrolledForPromo) {
        this.enrolledForPromo = enrolledForPromo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    /*public boolean isActive() {
        return active;
    }*/

    /*public void setActive(boolean active) {
        this.active = active;
    }*/

    @Override
    public String toString() {
        return "UserDTO{" +
                "userID=" + userID +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", enrolledForPromo=" + enrolledForPromo +
                ", address='" + address + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zip='" + zip + '\'' +
                //", active=" + active +
                '}';
    }
}