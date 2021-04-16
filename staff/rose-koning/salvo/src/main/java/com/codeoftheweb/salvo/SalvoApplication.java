package com.codeoftheweb.salvo;

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
	public CommandLineRunner initData(PlayerRepository playerRepository,
									  GameRepository gameRepository,
									  GamePlayerRepository gamePlayerRepository){return (args) -> {

		//Adding PLayers
		Player p1 = new Player("Peter");
		Player p2 = new Player("Wendy");
		Player p3 = new Player("Captain");

		//Adding Games
		Game g1 = new Game();
		Game g2 = new Game();
		Game g3 = new Game();

		//Adding GamePlayers
		GamePlayer gp1 = new GamePlayer(g1, p1);
		GamePlayer gp2 = new GamePlayer(g1, p1);
		GamePlayer gp3 = new GamePlayer(g2, p2);
		GamePlayer gp4 = new GamePlayer(g3, p2);
		GamePlayer gp5 = new GamePlayer(g2, p3);
		GamePlayer gp6 = new GamePlayer(g3, p3);

		playerRepository.save(p1);
		playerRepository.save(p2);
		playerRepository.save(p3);

		gameRepository.save(g1);
		gameRepository.save(g2);
		gameRepository.save(g3);

		gamePlayerRepository.save(gp1);
		gamePlayerRepository.save(gp2);
		gamePlayerRepository.save(gp3);
		gamePlayerRepository.save(gp4);
		gamePlayerRepository.save(gp5);
		gamePlayerRepository.save(gp6);

	};
	}
}
