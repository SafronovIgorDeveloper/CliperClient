package com.cliper;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class WebCliperClient {
    public static void main(String[] args) {
        SpringApplication.run(WebCliperClient.class, args);
        System.out.println("http://localhost:8080/");
    }
}