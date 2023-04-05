/*package org.example;

//import org.example.model.UserType;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

public class HibernateDriver {

    private SessionFactory factory;

    @BeforeEach
    protected void setUp() throws Exception {

        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder().configure().build();

        try {
            factory = new MetadataSources(registry).buildMetadata().buildSessionFactory();
        }
        catch (Exception e) {
            StandardServiceRegistryBuilder.destroy(registry);
        }
    }

    @AfterEach
    protected void tearDown() throws Exception {
        if ( factory != null ) {
            factory.close();
        }
    }

    @Test
    public void saveObject() {

        UserType userType = new UserType("Random");

        try (Session session = factory.openSession()) {
            session.beginTransaction();
            session.persist(userType);
            List<UserType> types = session.createQuery("select u from UserType u", UserType.class).list();
            types.forEach(System.out::println);
            session.getTransaction().commit();
        }
    }

}
*/