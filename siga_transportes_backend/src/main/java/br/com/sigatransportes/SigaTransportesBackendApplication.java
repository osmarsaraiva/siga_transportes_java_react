package br.com.sigatransportes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class SigaTransportesBackendApplication {
	
	
	public static void main(String[] args) {
		SpringApplication.run(SigaTransportesBackendApplication.class, args);
	}

}
