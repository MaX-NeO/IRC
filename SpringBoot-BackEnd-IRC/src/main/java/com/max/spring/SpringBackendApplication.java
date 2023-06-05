package com.max.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication

//Swagger UI Header Configuration

@OpenAPIDefinition(
		info =@Info(
				// Swagger Documentation Title
				title = "SpringBoot - Backend - IRC - Sample - NEO",
				// API Version info
				version = "1.0.2",
				description = "Sample IRC Project",
				contact = @Contact(
						
						// API Author
						name = "MaX",
						
						// Author e-mail
						email = "max.neo.dev@gmail.com"
						)
				)
		)


public class SpringBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBackendApplication.class, args);
	}

}
