package com.codeoftheweb.salvo.players;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class SalvoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalvoApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(PlayerRepository repository) {
		return (args) -> {
			// save a couple of customers
			repository.save(new Player("Jack"));
			repository.save(new Player("Chloe"));
			repository.save(new Player("Kim"));
			repository.save(new Player("David"));
			repository.save(new Player("Michelle"));
		};
	}
	/*@Bean
	public CommandLineRunner initData(GameRepository repository) {
		return (args) -> {
			// save a couple of customers
			repository.save(new Game());
			repository.save(new Game());
			repository.save(new Game());
		};
	}*/
}
