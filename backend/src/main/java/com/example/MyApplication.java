package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@SpringBootApplication
public class MyApplication {

	@CrossOrigin
	@RequestMapping("/")
	String home() {
		return "Welcome to my website!";
	}

	public static void main(String[] args) {
		SpringApplication.run(MyApplication.class, args);
	}

}
