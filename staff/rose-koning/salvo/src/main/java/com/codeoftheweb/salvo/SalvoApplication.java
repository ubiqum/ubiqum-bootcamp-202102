package com.codeoftheweb.salvo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class SalvoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalvoApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(PlayerRepository playerRepository,
									  GameRepository gameRepository,
									  GamePlayerRepository gamePlayerRepository, ShipRepository shipRepository){return (args) -> {

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
		GamePlayer gp2 = new GamePlayer(g1, p2);
		GamePlayer gp3 = new GamePlayer(g2, p2);
		GamePlayer gp4 = new GamePlayer(g2, p3);
		GamePlayer gp5 = new GamePlayer(g3, p1);
		GamePlayer gp6 = new GamePlayer(g3, p3);

		Ship sh1 = new Ship("battleShip",  new ArrayList<>(Arrays.asList("h2","h3","h4")));
		Ship sh2 = new Ship("landingShip",new ArrayList<>(Arrays.asList("j3","j4","j5" )));
		Ship sh3 = new Ship("lifeRaft", new ArrayList<>(Arrays.asList("a1","a2","a3")));
		Ship sh4 = new Ship("battleShip", new ArrayList<>(Arrays.asList("k3","k2","k1")));
		Ship sh5 = new Ship("landingShip", new ArrayList<>(Arrays.asList("j3","j4","j5")));
		Ship sh6 = new Ship("lifeRaft",new ArrayList<>(Arrays.asList("c1","c2","c3")));
		Ship sh7 = new Ship("battleShip",  new ArrayList<>(Arrays.asList("i1","j1","k1")));
		Ship sh8 = new Ship("landingShip",new ArrayList<>(Arrays.asList("a1","a2","a3" )));
		Ship sh9 = new Ship("lifeRaft", new ArrayList<>(Arrays.asList("k3","k2","k1")));

		gp1.addShip(sh1);
		gp1.addShip(sh2);
		gp1.addShip(sh3);
		gp2.addShip(sh4);
		gp2.addShip(sh5);
		gp2.addShip(sh6);
		gp3.addShip(sh7);
		gp3.addShip(sh8);
		gp3.addShip(sh9);

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

		shipRepository.save(sh1);
		shipRepository.save(sh2);
		shipRepository.save(sh3);

	};
	}
}
