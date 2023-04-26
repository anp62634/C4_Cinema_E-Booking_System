package org.example.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImp implements EmailService {

    private Environment env;

    @Autowired
    private JavaMailSender javaMailSender;


   @Autowired
   public EmailServiceImp(Environment env) {
       this.env = env;
   }

    @Override
    public void sendMail(String mailAddress, String title, String mailMessage) throws MessagingException {
       //line for testing
        // System.out.println(this.getClass().getName() + ".SendMail Start!");

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true); // set the second parameter to true
        helper.setFrom(env.getProperty("spring.mail.username"));
        helper.setTo(mailAddress);
        helper.setSubject(mailMessage);
        helper.setText(title, true); // set the third parameter to true
        javaMailSender.send(message);

        //line for testing
        //System.out.println(this.getClass().getName() + ".SendMail End!");
    }
}