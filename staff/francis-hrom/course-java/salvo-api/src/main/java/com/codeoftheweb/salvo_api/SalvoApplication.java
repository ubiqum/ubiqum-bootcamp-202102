package com.codeoftheweb.salvo_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.Date;


@SpringBootApplication
public class SalvoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalvoApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(PlayerRepository playerRepository, GameRepository gameRepository, GamePlayerRepository gamePlayerRepository, ShipRepository shipRepository) {
		return (args) -> {
			Player p1 = new Player("j.bauer@ctu.gov");
			Player p2 = new Player("c.obrian@ctu.gov");
			Player p3 = new Player("kim_bauer@gmail.com");
			Player p4 = new Player("t.almeida@ctu.gov");

			playerRepository.save(p1);
			playerRepository.save(p2);
			playerRepository.save(p3);
			playerRepository.save(p4);


			Game g1 = new Game();
			Date date = new Date();
			Date newDate1h = Date.from(date.toInstant().plusSeconds(3600));
			Game g2 = new Game(newDate1h);
			Date newDate3h = Date.from(date.toInstant().plusSeconds(3600*3));
			Game g3 = new Game(newDate3h);

			gameRepository.save(g1);
			gameRepository.save(g2);
			gameRepository.save(g3);


			GamePlayer gp1 = new GamePlayer(p2, g1);
			GamePlayer gp2 = new GamePlayer(p1, g1);
			GamePlayer gp3 = new GamePlayer(p1, g2);

			gamePlayerRepository.save(gp1);
			gamePlayerRepository.save(gp2);
			gamePlayerRepository.save(gp3);

			Ship s1 = new Ship("Destroyer",gp1, Arrays.asList("H2", "H3", "H4"));
			Ship s2 = new Ship("Submarine",gp1, Arrays.asList("E1", "F1", "G1"));
			Ship s3 = new Ship("Patrol Boat",gp1, Arrays.asList("B4", "B5"));
			Ship s4 = new Ship("Destroyer",gp2, Arrays.asList("B5", "C5", "D5"));

			shipRepository.save(s1);
			shipRepository.save(s2);
			shipRepository.save(s3);
			shipRepository.save(s4);

		};
	}
}
