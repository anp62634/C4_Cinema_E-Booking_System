package org.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "User")
public class User {

    @Id
    @Column(name="userID")
    // should generation type be identity or auto
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userID;

    @Column(name="firstName")
    private String firstName;

    @Column(name="lastName")
    private String lastName;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="phone")
    private String phone;

    @Column(name="enrolledForPromo")
    private boolean enrolledForPromo;

    @Column(name="address")
    private String address;

    @Column(name="city")
    private String city;

    @Column(name="state")
    private String state;

    @Column(name="zip")
    private String zip;
    
    @Column(name="verification_code", length = 6)
    private String code;


    /*
    @ManyToOne
    @JoinColumn(name = "typeID")
    private UserType userType;
    */

    //@Column(name = "active")
    //private boolean active;

    public User() {
    }

    public User(int userID, String firstName, String lastName, String email, String password, String phone, boolean enrolledForPromo, String address, String city, String state, String zip, String code/*, boolean active*/) {
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
        this.code = code;
        //this.active = active;
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
    
    public String getCode() {
        return this.code;
    }

    public void setCode(String code) { this.code = code;}



    //public boolean isActive() { return active; }

    //public void setActive(boolean status) { this.active = active;}


    /*
    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }
    */

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
                //", active=" + active +
                '}';
    }
}
