/*package org.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usertype")
public class UserType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int typeID;
    private String typeName;


    public UserType(){}

    public UserType(String typeName) {
        this.typeName = typeName;
    }


    public int getTypeID() {
        return typeID;
    }

    public void setTypeID(int typeID) {
        this.typeID = typeID;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    @Override
    public String toString() {
        return "UserType{" +
                "typeID=" + typeID +
                ", typeName='" + typeName + '\'' +
                '}';
    }
}
*/