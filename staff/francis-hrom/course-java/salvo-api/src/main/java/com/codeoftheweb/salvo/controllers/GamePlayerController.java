package com.codeoftheweb.salvo.controllers;

import com.codeoftheweb.salvo.models.*;
import com.codeoftheweb.salvo.repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class GamePlayerController {

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private GamePlayerRepository gamePlayerRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Autowired
    private ShipRepository shipRepository;

    // ? difference RequestMapping and GetMapping
    @GetMapping("/api/play")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Long getGamePlayerId(Authentication authentication) {
        Player player = playerRepository.findByUsername(authentication.getName()).orElse(null);
        List<Game> unfinishedGames = gameRepository.findAll().stream().filter(game -> game.getScores().size() == 0).collect(Collectors.toList());

        List<GamePlayer> gamePlayersWithUnfinishedGame = new ArrayList<>();
        unfinishedGames.forEach(game -> gamePlayersWithUnfinishedGame.addAll(game.getGamePlayers()));

        // relevant GamePlayer = unfinished game and this player
        GamePlayer relevantGamePlayer = gamePlayersWithUnfinishedGame.stream().filter(gamePlayer -> gamePlayer.getPlayer().getUsername().equals(player.getUsername())).findFirst().orElse(null);

        // unfinished game of this player exists
      //  if (relevantGamePlayer.getId() != null) {
            if (relevantGamePlayer != null) {
            return relevantGamePlayer.getId();
        }

        // unfinished game with just one player exists
        Game unfinishedGameWithOnePlayer = unfinishedGames.stream().filter(game -> game.getGamePlayers().size() == 1).findFirst().orElse(null);

        if (unfinishedGameWithOnePlayer != null) {
            GamePlayer newGamePlayer = new GamePlayer(player, unfinishedGameWithOnePlayer);
            gamePlayerRepository.save(newGamePlayer);
            return newGamePlayer.getId();
        }

        // otherwise create a new game and new gamePlayer
        Game newGame = new Game();
        gameRepository.save(newGame);

        GamePlayer newGamePlayer = new GamePlayer(player, newGame);
        gamePlayerRepository.save(newGamePlayer);

        return newGamePlayer.getId();
    }
}