/*package org.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Promotion")
public class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "promoID")
    private int promoID;

    @Column(name = "name")
    private String name;

    @Column(name = "discount")
    private double discount;

    public Promotion() {}

    public Promotion(String name, double discount) {
        this.name = name;
        this.discount = discount;
    }

    public int getPromoID() {
        return promoID;
    }

    public void setPromoID(int promoID) {
        this.promoID = promoID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    @Override
    public String toString() {
        return "Promotion [promoID=" + promoID + ", name=" + name + ", discount=" + discount + "]";
    }
}
*/