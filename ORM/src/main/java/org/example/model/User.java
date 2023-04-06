package org.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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


    @ManyToOne
    @JoinColumn(name = "typeID")
    private UserType userType;
/*
    @ManyToOne
    @JoinColumn(name = "statusID")
    private Status status;
    */
    public User() {}

    public User(String firstName, String lastName, String email, String password, String phone, boolean enrolledForPromo, String address, String city, String state, String zip, UserType userType/*, Status status*/) {
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
        this.userType = userType;
        //this.status = status;
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


    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }
/*
    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }*/

    @Override
    public String toString() {
        return "User{" +
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
                ", userType=" + userType +
                //", status=" + status +
                '}';
    }
}