package org.example.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Account")
public class Account {

    @Id
    @Column(name = "cardNo", nullable = false, length = 16)
    private String cardNo;

    @Column(name = "CVV")
    private Integer CVV;

    @Column(name = "cardType", length = 45)
    private String cardType;

    @Column(name = "expiration")
    private Date expiration;

    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "billingID")
    private BillingAddress billingAddress;

    // default constructor
    public Account() {
    }

    // constructor with parameters
    public Account(String cardNo, Integer CVV, String cardType, Date expiration, User user, BillingAddress billingAddress) {
        this.cardNo = cardNo;
        this.CVV = CVV;
        this.cardType = cardType;
        this.expiration = expiration;
        this.user = user;
        this.billingAddress = billingAddress;
    }

    // getters and setters
    public String getCardNo() {
        return cardNo;
    }

    public void setCardNo(String cardNo) {
        this.cardNo = cardNo;
    }

    public Integer getCVV() {
        return CVV;
    }

    public void setCVV(Integer CVV) {
        this.CVV = CVV;
    }

    public String getCardType() {
        return cardType;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    public Date getExpiration() {
        return expiration;
    }

    public void setExpiration(Date expiration) {
        this.expiration = expiration;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public BillingAddress getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(BillingAddress billingAddress) {
        this.billingAddress = billingAddress;
    }

    @Override
    public String toString() {
        return "Account{" +
                "cardNo='" + cardNo + '\'' +
                ", CVV=" + CVV +
                ", cardType='" + cardType + '\'' +
                ", expiration=" + expiration +
                ", user=" + user +
                ", billingAddress=" + billingAddress +
                '}';
    }
}
