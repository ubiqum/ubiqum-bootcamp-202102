package com.codeoftheweb.salvo_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class SalvoController {

    @Autowired
    private GameRepository gameRepository;

//    @RequestMapping("/api/games")
//    public List<Game> getAll() {
//        return gameRepository.findAll();
//    }

    //    @RequestMapping("/api/games")
//    public List<Object> getAllGames() {
//        return gameRepository
//                .findAll()
//                .stream()
//                .map(game -> toDTO(game))
//                .collect(Collectors.toList());
//    }
//
//    private  Map<String, Object> toDTO(Game game) {
//        Map<String, Object> dto = new LinkedHashMap<String, Object>();
//        dto.put("id", game.getId());
//        dto.put("creationDate", game.getCreationDate());
//        return dto;
//    }
    @CrossOrigin(origins = "*")
    @RequestMapping("/api/games")
    public List<Object> getAllGames() {
        return gameRepository
                .findAll()
                .stream()
                .map(game -> makeGameDTO(game))
                .collect(Collectors.toList());
    }

    private Map<String, Object> makeGameDTO(Game game) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", game.getId());
        dto.put("created", game.getCreationDate());
        dto.put("gamePlayers", game.gamePlayers.stream().map(gamePlayer -> makeGamePlayerDTO(gamePlayer)));
        return dto;
    }

    private Map<String, Object> makeGamePlayerDTO(GamePlayer gp) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", gp.getId());
        dto.put("player", makePlayerDTO(gp.getPlayer()));
        return dto;
    }

    private Map<String, Object> makePlayerDTO(Player player) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", player.getId());
        dto.put("email", player.getUserName());
        return dto;
    }

    @Autowired
    private GamePlayerRepository gamePlayerRepository;

    @CrossOrigin(origins = "*")
    @RequestMapping("/api/game_view/{gamePlayerId}")
    public Optional<Object> getGameView(@PathVariable Long gamePlayerId) {
        //gamePlayerRepository.findById(gamePlayerId).orElse(null);
        return gamePlayerRepository
                .findById(gamePlayerId)
                .map(gamePlayer -> makeGameViewDTO(gamePlayer));
    }

    private Map<String, Object> makeGameViewDTO(GamePlayer gamePlayer) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", gamePlayer.getId());
        dto.put("game", gamePlayer.getGame());
        dto.put("player", makePlayerDTO(gamePlayer.getPlayer()));
        dto.put("joinDate", gamePlayer.getJoinDate());
        dto.put("gamePlayers", gamePlayer.getGame().gamePlayers.stream().map(gp -> makeGamePlayerDTO(gp)));
        dto.put("ships", gamePlayer.ships.stream().map(ship -> makeShipDTO(ship)));
        return dto;
    }

    private Map<String, Object> makeShipDTO(Ship ship) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", ship.getId());
        dto.put("type", ship.getType());
        dto.put("locations", ship.getLocations());
        return dto;
    }


}


