package org.example.service;

import jakarta.mail.MessagingException;




public interface EmailService {

    public void sendMail(String mailAddress, String title, String mailMessage) throws MessagingException;


}
