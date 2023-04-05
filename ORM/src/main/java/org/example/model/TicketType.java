/*package org.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "TicketType")
public class TicketType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "typeID")
    private int typeId;

    @Column(name = "typeName")
    private String typeName;

    @Column(name = "price")
    private double price;

    // Constructors, getters and setters

    public TicketType() {}

    public TicketType(String typeName, double price) {
        this.typeName = typeName;
        this.price = price;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "TicketType{" +
                "typeId=" + typeId +
                ", typeName='" + typeName + '\'' +
                ", price=" + price +
                '}';
    }
}

*/