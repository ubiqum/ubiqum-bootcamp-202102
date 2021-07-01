package com.codeoftheweb.salvo;

import com.codeoftheweb.salvo.models.*;
import com.codeoftheweb.salvo.repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.Date;


@SpringBootApplication
public class SalvoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalvoApplication.class, args);
	}

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Bean
	public CommandLineRunner initData(
			PlayerRepository playerRepository,
			GameRepository gameRepository,
			GamePlayerRepository gamePlayerRepository,
			ShipRepository shipRepository,
			SalvoRepository salvoRepository,
			ScoreRepository scoreRepository,
			RoleRepository roleRepository
			) {
		return (args) -> {
			Role r1 = new Role(ERole.ROLE_USER);
			Role r2 = new Role(ERole.ROLE_MODERATOR);
			Role r3 = new Role(ERole.ROLE_ADMIN);

			roleRepository.save(r1);
			roleRepository.save(r2);
			roleRepository.save(r3);

			Player p1 = new Player("Captain_Jack","j.bauer@ctu.gov", passwordEncoder.encode("24"));
			Player p2 = new Player("Obrian","c.obrian@ctu.gov", passwordEncoder.encode("42"));
			Player p3 = new Player("Kiminator","kim_bauer@gmail.com", passwordEncoder.encode("kb"));
			Player p4 = new Player("Almeida","t.almeida@ctu.gov", passwordEncoder.encode("mole"));

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
			Game g4 = new Game();
			Game g5 = new Game();
			Game g6 = new Game();
			Game g7 = new Game();
			Game g8 = new Game();

			gameRepository.save(g1);
			gameRepository.save(g2);
			gameRepository.save(g3);
			gameRepository.save(g4);
			gameRepository.save(g5);
			gameRepository.save(g6);
			gameRepository.save(g7);
			gameRepository.save(g8);

			GamePlayer gp1 = new GamePlayer(p1, g1);
			GamePlayer gp2 = new GamePlayer(p2, g1);
			GamePlayer gp3 = new GamePlayer(p1, g2);
			GamePlayer gp4 = new GamePlayer(p2, g2);
			GamePlayer gp5 = new GamePlayer(p2, g3);
			GamePlayer gp6 = new GamePlayer(p4, g3);
			GamePlayer gp7 = new GamePlayer(p2, g4);
			GamePlayer gp8 = new GamePlayer(p1, g4);
			GamePlayer gp9 = new GamePlayer(p4, g5);
			GamePlayer gp10 = new GamePlayer(p1, g5);
			GamePlayer gp11 = new GamePlayer(p3, g6);
			GamePlayer gp12 = new GamePlayer(p4, g7);
			GamePlayer gp13 = new GamePlayer(p4, g8);
			GamePlayer gp14 = new GamePlayer(p3, g8);

			gamePlayerRepository.save(gp1);
			gamePlayerRepository.save(gp2);
			gamePlayerRepository.save(gp3);
			gamePlayerRepository.save(gp4);
			gamePlayerRepository.save(gp5);
			gamePlayerRepository.save(gp6);
			gamePlayerRepository.save(gp7);
			gamePlayerRepository.save(gp8);
			gamePlayerRepository.save(gp9);
			gamePlayerRepository.save(gp10);
			gamePlayerRepository.save(gp11);
			gamePlayerRepository.save(gp12);
			gamePlayerRepository.save(gp13);
			gamePlayerRepository.save(gp14);

			Ship s1 = new Ship("Destroyer",gp1, Arrays.asList("H2","H3","H4"));
			Ship s2 = new Ship("Submarine",gp1, Arrays.asList("E1","F1","G1"));
			Ship s3 = new Ship("Patrol Boat",gp1, Arrays.asList("B4","B5"));
			Ship s4 = new Ship("Destroyer",gp2, Arrays.asList("B5","C5","D5"));
			Ship s5 = new Ship("Patrol Boat",gp2, Arrays.asList("F1","F2"));
			Ship s6 = new Ship("Destroyer",gp3, Arrays.asList("B5","C5","D5"));
			Ship s7 = new Ship("Patrol Boat",gp3, Arrays.asList("C6","C7"));
			Ship s8 = new Ship("Submarine",gp4, Arrays.asList("A2","A3","A4"));
			Ship s9 = new Ship("Patrol Boat",gp4, Arrays.asList("G6","H6"));
			Ship s10 = new Ship("Destroyer",gp5, Arrays.asList("B5","C5","D5"));
			Ship s11 = new Ship("Patrol Boat",gp5, Arrays.asList("C6","C7"));
			Ship s12 = new Ship("Submarine",gp6, Arrays.asList("A2","A3","A4"));
			Ship s13 = new Ship("Patrol Boat",gp6, Arrays.asList("G6","H6"));
			Ship s14 = new Ship("Destroyer",gp7, Arrays.asList("B5","C5","D5"));
			Ship s15 = new Ship("Patrol Boat",gp7, Arrays.asList("C6","C7"));
			Ship s16 = new Ship("Submarine",gp8, Arrays.asList("A2","A3","A4"));
			Ship s17 = new Ship("Patrol Boat",gp8, Arrays.asList("G6","H6"));
			Ship s18 = new Ship("Destroyer",gp9, Arrays.asList("B5","C5","D5"));
			Ship s19 = new Ship("Patrol Boat",gp9, Arrays.asList("C6","C7"));
			Ship s20 = new Ship("Submarine",gp10, Arrays.asList("A2","A3","A4"));
			Ship s21 = new Ship("Patrol Boat",gp10, Arrays.asList("G6","H6"));
			Ship s22 = new Ship("Destroyer",gp11, Arrays.asList("B5","C5","D5"));
			Ship s23 = new Ship("Patrol Boat",gp11, Arrays.asList("C6","C7"));
			Ship s24 = new Ship("Destroyer",gp12, Arrays.asList("B5","C5","D5"));
			Ship s25 = new Ship("Patrol Boat",gp12, Arrays.asList("C6","C7"));
			Ship s26 = new Ship("Submarine",gp13, Arrays.asList("A2","A3","A4"));
			Ship s27 = new Ship("Patrol Boat",gp13, Arrays.asList("G6","H6"));

			shipRepository.save(s1);
			shipRepository.save(s2);
			shipRepository.save(s3);
			shipRepository.save(s4);
			shipRepository.save(s5);
			shipRepository.save(s6);
			shipRepository.save(s7);
			shipRepository.save(s8);
			shipRepository.save(s9);
			shipRepository.save(s10);
			shipRepository.save(s11);
			shipRepository.save(s12);
			shipRepository.save(s13);
			shipRepository.save(s14);
			shipRepository.save(s15);
			shipRepository.save(s16);
			shipRepository.save(s17);
			shipRepository.save(s18);
			shipRepository.save(s19);
			shipRepository.save(s20);
			shipRepository.save(s21);
			shipRepository.save(s22);
			shipRepository.save(s23);
			shipRepository.save(s24);
			shipRepository.save(s25);
			shipRepository.save(s26);
			shipRepository.save(s27);

			Salvo sv1 = new Salvo(1,gp1, Arrays.asList("B5","C5","F1"));
			Salvo sv2 = new Salvo(2,gp1, Arrays.asList("F2","D5"));
			Salvo sv3 = new Salvo(1,gp3, Arrays.asList("A2","A4","G6"));
			Salvo sv4 = new Salvo(2,gp3, Arrays.asList("A3","H6"));
			Salvo sv5 = new Salvo(1,gp5, Arrays.asList("G6","H6","A4"));
			Salvo sv6 = new Salvo(2,gp5, Arrays.asList("A2","A3","D8"));
			Salvo sv7 = new Salvo(1,gp7, Arrays.asList("A3","A4","F7"));
			Salvo sv8 = new Salvo(2,gp7, Arrays.asList("A2","G6","H6"));
			Salvo sv9 = new Salvo(1,gp9, Arrays.asList("A1","A2","A3"));
			Salvo sv10 = new Salvo(2,gp9, Arrays.asList("G6","G7","G8"));
			Salvo sv11 = new Salvo(1,gp2, Arrays.asList("B4","B5","B6"));
			Salvo sv12 = new Salvo(2,gp2, Arrays.asList("E1","H3","A2"));
			Salvo sv13 = new Salvo(1,gp4, Arrays.asList("B5","D5","C7"));
			Salvo sv14 = new Salvo(2,gp4, Arrays.asList("C5","C6"));
			Salvo sv15 = new Salvo(1,gp6, Arrays.asList("H1","H2","H3"));
			Salvo sv16 = new Salvo(2,gp6, Arrays.asList("E1","F2","G3"));
			Salvo sv17 = new Salvo(1,gp8, Arrays.asList("B5","C6","H1"));
			Salvo sv18 = new Salvo(2,gp8, Arrays.asList("C5","C7","D5"));
			Salvo sv19 = new Salvo(1,gp10, Arrays.asList("B5","B6","C7"));
			Salvo sv20 = new Salvo(2,gp10, Arrays.asList("C6","D6","E6"));
			Salvo sv21 = new Salvo(3,gp10, Arrays.asList("H1","H8"));

			salvoRepository.save(sv1);
			salvoRepository.save(sv2);
			salvoRepository.save(sv3);
			salvoRepository.save(sv4);
			salvoRepository.save(sv5);
			salvoRepository.save(sv6);
			salvoRepository.save(sv7);
			salvoRepository.save(sv8);
			salvoRepository.save(sv9);
			salvoRepository.save(sv10);
			salvoRepository.save(sv11);
			salvoRepository.save(sv12);
			salvoRepository.save(sv13);
			salvoRepository.save(sv14);
			salvoRepository.save(sv15);
			salvoRepository.save(sv16);
			salvoRepository.save(sv17);
			salvoRepository.save(sv18);
			salvoRepository.save(sv19);
			salvoRepository.save(sv20);
			salvoRepository.save(sv21);

			Score sc1 = new Score(p1,g1,1.0);
			Score sc2 = new Score(p2,g1,0.0);
			Score sc3 = new Score(p1,g2,0.5);
			Score sc4 = new Score(p2,g2,0.5);
			Score sc5 = new Score(p2,g3,1.0);
			Score sc6 = new Score(p4,g3,0.0);
			Score sc7 = new Score(p2,g4,0.0);
			Score sc8 = new Score(p1,g4,0.0);

			scoreRepository.save(sc1);
			scoreRepository.save(sc2);
			scoreRepository.save(sc3);
			scoreRepository.save(sc4);
			scoreRepository.save(sc5);
			scoreRepository.save(sc6);
			scoreRepository.save(sc7);
			scoreRepository.save(sc8);


		};
	}
}

