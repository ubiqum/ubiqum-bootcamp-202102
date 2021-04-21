package com.codeoftheweb.salvo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

import static java.util.stream.Collectors.toList;

@RestController
public class SalvoController {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private GamePlayerRepository gamePlayerRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @RequestMapping("/api/games")
    public List<Map<String, Object>> getGames() {
        return gameRepository.findAll().stream().map(game -> {
            Map<String, Object> gameMap = new TreeMap<>();

            gameMap.put("id", game.getId());
            gameMap.put("created", game.getCreation());
            gameMap.put("gamePlayers", game.getPlayers());

            return gameMap;
        }).collect(toList());
    }

    @RequestMapping("/api/game_view/{gamePlayerId}")
    public Map<String, Object> getGameView(@PathVariable Long gamePlayerId){
        Map<String, Object> gameView = new TreeMap<>();
        Optional<GamePlayer> gamePlayer = gamePlayerRepository.findById(gamePlayerId);

        gameView.put("id",gamePlayer.get().getGame().getId());

        gameView.put("created", gamePlayer.get().getGame().getCreation());

        Set<GamePlayer> gamePlayers= gamePlayer.get().getGame().getGamePlayers();
        List<Map<String, Object>> gamePlayerList = gamePlayers.stream().map(gamePlayer1 -> {
            Map<String,Object> gamePlayerInfo = new TreeMap<>();
            gamePlayerInfo.put("id", gamePlayer1.getId());
            gamePlayerInfo.put("player", gamePlayer1.getPlayer());
           return gamePlayerInfo;
        }).collect(toList());
        gameView.put("gamePlayers", gamePlayerList);

        Set<Ship> ships = gamePlayer.get().getShips();
        List<Map<String,Object>> shipList = ships.stream().map(ship ->{
            Map<String,Object> shipInfo = new TreeMap<>();
            shipInfo.put("Type", ship.getType());
            shipInfo.put("Location", ship.getLocation());
            return shipInfo;
        }).collect(toList());
        gameView.put("ships", shipList);


        return gameView;
    }
}
